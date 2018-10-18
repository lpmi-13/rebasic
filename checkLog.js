const gitlog = require('gitlog');

const dirtCommitHashes = [
  '21fbf5c5b2f64b19cad8b0e718808e3ff8c12ffa',
  'f3ee9210100f99c9959768beede9257311255b65',
]; 

const opts =
  { 
    repo: './',
    fields:
      [
        'hash',
        'subject',
        'authorName',
      ],
  };

const commits = gitlog(opts);

const goodCommits = commits.filter((commit) => !dirtCommitHashes.includes(commit.hash));

console.log('the number of total commits: ', commits.length);
console.log('the number of good commits: ', goodCommits.length);

if (goodCommits.length === commits.length) {
  console.log('you successfully removed the dirt!');
} else {
  console.log('nope...still some dirt to clean...');
}
