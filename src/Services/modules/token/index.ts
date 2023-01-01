import { api } from '@/Services/api'
import fetchBySearching from './fetchBySearching'
import fetchDetail from './fetchDetail'

export const tokenApi = api.injectEndpoints({
  endpoints: build => ({
    fetchOne: fetchBySearching(build),
    getTokenDetail: fetchDetail(build),
  }),
  overrideExisting: false,
})

export const { useLazyFetchOneQuery, useLazyGetTokenDetailQuery } = tokenApi
