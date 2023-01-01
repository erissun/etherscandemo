import { ENV } from '@/Config'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<Token[], string>({
    query: (keyword: string) =>
      `/api.ashx?key=${ENV.API_KEY}&module=search&term=${keyword}`,
  })

export type Token = {
  label: string
  value: string
  desc: string
  typeval: string
  checkmark: string
  logo: string
}
