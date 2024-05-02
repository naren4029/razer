import exp from "constants";
import { DEFAULT_PROFILE_LIST } from "../constants/profileList/profileListConstants";
import { ProfileType } from "../constants/profileList/profileListTypes";

export const setProfileList = (profileList: ProfileType[]) => {
  localStorage.setItem("profileList", JSON.stringify(profileList));
};

export const scrollToBottom = (elem: string) => {
  setTimeout(() => {
    document
      .getElementById(elem)
      ?.scrollTo(0, document.getElementById(elem)?.scrollHeight || 0);
  }, 0);
};

export const getProfileList = () => {
  const defaultProfileList = localStorage.getItem("profileList");
  return defaultProfileList
    ? JSON.parse(defaultProfileList)
    : DEFAULT_PROFILE_LIST;
};

export const getActiveProfile = () =>
  getProfileList().find((profile: ProfileType) => profile.active);

export const getActiveProfileIndex = () =>
  getProfileList().findIndex((profile: ProfileType) => profile.active);
