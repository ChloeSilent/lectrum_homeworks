class Transaction {

    constructor() {
        this.store = new Map();
        this.logs = [];

    }


    async dispatch(scrnario) {

        try {
            await scrnario.call();
        } catch (error) {
            console.log(error.message);
            rollback(scrnario)

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

class Log {
    getResult(result) {
        return result;
    }

    getError(error) {
        if (!error) {

            return null;
        } else {

            return {
                name: error.name,
                message: error.message,
                stack: error.stack
            };
        }
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
            title: 'Collect backup information.',
            description: 'Collects pieces of data that required for restore scenario',
        },
        async call(store, logs) {
            let log = Log(index, title, description, result, error)
            logs.push(log)
            store.set(/* Сюда положить пару ключ/значение */);
        },
        async restore(store, logs) {
            // this.logs.push( /*Index, meta, nextStep, error */ )
        },
    },
    {
        index: 2,
        meta: {
            title: 'Withdraw funds from source account.',
            description: 'Takes off funds from source account and freezes it until entire scenario ends successfully or unsuccessfully.',
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