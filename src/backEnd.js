
export function dateString(month, date, year) {
  let newDate = `${month} ${date}, ${year}`;
  return newDate;
}

export function newConvert(newDate) {
  let dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (newDate >= 0 || newDate <= 6) {
    return dayArr[newDate];
  } else {
    return "Invalid Date";
  }
}
