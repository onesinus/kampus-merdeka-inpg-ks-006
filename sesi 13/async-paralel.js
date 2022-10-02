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
        }, 2000);
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
    firstPromise().then(response => console.log(response))
    secondPromise().then(response => console.log(response))
    thirdPromise().then(response => console.log(response))
}

asyncParalel()