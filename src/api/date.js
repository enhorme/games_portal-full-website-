import moment from "moment";

const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};
const getNextWeek = () => {
  const date = new Date().getTime() + 604800000;
  return moment(date).format("YYYY-MM-DD");
};
const getPreviousWeek = () => {
  const date = new Date().getTime() - 604800000;
  return moment(date).format("YYYY-MM-DD");
};

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

const getLastMonth = () => {
  const date = new Date().getTime() - 6048e5 * 4;
  return moment(date).format("YYYY-MM-DD");
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const currentDate = `${getCurrentYear()}-${getCurrentMonth()}-${getCurrentDay()}`;
const lastYear = `${
  getCurrentYear() - 1
}-${getCurrentMonth()}-${getCurrentDay()}`;
const nextYear = `${
  getCurrentYear() + 1
}-${getCurrentMonth()}-${getCurrentDay()}`;
const prevWeek = getPreviousWeek();
const nextWeek = getNextWeek();
const lastMonth = getLastMonth();

export const dateObj = {
  currentDate,
  lastYear,
  lastMonth,
  nextYear,
  prevWeek,
  nextWeek,
};
