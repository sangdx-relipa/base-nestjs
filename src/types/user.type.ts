export interface UpdateUserData {
  password?: string;
  nickName?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  address?: string;
  secondaryAddress?: string;
  jobPosition?: string;
  phone?: string;
  secondaryPhone?: string;
  secondaryEmail?: string;
  gender?: number;
  about?: string;
  profileImage?: string;
  verified?: boolean;
  active?: boolean;
  verifyToken?: string;
}

export interface CreateUserData {
  email?: string;
  password?: string;
  nickname?: string;
}
