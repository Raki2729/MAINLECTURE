function resolveAllPromises(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            resolve([]);
            return;
        }

        let results = new Array(promises.length);
        let completed = 0;

        promises.forEach((promise, index) => {
            promise.then(result => {
                results[index] = result;
                completed += 1;
                if (completed === promises.length) {
                    resolve(results);
                }
            }).catch(reject);
        });
    });
}

let promise1 = new Promise(resolve => setTimeout(resolve, 100, 'Result 1'));
let promise2 = new Promise(resolve => setTimeout(resolve, 200, 'Result 2'));
let promise3 = new Promise(resolve => setTimeout(resolve, 50, 'Result 3'));

resolveAllPromises([promise1, promise2, promise3])
    .then(results => console.log('All promises resolved with results:', results))
    .catch(error => console.error('A promise failed with an error:', error));