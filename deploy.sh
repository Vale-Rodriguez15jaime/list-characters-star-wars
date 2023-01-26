commit=$1
git checkout $commit
docker build --no-cache -t starwars .
docker run -p 3100:3100 -d starwars
docker run -p 65000:3100 -d starwars