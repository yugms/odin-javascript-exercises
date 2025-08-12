const repeatString = function (string, repeatTimes) {
  if (repeatTimes < 0) return "ERROR";
  output = ""
  for (let i = 0; i < repeatTimes; i++) {
    output += string;
  };
  return output;
};

// Do not edit below this line
module.exports = repeatString;
