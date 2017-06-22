[![Build Status](https://travis-ci.org/gabesangels/sharemykitchen.svg?branch=master)](https://travis-ci.org/gabesangels/sharemykitchen)

# sharemykitchen
A place for hosts to post a profile and connect with guests that want to rent a kitchen for one night

GIT workflow

Git rebase
Git commit
Git push set upstream origin stu2

Pull request
Refresh
Check out tests
Merge and squash

//Go to the master version
Git checkout master
//Get the most current version
Git pull upstream master
//Make a new branch
Git checkout -b stu3

When trying to bring in another team members work, when it hasn't been merged with
git fetch endpoint/tests/1
git checkout endpoint/tests/1

git checkout -b stutest

When trying to bring in others work while already on their branch
git stash
git pull upstream endpoint/tests/1 --rebase
git stash pop
git add .
git commit


//to fix a merge conflict:
-pull&rebase changes: git pull upstream [branch name] --rebase
-fix changes and delete HEAD and TAIL comments
-stage and commit changes
-continue the rebase with git rebase --continue
-repeat as necessary. Sometime git rebase --skip is required?
-commit and push changes back up to your branch
-attempt the merge again 


