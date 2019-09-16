class Transaction {

    constructor() {
        this.store = new Map();
        this.logs = [];

    }


    async dispatch(scrnario) {
        for (let element of scenario) {
            try {
                await element.call();
            } catch (error) {
                console.log(error.message);
                rollback(element)

            }
        }

    }

    async rollback(scrnario) {
        try {
            await scrnario.restore();
        } catch (error) {
            console.log(error.message);

        }
    }

}
/*создает ошибку для лога */
class Err {
    constructor(error) {
        this.name = error.name,
            this.message = error.message,
            this.stack = error.stack
    }
}
/*создает лог для массива логов */
class Log {

    getResult(result) {
        return result;
    }

    getError(error) {
        if (!error) {

            return null;
        } else {
            new Err(error)
        };
    }


    constructor(index, title, description, result, error) {

        this.index = index;
        this.name = name;

        this.meta = {
            title: title,
            description: description
        }
        this.error = getError(error);
        this.result = this.getResult(result)
    }

}


const scenario = [{
        index: 1,
        meta: {
            title: '',
            description: 'Получить данные о состоянии текущего рублевого счета',
        },
        async call(store, logs) {
            let log = new Log(this.index, this.title, this.description, result, error)
            logs.push(log)
            store.set(amount, 1000);
        },
        async restore(store, logs) {
            // this.logs.push( /*Index, meta, nextStep, error */ )
        },
    },
    {
        index: 2,
        meta: {
            title: '',
            description: 'Взять из рублевого счета 30 % от общей суммы',
        },
        async call(store, logs) {
            store.get(amount)
            // Логика выполнения шага
        },
        async restore(store, logs) {
            // Логика отката шага
        },
    },
    {
        index: 3,
        meta: {
            title: '',
            description: 'Сконвертировать снятые средства в евро по курсу 1/75',
        },
        async call(store, logs) {
            // Логика выполнения шага
        },
        async restore(store, logs) {
            // Логика отката шага
        },
    },
    {
        index: 4,
        meta: {
            title: '',
            description: 'Перевести эти деньги на другой евровый счет',
        },
        async call(store, logs) {
            // Логика выполнения шага
        },
        async restore(store, logs) {
            // Логика отката шага
        },
    },
];


const transaction = new Transaction();


(async () => {
    try {
        await transaction.dispatch(scenario);

        const {
            store,
            logs,
            status
        } = transaction;
        log(store);
        log(logs);
        log(status);
    } catch (error) {
        // Send email about broken transaction
    }
})();