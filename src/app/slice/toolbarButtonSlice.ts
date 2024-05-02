import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToolbarButtonType } from "../../constants/toolbar/toolbarButtonTypes";
import {
  TOOLBAR_BUTTON_CONSTANTS,
  ToolbarButtonName,
} from "../../constants/toolbar/toolbarButtonConstants";
import { ProfileName } from "../../constants/profileList/profileListConstants";
import { ProfileType } from "../../constants/profileList/profileListTypes";
import {
  getActiveProfileIndex,
  getProfileList,
  setProfileList,
} from "../../utils/profileListUtil";

export type ToolbarButtonState = {
  buttonList: ToolbarButtonType[];
  showConfirmBox: boolean;
};

const initialState: ToolbarButtonState = {
  buttonList: TOOLBAR_BUTTON_CONSTANTS,
  showConfirmBox: false,
};

export const toolbarButtonSlice = createSlice({
  name: "toolbarButton",
  initialState,
  reducers: {
    updateToolbarButtonState: (state, action: PayloadAction<ProfileType>) => {
      const profileList = getProfileList();

      if (!ProfileName.hasOwnProperty(action.payload.name)) {
        state.buttonList = TOOLBAR_BUTTON_CONSTANTS.map((button) => {
          switch (button.name) {
            case ToolbarButtonName.Edit:
            case ToolbarButtonName.Delete:
              return { ...button, hidden: false };
            case ToolbarButtonName.Down:
              if (
                profileList[profileList.length - 1].id === action.payload.id
              ) {
                return { ...button, disable: true };
              }

            default:
              return { ...button, disable: false };
          }
        });
      } else if (getActiveProfileIndex() > 0 && getActiveProfileIndex() < 4) {
        state.buttonList = TOOLBAR_BUTTON_CONSTANTS.map((button) => {
          if (
            ToolbarButtonName.Edit === button.name ||
            ToolbarButtonName.Delete === button.name
          ) {
            return { ...button, hidden: true };
          } else if (ToolbarButtonName.Up === button.name) {
            return { ...button, disable: false };
          } else {
            return button;
          }
        });
      } else if (getActiveProfileIndex() === profileList.length - 1) {
        state.buttonList = TOOLBAR_BUTTON_CONSTANTS.map((button) => {
          if (button.name === ToolbarButtonName.Down) {
            return { ...button, disable: true };
          } else if (button.name === ToolbarButtonName.Up) {
            return { ...button, disable: false };
          }
          return button;
        });
      } else {
        state.buttonList = TOOLBAR_BUTTON_CONSTANTS;
      }
    },

    updateDeleteConfirmState: (state, action: PayloadAction<boolean>) => {
      state.showConfirmBox = action.payload;
    },
  },
});

export const { updateToolbarButtonState, updateDeleteConfirmState } =
  toolbarButtonSlice.actions;

export default toolbarButtonSlice.reducer;
