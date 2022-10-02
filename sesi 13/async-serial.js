const firstPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("First Promise")
        }, 1000);
    })
}

const secondPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Second Promise")
        }, 5000);
    })
}

const thirdPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Third Promise")
        }, 1000);
    })
}

async function asyncParalel() {
    await firstPromise().then(response => console.log(response))
    await secondPromise().then(response => console.log(response))
    await thirdPromise().then(response => console.log(response))
}

// ini kalau sync
/*
    function asyncParalel() {
        firstPromise().then(response => console.log(response))
        secondPromise().then(response => console.log(response))
        thirdPromise().then(response => console.log(response))
    }
*/
asyncParalel()