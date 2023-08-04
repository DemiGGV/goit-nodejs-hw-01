# goit-nodejs-hw-01

# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list

![Screenshoot-1](./assets/pic1.png)

# Получаем контакт по id - выводим в консоль объект контакта или null, если контакта с таким id не существует.

node index.js --action get --id 05olLMgyVQdWRwgKfg5J6

![Screenshoot-2](./assets/pic2.png)

# Добавляем контакт и выводим в консоль созданный контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

![Screenshoot-3](./assets/pic3.png)

# Удаляем контакт и выводим в консоль удаленный контакт или null, если контакта с таким id не существует.

node index.js --action remove --id qdggE76Jtbfd9eWJHrssH

![Screenshoot-4](./assets/pic4.png)
