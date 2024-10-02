import { notifications } from "@mantine/notifications";
import { defaultNotificationPosition } from "@/shared/constants";

interface HandleNotificationProps {
  mode?: "success" | "error";
  message: string;
  title?: string;
}
export const handleNotification = ({
  mode = "success",
  message,
  title,
}: HandleNotificationProps) => {
  return notifications.show({
    title:
      title || { success: "Успешно!", error: "Что-то пошло не так :(" }[mode],
    message,
    color: mode === "error" ? "red" : "violet",
    ...defaultNotificationPosition,
  });
};
