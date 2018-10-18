(first, run `npm install` to set up the exercise) 

## Task - clean up some commit messages before opening a PR

[read the documentation here](https://git-scm.com/docs/git-rebase)

The basic idea is to clean up the git log so that it's easier 
to work with. Often, lots of commits happen during working 
on a project, but we don't necessarily need all the commit 
messages once we're finished with the work.

As an example, if there are five commits that we end up doing 
for a new feature, and they look something like this after
running `git log --oneline`:

```
5819476 finish feature
b2a576f still a work in progress - **remove this message**
0ff0742 this is a test - **remove this message**
360c7a1 update readme
6a2f9f8 initial commit
```

we don't necessarily care about the middle two commit messages,
since they don't tell us very much about what was changed, 
though we probably DO care about the those two commits (we 
want to keep the code, especially if the feature is built on
it, instead of being entirely contained in the final commit).

So we want to keep all the code but make the git log history
look a little nicer. This is very common when working on a large
project with other developers and we want the overall history
of the project to be nice and clean.

## step-by-step

so to start, we can very easily trigger an interactive rebase
like so:

`git rebase -i HEAD~4`

this will result in something that looks like

```
pick 360c7a1 update readme
pick 0ff0742 this is a test - **remove this message**
pick b2a576f still a work in progress - **remove this message**
pick 5819476 finish feature 

# Rebase 727710e..34ea71e onto 727710e (3 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending

# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
#       However, if you remove everything, the rebase will be aborted.
#
#       
# Note that empty commits are commented out
```

the command that we're probably interested in is this one:

```
# f, fixup <commit> = like "squash", but discard this commit's log message
```

We're using `fixup` instead of `squash` because we don't care about the messages, they don't tell us anything useful here. If you
really want to, you can use `squash` instead, the effect on the
code is the same (all put together into one commit).

So in the interactive rebase prompt, we can update the lines
to the following:

```
pick 360c7a1 update readme
fixup 0ff0742 this is a test - **remove this message**
fixup b2a576f still a work in progress - **remove this message**
pick 5819476 finish feature
```
(it's possible to use `fixup` or just `f` here)

...save and exit, and that's it! Unless there were any conflicts, we're done!

## afterwards

run `npm run check` to see if you successfully expunged that dirt
