import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  modalBuyDonate: boolean;
  selectedRowBuyDonate: any | null;
}

const initialState: UserState = {
  modalBuyDonate: false,
  selectedRowBuyDonate: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Для перезагрузки таблиц
    setShowModalBuyDonate(state, action: PayloadAction<boolean>) {
      state.modalBuyDonate = action.payload;
    },
    setSelectedBuyDonate(state, action: PayloadAction<any>) {
      state.selectedRowBuyDonate = action.payload;
    },
  },
});

export default userSlice.reducer;
