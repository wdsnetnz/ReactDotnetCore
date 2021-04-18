# Git Commands

…or create a new repository on the command line
echo "# ReactDotnetCore" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/wdsnetnz/ReactDotnetCore.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/wdsnetnz/ReactDotnetCore.git
git branch -M main
git push -u origin main

## Git Auto Correction

Setting it up
You can set this up in your git config, either globally or per repo. I don’t know why you’d only want it for some repos so here’s how to do it globally:

git config --global help.autocorrect 20

Ref: https://ardalis.com/git-autocorrect/
https://andy-carter.com/blog/auto-correct-git-commands

