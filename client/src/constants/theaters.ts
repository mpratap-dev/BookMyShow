export enum STATUS {
  APPROVED = "approved",
  PENDING = "pending",
  REJECTED = "rejected"
};

export const STATUS_COLORS = {
  [STATUS.APPROVED]: "green",
  [STATUS.PENDING]: "orange",
  [STATUS.REJECTED]: "red"
}