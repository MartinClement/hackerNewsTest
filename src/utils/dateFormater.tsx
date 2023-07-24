import daysjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

daysjs.extend(relativeTime);

const fromNow = (date: number | string | Date): string => {
  return daysjs(date).fromNow();
}

export {
  fromNow,
}