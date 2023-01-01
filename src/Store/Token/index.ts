import { TokenDetail } from '@/Services/modules/token/fetchDetail'
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'token',
  initialState: {
    watchList: [],
  } as WatchListToken,
  reducers: {
    setWatchList: (state, { payload }: TokenScanPayload) => {
      if (payload != undefined) {
        if (
          state.watchList.length < 3 &&
          !JSON.stringify(state.watchList).includes(payload.address || '')
        ) {
          state.watchList = state.watchList.concat(payload)
        }
      }
    },
  },
})

export const { setWatchList } = slice.actions

export default slice.reducer

export type WatchListToken = {
  watchList: TokenDetail[]
}

type TokenScanPayload = {
  payload: TokenDetail
}
