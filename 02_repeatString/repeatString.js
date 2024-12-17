const repeatString = function (string, num) {
    let typed = "";

    for (let i = 0; i < num; i++) {
        typed += string;
    }

    if (num < 0) {
        return "ERROR"
    }

    return typed;
  };

// Do not edit below this line
module.exports = repeatString;
