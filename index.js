
function shout(string) {
  return string.toUpperCase();
}

// Returns string in all lowercase
function whisper(string) {
  return string.toLowerCase();
}

// Logs string in all caps
function logShout(string) {
  console.log(string.toUpperCase());
}

// Logs string in all lowercase
function logWhisper(string) {
  console.log(string.toLowerCase());
}

// Conditional response based on string case
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}