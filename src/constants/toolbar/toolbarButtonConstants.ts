import { ToolbarButtonType } from "./toolbarButtonTypes";

export enum ToolbarButtonName {
  Add = "Add",
  Edit = "Edit",
  Delete = "Delete",
  Down = "Down",
  Up = "Up",
}

export const TOOLBAR_BUTTON_CONSTANTS: ToolbarButtonType[] = [
  { name: ToolbarButtonName.Add },
  {
    name: ToolbarButtonName.Edit,
    hidden: true,
  },
  {
    name: ToolbarButtonName.Delete,
    hidden: true,
  },
  {
    name: ToolbarButtonName.Down,
  },
  {
    name: ToolbarButtonName.Up,
    disable: true,
  },
];

export const CONFIRM_DELETE = {
  headerText: "Delete eq",
  buttonLabel: "Delete",
};
