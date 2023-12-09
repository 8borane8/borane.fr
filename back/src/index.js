const expressapi = require("@borane/expressapi");
const config = require("./config.json");
const fs = require("fs");

const httpServer = new expressapi.HttpServer(config.port);

const services = {
    config
}

httpServer.use((req, res) => {
    res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, OPTIONS");

    if(config.cors.includes(req.headers.origin))
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
});

function loadRoutesFromDirectory(path = `${process.cwd()}/src/routes`){
    for(let asset of fs.readdirSync(path, { withFileTypes: true })){
        const subpath = `${path}/${asset.name}`;

        if(asset.isDirectory()){
            loadRoutesFromDirectory(subpath);
            continue;
        }

        const routes = require(subpath);
        routes.forEach(r =>
            httpServer[r.method.toLowerCase()](
                r.endpoint,
                r.requestListener.bind(services)
            )
        );
    }
}

loadRoutesFromDirectory();
httpServer.listen();