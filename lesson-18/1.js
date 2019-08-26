/** 
# Задача 1

Создать класс `DB` который будет имплементировать `CRUD` модель.

-   В качестве структуры данных использовать `Map`.
-   Метод `create`:
-   -   принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
-   -   возвращает `id`
-   -   при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
-   Метод `read`:
-   -   принимает идентификатор пользователь
-   -   если такого пользователя нет возвращать `null`
-   -   если есть — возвращать объект пользователя с полем `id` внутри объекта.
-   -   если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
-   Метод `readAll`:
-   -   возвращает массив пользователей
-   -   генерировать ошибку если в метод `readAll` передан параметр
-   Метод `update`:
-   -   обновляет пользователя
-   -   принимает 2 обязательных параметра
-   -   генерирует ошибку если передан несуществующий `id`
-   -   генерирует ошибку если передан `id` с типом не строка
-   -   генерирует ошибку если второй параметр не валидный
-   Метод `delete`:
-   -   удаляет пользователя
-   -   Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`

```javascript
*/
class DB {

    generateRandomId() {
        return Math.round(Math.random() * 1000000).toString();
    }

    constructor() {
        this.map = new Map();
    }



    create(person) {

        if (typeof person !== 'object') {
            throw Error("Argument should be an object type");
        }

        if (typeof person.name !== 'string') {
            throw Error("Argument's name should be an object type");
        }

        if (typeof person.age !== 'number') {
            throw Error("Argument's age should be a number type");
        }

        if (typeof person.country !== 'string') {
            throw Error("Argument's country should be an string type");
        }

        if (typeof person.salary !== 'number') {
            throw Error("Argument's salary should be a number type");
        }


        const id = this.generateRandomId();


        this.map.set(id, person);
        if (this.map.has(id)) {
            this.map.set(id, person);
        } else {
            id = this.generateRandomId()
        }

        return id;
    }

    read(id) {

        if (typeof id !== 'string') {
            throw Error("Argument should be an string type");
        }

        if (arguments.length <= 0) {
            throw Error("here should be an argument");
        }


        if (this.map.has(id)) {
            this.id = id;
            this.map.get(id).id = this.id;
        } else {
            return null;
        }
    }

    readAll() {

        if (arguments.length > 0) {
            throw Error("This method has no arguments");
        }
        console.log(Array.from(this.map));
        return Array.from(this.map);
    }

    update(id, upData) {
        if (arguments.length < 2) {
            throw Error("Here should be 2 arguments");
        }

        if (!this.map.has(id)) {
            throw Error("This id doesnt exist");
        }

        if (typeof id !== 'string') {
            throw Error("Argument should be an string type");
        }

        const old = this.map.get(id);
        console.log("old is " + old );
        this.map.set(id, {...old, ...upData});
        console.log("renew map is " + Array.from(this.map) );
    }

    delete(id) {
        if (!this.map.has(id)) {
            throw Error("This id doesnt exist");
        }
        console.log('delete ' + id);
        this.map.delete(id);

    }

}

const db = new DB();

const person = {
    name: 'Pitter', // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // массив пользователей
db.update(id, {
    age: 22
}); // id
db.delete(id); // true