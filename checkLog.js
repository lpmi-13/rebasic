const gitlog = require('gitlog');

const dirtCommitHashes = [
  'a2c124ebf69683cc5a3649e9772e3609ed8f905d',
  '6ad4a2dd8d3134337b686f74a3d9256a7bbe156a',
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
