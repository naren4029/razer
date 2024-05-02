export type ConfirmPanelType = {
  title: string;
  children: ReactNode;
  classes: string;
  onConfirm: () => void;
  confirmButtonLabel: string;
  onCancel?: () => void;
  cancelButtonLabel?: string;
};
