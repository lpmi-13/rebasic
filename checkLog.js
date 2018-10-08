const git = require('simple-git')();

const results = git.log((err, log) => console.log(log));

console.log(results);
