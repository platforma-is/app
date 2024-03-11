import dayjs from "dayjs";
import "dayjs/locale/ru";

export const formatDate = (date: Date) => {
  return dayjs(date).locale("ru").format("DD MMMM YYYY, HH:mm");
};
