import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import debounce from "lodash/debounce";
import { ProfileType } from "../constants/profileList/profileListTypes";

export const postData = createAsyncThunk("type/postData", async (data: any) => {
  try {
    const response = await axios.post("https://reqres.in/api/users", data);
    return response.data;
  } catch (err) {
    throw err;
  }
});

const debouncedPostData = debounce((data: ProfileType, dispatch) => {
  dispatch(postData(data));
}, 3000);

export default debouncedPostData;
