import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { LoginState, LoginPayload } from "./loginSlice.Types";
import { useAppSelector } from "@/hooks";
import { stat } from "fs";

const initialState: LoginState = {
  user: {
    email: "",
    password: "",
  },
  isLoading: false,
};

export const login = createAsyncThunk("auth/login", () => {
  const auth = getAuth();
  const { email, password } = useAppSelector((state) => state.auth.user);
  console.log(auth);
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => console.log(error));
});

export const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<LoginPayload>) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
  extraReducers(builder) {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action);
      console.log(`state ${state}`);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action);
    });
  },
});

export const { updateUser } = loginSlice.actions;

export default loginSlice.reducer;
