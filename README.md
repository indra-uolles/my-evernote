## Не сделано
- Фильтрация по дате создания;
- Отбор по пользователю при получении заметок, заполнение поля "пользователь" при сохранении заметки;
- Автоматическое обновление даты создания заметок каждую минуту. 

## Запуск проекта.

Для простоты представления приложения использовался Expo - хостинг React Native приложений.
Чтобы воспользоваться приложением, нужно поставить в [App Store (для iOS)](https://itunes.apple.com/ru/app/expo-client/id982107779?mt=8) или [Google Play (для Android)](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=ru) приложение Expo.

Открываете приложение Expo, нажимаете сканировать QR code
и сканируете QR code со страницы https://expo.io/@dimitrydushkin/expo-my-evernote

### Альтернативный способ (инструкции для MacOS)

`npm install` в корне проекта и в папке ReactNativeApp

```
brew update
brew install mongodb
```

create the database folder. MongoDB store data into the /data/db folder, you need to create this folder manually and assign proper permission.

```
$ sudo mkdir -p /data/db
$ whoami
agabardo
$ sudo chown agabardo /data/db
```
Next step is adding mongodb/bin to $PATH

```
$ cd ~
$ pwd
/Users/agabardo
$ vim .bash_profile
export MONGO_PATH=/usr/local/mongodb
export PATH=$PATH:$MONGO_PATH/bin
```

Линкуем иконки: react-native link

open another terminal and start MongoDB with $ mongod
When you see the message: ‘waiting for connections on port 27017′ means that MongoDB is up and running. 

`strapi start` из корня проекта или `node_modules/.bin/strapi start`

По желанию идем в http://localhost:3000/admin. Введём логин пароль: root root
и добавляем заметки. 

Запускаем эмулятор. Например андроид.

из ReactNativeApp react-native run-android
