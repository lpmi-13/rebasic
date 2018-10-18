const gitlog = require('gitlog');

const dirtCommitHashes = [
  'f1ffff53bee1dcf21d964a811bb875e6b9aab503',
  '766a8ea4cd5cd1443d760519bdc73b19042c3c9c',
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
  console.log('you successfully removed the extra commit messages!');
} else {
  console.log('nope...still some extra commit messages...');
}
