function samplePromise() {
    return Promise.resolve("Latisya");
}
async function run() {
    const name = await samplePromise();
    console.info(name);
}
run();