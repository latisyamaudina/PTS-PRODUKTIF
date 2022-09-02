function samplePromise() {
    return Promise.resolve("Latisya");
}
const name = await samplePromise();
console.info(name);