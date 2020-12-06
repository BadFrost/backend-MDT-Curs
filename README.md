# backend-MDT-Curs
Backend API for MDT by Stacey Dragon

### Установка
Установить [Node.js](https://nodejs.org/ru/)
Установить [Git](https://git-scm.com/)
Установить [MongoDB](https://www.mongodb.com/try/download/community?tck=docs_server) - [Инструкция по установке](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

### Начало
Запуск БД:
```sh
"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="c:\data\db"
```
Клонирование репозитория:
```sh
git clone https://github.com/BadFrost/backend-MDT-Curs.git
```
Установка зависимостей:
```sh
npm install
```
Запуск:
```sh
npm start
```

# ВАЖНО
Для корректной работы необходимо: 
1. Установить [ngrok](https://ngrok.com/download)

2. Запустить ngrok
```sh
ngrok http 4040
```
3. Скопировать полученное доменное имя (http:// {доменное имя} .ngrok.io) из консоли

4. Вставить доменное имя в файл ```config.js``` в проекте [mobile-MDT-Curs](https://github.com/BadFrost/mobile-MDT-Curs)

License
----

MIT
