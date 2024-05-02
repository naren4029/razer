import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProfileType } from "../../constants/profileList/profileListTypes";
import {
  getActiveProfile,
  getProfileList,
  scrollToBottom,
  setProfileList,
} from "../../utils/profileListUtil";
import { DEFAULT_PROFILE_LIST } from "../../constants/profileList/profileListConstants";

export type ProfileState = {
  selectedProfile: ProfileType;
  profileList: ProfileType[];
};

const initialState: ProfileState = {
  selectedProfile: getProfileList().length
    ? getProfileList().find((item: ProfileType) => item.active)
    : "Default",
  profileList: getProfileList().length
    ? getProfileList()
    : DEFAULT_PROFILE_LIST,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateSelectedProfileState: (state, action: PayloadAction<ProfileType>) => {
      state.selectedProfile = action.payload;

      state.profileList = state.profileList.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, name: action.payload.name, active: true };
        }
        return { ...item, active: false, editEnabled: false };
      });
      setProfileList(state.profileList);
    },

    updateProfileListState: (state, action: PayloadAction<ProfileType[]>) => {
      state.selectedProfile = getActiveProfile();
      state.profileList = action.payload;

      setProfileList(action.payload);
      scrollToBottom("profileList");
    },

    updateEditState: (state, action: PayloadAction<boolean>) => {
      state.profileList = state.profileList.map((item) => {
        if (item.active) {
          return { ...item, editEnabled: action.payload };
        }
        return item;
      });

      setProfileList(state.profileList);
    },

    updateRecordDeleteState: (state, action: PayloadAction<string>) => {
      state.profileList = state.profileList.filter(
        (item) => item.id !== action.payload,
      );
      setProfileList(state.profileList);
    },
  },
});

export const {
  updateSelectedProfileState,
  updateProfileListState,
  updateEditState,
  updateRecordDeleteState,
} = profileSlice.actions;

export default profileSlice.reducer;
