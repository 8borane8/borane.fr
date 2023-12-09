const Slick = require("@borane/slick");

process.env.API_BASE_URL = "http://127.0.0.1:5050";

Slick.start({
    workspace: __dirname,
    development: process.argv.includes("--dev")
});