](mailto:prateekrajgautam@gmail.com)






---

## Installation of GIT-SCM  
## Using git-bash on windows.
### Basic commands initialize and add files 
```bash
git init  # initialize directory for tracking 
git add FileName.Ext   # add specific file to staging
git add .   # add complete directory
git commit -m"Commit message" # add some descriptive message

```

repository is like directory containing source code.

---

# edit config

```bash
git config user.name <USERNAME>
git config user.email <EMAIL>

```

on home or personal terminal add `--global` option
```bash
git config --global user.name <USERNAME>
git config --global user.email <EMAIL>

```

---

# add remote origin

```bash

git remote add origin <REMOTE REPO URL>
git remote add origin git@github.com:peter/first_app.git

```
your repo can have multiple branches, however, define main

```bash
git branch -M main
```
to upload local commits to remote server
```bash
git push -u origin main
```
you can visit remote url to check changes.


---

# You can clone repo on your syetem with its url

```bash
git clone <REMOTE REPO URL>

```
```bash
git pull # to get changes from remote server to local system repo

```
---

# status

```bash
git status

```

reflects status of local repo
---

# Activity

1. create account on [github.com](https://github.com) with your institute email and apply for students benfits.
[https://education.github.com/benefits](https://education.github.com/benefits)

1. create one public repo and one private repo.

1. create public repo on github and share it as webpage using `gh-pages` or `github-page` with domain `github.io`

1. share/coloborate with your collegues.
1. delete repo.

2. learn more about followind commands

```bash
git branch
git checkout
git tag
git merge


```


---
# Advanced Users should explore 

```bash
git log
git diff   # --color-words, --staged, --catched

git rm
git mv
git show HASHNUMBER

git revert
git merge
git rebase


```

---
# Reference

1. [https://git-scm.com/](https://git-scm.com/)

1. [https://git-lfs.github.com/](https://git-lfs.github.com/) 

1. [GitHub](https://github.com/)

1. [GitHub Student Developer Pack](https://education.github.com/pack)




