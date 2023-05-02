const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('seconds');

const clock = setInterval(function time() {
  // DETERMINE THE CURRENT TIME
  const dateNow = new Date();
  let hr = dateNow.getHours();
  let min = dateNow.getMinutes();
  let sec = dateNow.getSeconds();

  // CONVERT THE TIME TO STRING AND LET IT BE 2 DIGITS
  hr = hr.toString().padStart(2, '0');
  min = min.toString().padStart(2, '0');
  sec = sec.toString().padStart(2, '0');

  // DISPLAY THE CURRENT TIME
  hour.textContent = hr;
  minute.textContent = min;
  second.textContent = sec;
}, 1000);