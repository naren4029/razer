export type ToolbarButtonType = {
  name: string;
  onClicked?: (label?: string) => void;
  hidden?: boolean;
  disable?: boolean;
};
