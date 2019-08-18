/**
 * Задача 2.
 *
 * Добавьте роботу геттер и сеттер для приватного свойства energy.
 * Нужно, чтобы внешний код мог узнать заряд батареи робота.
 *
 * Условия:
 * - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять.
 *
 * Генерировать ошибки если:
 * - новый заряд батареи устанавливается в значении меньшем, чем 0;
 * - новый заряд батареи устанавливается в значении большем, чем значение MAX_ENERGY_CAPACITY;
 * - при создании экземпляра CleanerRobot изначальный уровень энергии зада в не рамок допустимого диапазона.
 */

<<<<<<< HEAD
function CleanerRobot(initialEnergy = 0 /* Изначальный заряд батареи */) {
=======
function CleanerRobot(initialEnergy = 0 /* Изначальный заряд батареи */ ) {
>>>>>>> 6c7a172034c6271d409fe76f68502217e7357a75
    this.getEnergy = getEnergy;
    this.setEnergy = setEnergy;

    const MAX_ENERGY_CAPACITY = 100; /* Максимальная ёмкость батареи. */
    let energy = null;

    this.setEnergy(initialEnergy);

<<<<<<< HEAD
    function getEnergy() {
        // Решение
    }
    function setEnergy() {
        // Решение
=======

    function getEnergy() {
        console.log(`energy is ${energy}`);
        return energy;
    }


    function setEnergy(newEnergy) {

        if (newEnergy < 0) {
            throw new Error('New energy level can not be less than 0.');
        }

        if (newEnergy > MAX_ENERGY_CAPACITY) {
            throw new Error(`New energy level can not be more than ${MAX_ENERGY_CAPACITY}.`);
        }

        energy = newEnergy;
        return energy;
>>>>>>> 6c7a172034c6271d409fe76f68502217e7357a75
    }
}

const cleanerRobot = new CleanerRobot(22);

/* Текущий заряд батареи: 22 */
console.log(`Текущий заряд батареи: ${cleanerRobot.getEnergy()}`);

cleanerRobot.setEnergy(55);

/* Текущий заряд батареи: 55 */
console.log(`Текущий заряд батареи: ${cleanerRobot.getEnergy()}`);

try {
    new CleanerRobot(-1);
} catch (error) {
    /* Error: New energy level can not be less than 0. */
    console.log(`${error.name}: ${error.message}`);
}

try {
    cleanerRobot.setEnergy(-22);
} catch (error) {
    /* Error: New energy level can not be less than 0. */
    console.log(`${error.name}: ${error.message}`);
}

try {
    cleanerRobot.setEnergy(101);
} catch (error) {
    /* Error: New energy level can not be more than 100. */
    console.log(`${error.name}: ${error.message}`);
}

<<<<<<< HEAD
exports.CleanerRobot = CleanerRobot;
=======
exports.CleanerRobot = CleanerRobot;
>>>>>>> 6c7a172034c6271d409fe76f68502217e7357a75
