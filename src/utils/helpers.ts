export const formatTime = (time: number) => {
  const isDoubleValuedNumber = time >= 10;

  return isDoubleValuedNumber ? `${time}` : `0${time}`;
};

export const calculateTime = (secs: number) => {
  const minutes = Math.floor(secs / 60);
  const returnedMinutes = formatTime(minutes);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = formatTime(seconds);

  return `${returnedMinutes} : ${returnedSeconds}`;
};
