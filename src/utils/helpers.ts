export const formatTime = (time: number) => (time < 10 ? `0${time}` : `${time}`);

export const calculateTime = (secs: number) => {
  const minutes = Math.floor(secs / 60);
  const returnedMinutes = formatTime(minutes);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = formatTime(seconds);

  return `${returnedMinutes} : ${returnedSeconds}`;
};
