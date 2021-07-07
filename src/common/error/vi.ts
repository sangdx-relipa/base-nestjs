export const UserError = {};

export const AuthError = {
  TOKEN_NOT_FOUND: {
    message: 'Không tìm thấy token.',
    errorCode: 400,
  },
  TOKEN_INVALID: {
    message: 'Token không hợp lệ.',
    errorCode: 400,
  },
  TOKEN_EXPIRED: {
    message: 'Token đã hết hạn.',
    errorCode: 401,
  },
  MEMBER_TYPE_INVALID: {
    message: 'Loại thành viên không hợp lệ.',
    errorCode: 400,
  },
  REFRESH_TOKEN_NOT_FOUND: {
    message: 'Tôi không thể tìm thấy token thông báo mới.',
    errorCode: 403,
  },
  REFRESH_TOKEN_INVALID: {
    message: 'Làm mới token thông báo không hợp lệ.',
    errorCode: 403,
  },
};

export const CommonError = {
  INVALID_INPUT_PARAMS: {
    message: 'Dữ liệu đầu vào không hợp lệ! Vui lòng kiểm tra lại.',
    errorCode: 400,
  },
  GET_ERROR: {
    message: 'Tải dữ liệu gặp sự cố, vui lòng kiểm tra lại.',
    errorCode: 400,
  },
  NOT_FOUND_ERROR: {
    message: 'Không tìm thấy thông tin.',
    errorCode: 400,
  },
  UNKNOWN_ERROR: {
    message:
      'Lỗi không xác định. Vui lòng liên hệ với đội ngũ admin hoặc kỹ thuật viên.',
    errorCode: 500,
  },
};
