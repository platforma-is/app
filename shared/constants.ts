import { NotificationData } from "@mantine/notifications";

export const defaultNotificationPosition: Omit<
  NotificationData,
  "message" | "title"
> = {
  pos: "fixed",
  right: 20,
  bottom: 20,
  autoClose: 1.5 * 1000,
};

export const MODES = {
  PRODUCTION: 'production',
  DEV: 'dev'
};