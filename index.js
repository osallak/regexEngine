const FILE_PATH = './regex';


const regex = require(FILE_PATH); // import the regex from the solution.js file


const pattern = 'a.*b'; // the regular expression pattern you want to match
const text = 'apple and banana'; // the text you want to match against

const isMatch = regex.isMatch(pattern, text); // call the match function to check if the pattern matches the text

console.log(isMatch); // outputs true, since the pattern 'a.*b' matches the text 'apple and banana'
