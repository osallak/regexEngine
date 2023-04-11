function isMatchOne(char, text) {
    if (!char) {
      return true;
    }
    if (!text) {
      return false;
    }
    return char === "." || text === char;
  }
  
  function search(pattern, text) {
    if (pattern[0] === "^") {
      return isMatch(pattern.slice(1), text);
    } else {
      return isMatch(".*" + pattern, text);
    }
  }
  
  function isMatch(pattern, text) {
    if (!pattern) {
      return true;
    } else if (!text && pattern === "$") {
      return true;
    } else if (pattern[1] === "?") {
      return isMatchQuestion(pattern, text);
    } else if (pattern[1] === "*") {
      return isMatchStar(pattern, text);
    } else if (pattern[0] === "(") {
      return isMatchGroup(pattern, text);
    } else {
      return isMatchOne(pattern[0], text[0]) && isMatch(pattern.slice(1), text.slice(1));
    }
  }
  
  function isMatchQuestion(pattern, text) {
    return (
      (isMatchOne(pattern[0], text[0]) && isMatch(pattern.slice(2), text.slice(1))) ||
      isMatch(pattern.slice(2), text)
    );
  }
  
  function isMatchStar(pattern, text) {
    return (
      (isMatchOne(pattern[0], text[0]) && isMatch(pattern, text.slice(1))) ||
      isMatch(pattern.slice(2), text)
    );
  }
  
  function isMatchGroup(pattern, text) {
    const groupEnd = pattern.indexOf(")");
    const groupPattern = pattern.slice(1, groupEnd);
    if (pattern[groupEnd + 1] === "?") {
      const remainderPattern = pattern.slice(groupEnd + 2);
      return (
        (isMatch(groupPattern, text.slice(0, groupPattern.length)) &&
          isMatch(remainderPattern, text.slice(groupPattern.length))) ||
        isMatch(remainderPattern, text)
      );
    } else if (pattern[groupEnd + 1] === "*") {
      const remainderPattern = pattern.slice(groupEnd + 2);
      return (
        (isMatch(groupPattern, text.slice(0, groupPattern.length)) &&
          isMatch(pattern, text.slice(groupPattern.length))) ||
        isMatch(remainderPattern, text)
      );
    } else {
      const remainderPattern = pattern.slice(groupEnd + 1);
      return (
        isMatch(groupPattern, text.slice(0, groupPattern.length)) &&
        isMatch(remainderPattern, text.slice(groupPattern.length))
      );
    }
  }
  
  module.exports = {
    isMatchOne,
    isMatch,
    search
  };
  