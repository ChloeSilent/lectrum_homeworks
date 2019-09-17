class Transaction {

    constructor() {
        this.store = new Map();
        this.logs = [];

    }


    async dispatch(scenario) {
        for (let element of scenario) {
            try {
                await element.call(this.store, this.logs);
            } catch (error) {
                console.log(error.message);
                rollback(element)

            }
        }

    }

    async rollback(scenario) {
        try {
            await scenario.restore();
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
        if (null) {
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
            store.set(this.index, { amount: 1000 });
            let log = new Log(this.index, this.title, this.description, store.get(this.index), null);
            logs.push(log);
        },
        async restore(store, logs) {
            let error = new Err({name: "Error name", message: "Error message",stack: "Error stack"});
            let log = new Log(this.index, this.title, this.description, null, error);
            logs.push(log);
        },
    },
    {
        index: 2,
        meta: {
            title: '',
            description: 'Взять из рублевого счета 30 % от общей суммы',
        },
        async call(store, logs) {
            let account = store.get(this.index-1);
            store.set(this.index, {value: account.get('amount')*0.3});
            let log = new Log(this.index, this.title, this.description, store.get(this.index), null);
            logs.push(log);
        },
        async restore(store, logs) {
            let error = new Err({name: "Error name", message: "Error message",stack: "Error stack"});
            let log = new Log(this.index, this.title, this.description, null, error);
            logs.push(log);
        },
    },
    {
        index: 3,
        meta: {
            title: '',
            description: 'Сконвертировать снятые средства в евро по курсу 1/75',
        },
        async call(store, logs) {
            let currentAmount = store.get(this.index-1)
            store.set(this.index, {euro: currentAmount/75})
            let log = new Log(this.index, this.title, this.description, store.get(this.index), null);
            logs.push(log);
        },
        async restore(store, logs) {
            let error = new Err({name: "Error name", message: "Error message",stack: "Error stack"})
            let log = new Log(this.index, this.title, this.description, null, error);
            logs.push(log);
        },
    },
    // {
    //     index: 4,
    //     meta: {
    //         title: '',
    //         description: 'Перевести эти деньги на другой евровый счет',
    //     },
    //     async call(store, logs) {
    //         store.set
    //     },
    //     async restore(store, logs) {
    //         // Логика отката шага
    //     },
    // },
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