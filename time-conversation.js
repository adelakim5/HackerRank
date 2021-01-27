function timeConversion(s) {
  s.split(":");
  let answer = "";
  if (s[2].includes("A")) {
    s[2] = s[2].slice(0, 2);
    if (+s[0] >= 12) s[0] = "00";
    answer = s.join(":");
  } else {
    s[2] = s[2].slice(0, 2);
    if (+s[0] < 12) s[0] = +s[0] + 12;
    answer = s.join(":");
  }
  return answer;
}
