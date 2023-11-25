import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import updateLocale from "dayjs/plugin/updateLocale.js";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

export { dayjs };

export type ParamDate = Date | string | undefined | null;

// simple date
export function getCurrentYear() {
  return new Date().getFullYear();
}

//   Date time format
export function formatDateTime(date: ParamDate) {
  return dayjs(date).format("D MMM YYYY, H:mm");
}

export function formatDateTimeTimezone(date: ParamDate) {
  return dayjs(date).format("D MMM YYYY, H:mm:ss Z");
}

export function formatDateOnly(date: ParamDate) {
  return dayjs(date).format("D MMMM YYYY");
}

export function formatDateTimeRelative(date: ParamDate) {
  return (
    dayjs(date).format("dddd, D MMMM YYYY [at] H:mm") +
    ` (${formatRelativeTime(date)})`
  );
}

export function formatDateLastMod(date: ParamDate) {
  return dayjs(date).format("YYYY-MM-DD");
}

// relative time
export function formatRelativeTime(date: ParamDate) {
    return dayjs(date).fromNow()
  }