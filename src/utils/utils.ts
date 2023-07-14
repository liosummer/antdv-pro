import { isObject } from '@v-c/utils'
import { camelCase } from 'lodash'

export type CamelCase<T extends Record<string, any>> = {
  [K in Extract<keyof T, string> as Uncapitalize<K>]: T[K] extends Record<string, any> ? CamelCase<T[K]> : T[K]
}
export const camelCaseObj = <T extends Record<string, any>>(obj: T): CamelCase<T> => {
  const newObj: Record<string, any> = {}
  Object.keys(obj).forEach((key: string) => {
    const newKey = camelCase(key)
    newObj[newKey] = isObject(obj[key]) ? camelCaseObj(obj[key]) : obj[key]
  })
  return newObj as CamelCase<T>
}
