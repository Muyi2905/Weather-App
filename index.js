//

function nysc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = "scam"
            if (result === "scam") {
                resolve("nysc na scam oo")
            }
            else {
                reject("nysc no be scam")
            }

        }, 2000)
    });
}

async function push() {
    const result = await nysc();
    console.log(result);
}

nysc();

