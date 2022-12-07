export function formatDate(date: string) {
  const dateObj = new Date(date);

  return `${
    dateObj.getDay() + '. ' + dateObj.getMonth() + '. ' + dateObj.getFullYear()
  }`;
}