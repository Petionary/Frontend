const getPostedDate = (date: string) => {
  const currDate = new Date();
  const postedDate = new Date(date);
  const ms = +currDate - +postedDate;
  const seconds = ms / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const months = days / 30;
  const years = days / 365;

  if (years > 1) return `${Math.floor(years)}년 전`;
  if (months > 1) return `${Math.floor(months)}개월 전`;
  if (weeks > 1) return `${Math.floor(weeks)}주 전`;
  if (days > 1) return `${Math.floor(days)}일 전`;
  if (hours > 1) return `${Math.floor(hours)}시간 전`;
  if (minutes > 1) return `${Math.floor(minutes)}분 전`;

  return '방금 전';
};

export default getPostedDate;
