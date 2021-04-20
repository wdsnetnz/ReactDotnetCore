# Creating dotnet core application with React

## Git Commands

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

## Learing goals

1. Intro to Clean architecture
2. Creating the .Net projects
3. Project architecture
4. dotnet CLI
5. .Net project files
6. Running the .Net application
7. Entity Framework
8. Seeding Data
9. Code first migrations
10. Postman
11. Git for source control

## Section 3 - 

Walking Skeleton Part 2 - Client

Learning goals

> Creat-react-app
> React project files
> React concetpts
> React Dev tools
> Typescript
> Axios
> Semantic-ui

## create react typescript app

npx create-react-app client-app --use-npm --template typescript

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd client-app
  npm start

## The Clean Architeture

> http://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
