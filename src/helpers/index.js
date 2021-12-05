import dayjs from "dayjs";

export const addDaytoDate = day => {
  const previousDay = dayjs(day).add(1, "day");
  return day ? dayjs(previousDay).format("YYYY/MM/DD") : "";
};
