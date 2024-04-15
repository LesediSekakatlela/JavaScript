echo "# JavaScript" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/LesediSekakatlela/JavaScript.git
git push -u origin main 

//check all the untracked files or files that need to be added to github 
git status

//then to add all of them 
git add .

git push -u origin main