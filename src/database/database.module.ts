import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get<string>('MYSQL_HOST'),
          port: configService.get<number>('MYSQL_PORT'),
          username: configService.get<string>('MYSQL_USER'),
          password: configService.get<string>('MYSQL_PASS'),
          database: configService.get<string>('MYSQL_DB'),
          entities: [__dirname + '/../**/*.entity.{js,ts}'],
          synchronize: configService.get<string>('SYNCHRONIZE') === 'true',
          logging: true,
        };
      },
    }),
  ],
})

// type: 'mysql',
//           host: configService.get('MYSQL_HOST'),
//           port: configService.get('MYSQL_PORT'),
//           username: configService.get('MYSQL_USER'),
//           password: configService.get('MYSQL_PASSWORD'),
//           database: configService.get('MYSQL_DB'),
//           // entities: [__dirname + '/../**/*.entity.js'],
//           synchronize: configService.get('SYNCHRONIZE') === 'true',
export class DatabaseModule {}
