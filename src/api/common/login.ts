import type { ClientType, LoginType } from '~#/login-enum.ts'

export interface LoginParams {
  loginName: string
  credential: string
  loginType: LoginType
  clientType: ClientType
  imageCode?: string
  imageId?: string
  remember?: boolean
}

export interface LoginResultModel {
  accessToken: string
  loginTime: string
}

export const loginApi = (params: LoginParams) => {
  return usePost<LoginResultModel, LoginParams>('/auth/login', params, {
    // 设置为false的时候不会携带token
    token: false,
    // 开发模式下使用自定义的接口
    customDev: true,
    // 是否开启全局请求loading
    loading: true,
  })
}

export const logoutApi = () => {
  return useGet('/logout')
}
