// # Задача 1

// Создайте класс `Customers` который умеет работать с механизмом `for of`.

// Класс `Customers` содержит метод `add` который принимает объект в качестве параметра. У этого объекта есть обязательное поле `name` и необязательное поле `verified`.

// Класс `Customers` при переборе с помощью `for of` должен учитывать только объекты у которых был установлен флаг `verified: true`.

// **Обратите внимание**:

// 1. Использование генераторов **запрещено**.
// 2. Использование посторонних библиотек **запрещено**
// 3. У класса `Customers` **должен** быть метод `Symbol.iterator`


// РЕШЕНИЕ
class Customers {
    constructor() {
        this.names = [];;
    }


    add(obj) {
        if (!obj.name) {
            throw Error("Object should have a name");
        }
        this.names.push(obj);
    }

    [Symbol.iterator]() {
        let i = 0;
        const verifiedArr = this.names.filter(item => item.verified == true);

        return {
            next: () => {
                const done = i >= verifiedArr.length;
                const value = !done ? verifiedArr[i++] : undefined;
                
                return {
                    done,
                    value,
                };
            },
        };

    }
};

// Пример использования:

// ```javascript
const customers = new Customers();
customers.add({
    name: 'Alex'
});
customers.add({
    name: 'Victor'
});
customers.add({
    name: 'Marcus'
});
customers.add({
    name: 'Andrii',
    verified: true
});
customers.add({
    name: 'Marco',
    verified: true
});
customers.add({
    name: 'Oliver'
});
customers.add({
    name: 'Lisa',
    verified: true
});
customers.add({
    name: 'John'
});
customers.add({
    name: 'Ivan',
    verified: true
});
let k = []
for (const customer of customers) {
    console.log(customer);

}

// В консоли будет
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }