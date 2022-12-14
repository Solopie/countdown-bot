require("dotenv").config();

const REQUIRED_KEYS = ["PROD_BOT_TOKEN", "CLIENT_ID"];

for (const key of REQUIRED_KEYS) {
    if (!process.env[key]) {
        throw new Error(`Environment variable ${key} is missing or empty`);
    }
}

let BOT_TOKEN = process.env.PROD_BOT_TOKEN;
if (process.env.NODE_ENV === "dev") {
    BOT_TOKEN = process.env.DEV_BOT_TOKEN;
}

const CLIENT_ID = process.env.CLIENT_ID;
const RUNTIME_CONFIG = { "TITLE_CHANNEL": null, "COUNTDOWN_CHANNEL": null, "INTERVAL_ID": null };

module.exports = {
    BOT_TOKEN, CLIENT_ID, RUNTIME_CONFIG
};
