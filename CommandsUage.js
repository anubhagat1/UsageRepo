T:
----
If you mean you want the pull to overwrite local changes, doing the merge as if the working tree were clean, well, clean the working tree:
git reset --hard
git pull
If there are untracked local files you could use git clean to remove them. Use git clean -f to remove untracked files, -df to remove untracked files and directories, and -xdf to remove untracked or ignored files or directories.

If on the other hand you want to keep the local modifications somehow, you'd use stash to hide them away before pulling, then reapply them afterwards:

git stash
git pull
git stash pop
I don't think it makes any sense to literally ignore the changes, though - half of pull is merge, and it needs to merge the committed versions of content with the versions it fetched.



Create the branch on your local machine and switch in this branch :
------------------------------------------------------------------
$ git checkout -b [name_of_your_new_branch]

Push the branch to remote:
$ git push origin [name_of_your_new_branch]

https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging




Create a new repo in Git hub:

echo "# TestGITCommands" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/anubhagat1/TestGITCommands.git
git push -u origin maste

