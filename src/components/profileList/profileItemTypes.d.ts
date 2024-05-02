export type ProfileItemType = {
  id: string;
  label: string;
  classes: string;
  onSelected: (id: string) => void;
  onEditComplete?: () => void;
  onDataChange?: (value: string) => void;
  edit: boolean | undefined;
};
