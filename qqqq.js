const { resolve } = require("promise");



function delay(time) {
    return new Promise(res => setTimeout(res, time))
}



async function q() {
    await delay(2000);
    console.log(1111111);
}


q();