Запуск проекта.

npm install в корне проекта и в папке ReactNativeApp

Mac OS
brew update
brew install mongodb

create the database folder. MongoDB store data into the /data/db folder, you need to create this folder manually and assign proper permission.

$ sudo mkdir -p /data/db
$ whoami
agabardo
$ sudo chown agabardo /data/db

Next step is adding mongodb/bin to $PATH

$ cd ~
$ pwd
/Users/agabardo
$ vim .bash_profile
export MONGO_PATH=/usr/local/mongodb
export PATH=$PATH:$MONGO_PATH/bin

open another terminal and start MongoDB with $ mongod
When you see the message: ‘waiting for connections on port 27017′ means that MongoDB is up and running. 

Start strapi
strapi start из корня проекта или node_modules/.bin/strapi start

потом идем в localhost:3000/admin и заполняем базу данных

из ReactNativeApp react-native run-android
