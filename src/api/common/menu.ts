import { isArray } from '@v-c/utils'
import type { MenuData } from '~@/layouts/basic-layout/typing'
import { camelCaseObj } from '~@/utils/utils'

export const getRouteMenusApi = async () => {
  const res = await useGet<MenuData>('/user/menu')
  if (isArray(res.data) && res.data.length > 0) {
    res.data = res.data.map((v) => {
      return camelCaseObj(v)
    })
  }
  return res
}
