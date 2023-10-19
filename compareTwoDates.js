function compareDates(d1, d2) {
  if (d1 > d2) {
    console.log("Date 1 is later than Date 2");
  } else if (d1 < d2) {
    console.log("Date 1 is earlier than Date 2");
  } else {
    console.log("Date 1 and Date 2 are the same");
  }
}
const date1 = new Date("2023-1-1");
const date2 = new Date("2023-1-2");
const date3 = new Date("2023-1-2");
compareDates(date1, date2);
compareDates(date2, date1);
compareDates(date2, date3);
