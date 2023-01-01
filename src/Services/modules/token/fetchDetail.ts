import { ENV } from '@/Config'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<TokenDetail, string>({
    query: (args: string) => {
      const parseJSON = JSON.parse(args)
      const { value, typeval } = parseJSON
      return `/api.ashx?key=${ENV.API_KEY}&module=result&value=${value}&type=${typeval}`
    },
    transformResponse: response => response?.result,
  })

export type TokenDetail = {
  address: string
  balance: string
  balanceInUSD: string
  image: string
  marketcap: string
  name: string
  price: string
  totalsupply: string
  type: string
}
