import { ProfileType } from "./profileListTypes";

export enum ProfileName {
  Default = "Default",
  Game = "Game",
  Movie = "Movie",
  Music = "Music",
}

export const DEFAULT_PROFILE_LIST: ProfileType[] = [
  {
    name: ProfileName.Default,
    noEdit: true,
    id: "profile1",
    active: true,
  },
  { name: ProfileName.Game, noEdit: true, id: "profile2" },
  { name: ProfileName.Movie, noEdit: true, id: "profile3" },
  { name: ProfileName.Music, noEdit: true, id: "profile4" },
];

export const DRAWER_TITLE = "Profile List";

export const NEW_PROFILE_LABEL = "New Profile";
