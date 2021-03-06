const functions = require("firebase-functions");
const { Nuxt } = require("nuxt-start");
const express = require("express");
const app = express();
const nuxtConfig = require("../nuxt.config.js");
const config = { ...nuxtConfig, dev: false, buildDir: "nuxt" };
const nuxt = new Nuxt(config);
let isReady = false;
const readyPromise = nuxt.ready().then(() => {
    isReady = true;
}).catch(() => {
    process.exit(1);
});
async function handleRequest(req, res) {
    if (!isReady) {
        await readyPromise;
    }
    res.set("Cache-Control", "public, max-age=3600, s-maxage=14400");
    await nuxt.render(req, res);
}
app.get("*", handleRequest);
app.use(handleRequest);
exports.nuxtssr = functions.region("us-central1").https.onRequest(app);
