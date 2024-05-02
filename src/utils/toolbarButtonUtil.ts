import { NEW_PROFILE_LABEL } from "../constants/profileList/profileListConstants";
import { ProfileType } from "../constants/profileList/profileListTypes";
import { ToolbarButtonType } from "../constants/toolbar/toolbarButtonTypes";
import { generateRandomNumber } from "./genericUtil";
import { getProfileList } from "./profileListUtil";

export const getUpdatedProfile = () => {
  const id = String(generateRandomNumber());

  const addProfile: ProfileType = {
    name: NEW_PROFILE_LABEL,
    noEdit: false,
    id,
    active: true,
    editEnabled: false,
  };

  const updatedProfileList = getProfileList().map((profile: ProfileType) => ({
    ...profile,
    active: false,
  }));

  return [...updatedProfileList, addProfile];
};
