#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build
#rm -rf docs/.vuepress/dist
#cd docs/.vuepress
#mkdir dist
#cd dist
#echo "Hello World" > index.html

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
#git push -f git@github.com:dev-melatech/dev-melatech.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:dev-melatech/MelaTechUI.git master:gh-pages
git push -f https://github.com/dev-melatech/mela-store.git master:gh-pages

cd -