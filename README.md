#Regex Engine

This is a simple regular expression engine built using JavaScript. It supports the following regular expression syntax:

    . (dot) matches any character
    * (asterisk) matches zero or more occurrences of the preceding character
    ? (question mark) matches zero or one occurrence of the preceding character
    () (parentheses) can be used for grouping

Usage

To use this engine, you can import it into your JavaScript file as follows:

```js
const regex = require('./regex');

console.log(regex.search('foo.*bar', 'fooxxyybar')); // true
```
