#!/usr/bin/env sh

set -e

echo Linting..
yarn lint
echo Building. this may take a minute...
yarn build

cd dist

echo Deploying..
git init
git remote add origin git@github.com:justnero-ru/jetScheduler.git
git checkout -b gh-pages
git add -A
git commit -m 'deploy'
git push -f origin gh-pages

cd -
