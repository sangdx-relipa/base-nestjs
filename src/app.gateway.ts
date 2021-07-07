import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  GatewayMetadata,
} from '@nestjs/websockets';
import { Logger, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard, jwtConstants } from './auth';
import { Socket, Server } from 'socket.io';

interface GatewayMetadataExtended extends GatewayMetadata {
  handlePreflightRequest: (req, res) => void;
}

const options = {
  handlePreflightRequest: (req, res) => {
    const headers = {
      'Access-Control-Allow-Headers': 'Content-Type, authorization, x-token',
      'Access-Control-Allow-Origin': req.headers.origin,
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Max-Age': '1728000',
      'Content-Length': '0',
    };
    res.writeHead(200, headers);
    res.end();
  },
} as GatewayMetadataExtended;

@WebSocketGateway(options)
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');
  private jwtService: JwtService = new JwtService({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '7d' },
  });


  @SubscribeMessage('app-init')
  logInit(client: Socket, payload?: string): void {
    this.server.emit('app-init', payload);
  }

  afterInit() {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @UseGuards(JwtAuthGuard)
  handleConnection(client: Socket) {
    // const token = client.handshake.headers.authorization;
    // if (token && token != 'null') {
    //   try {
    //     const userInfo = this.jwtService.verify(token);
    //     client.join(userInfo.userId);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }
    // this.logger.log(`Client connected: ${client.id}`);
  }
}
