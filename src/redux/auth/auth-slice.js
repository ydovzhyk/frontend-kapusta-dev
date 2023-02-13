import { createSlice } from '@reduxjs/toolkit';

import { signUp, logIn, googleLogIn, logOut, userUpdateAccount, refresh, getUser } from './auth-operations';

const initialState = {
  user: {},
  newUser: false,
  todaySummary: {},
  accessToken: '',
  refreshToken: '',
  sid: '',
  isLogin: false,
  loading: false,
  isRefreshing: false,
  totalRefresh: false,
  error: null,
};

const accessAuth = (state, payload) => {
  state.user = payload;
  state.sid = payload.sid;
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
  state.loading = false;
  state.isLogin = true;
  state.isRefreshing = false;
  state.totalRefresh = false;
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearNewUser: state => {
      state.newUser = {};
    },
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    // SignUp by email
    builder
      .addCase(signUp.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isLogin = false;
        state.newUser = payload.user.newUser;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });

    // LogIn
    builder
      .addCase(logIn.pending, state => {
        state.newUser = false;
        state.loading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        accessAuth(state, payload);
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });

    // Google LogIn
    builder
      .addCase(googleLogIn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleLogIn.fulfilled, (state, { payload }) => {
        accessAuth(state, payload);
      })
      .addCase(googleLogIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });

    // LogOut
    builder
      .addCase(logOut.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, () => ({ ...initialState }))
      .addCase(logOut.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });

    // User update account
    builder
      .addCase(userUpdateAccount.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userUpdateAccount.fulfilled, (state, { payload }) => {
        accessAuth(state, payload);
        state.loading = false;
      })
      .addCase(userUpdateAccount.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
      });

      // Refresh
      builder
        .addCase(refresh.pending, state => {
          state.loading = true;
          state.error = null;
        })
        .addCase(refresh.fulfilled, (state, { payload }) => {
          state.user = payload;
          state.loading = false;
          state.isLogin = true;
          state.isRefreshing = false;
          state.accessToken = payload.accessToken;
          state.refreshToken = payload.refreshToken;
          state.sid = payload.sid;
        })
        .addCase(refresh.rejected, (state, {payload}) => {
          state.loading = false;
          state.isLogin = false;
          state.isRefreshing = false;
          state.error = payload.data.message;
        });
      
      // Get user
      builder
      .addCase(getUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isLogin = true;
        state.isRefreshing = false;
        state.user = payload;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.isLogin = false;
        state.isRefreshing = true;
        state.accessToken = "";
        state.error = payload.data.message;
      });
  },
});

export default auth.reducer;
export const { clearNewUser, clearError } = auth.actions;
