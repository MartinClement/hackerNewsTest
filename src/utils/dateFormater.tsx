import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const fromNow = (date: number | string | Date): string => {
  return dayjs(date).fromNow();
}

export {
  fromNow,
}