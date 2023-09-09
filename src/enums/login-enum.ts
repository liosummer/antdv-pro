export enum LoginType {
  // 账号密码
  USERNAME_PASSWORD = 'USERNAME_PASSWORD',
  // 手机密码登录
  PHONE_MESSAGE_CODE = 'PHONE_MESSAGE_CODE',
}

// 客户端枚举
export enum ClientType {
  // web
  WEB = 'web',
  PC = 'pc',
  IOS = 'ios',
  ANDROID = 'android',
  // 手机端包含IOS和ANDROID
  APP = 'app',
  // 小程序
  MINI = 'mini',
}
