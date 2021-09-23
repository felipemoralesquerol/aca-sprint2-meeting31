const redis = require("redis");
let client = undefined;

try {
    client = redis.createClient({
        host: "127.0.0.1",
        port: 6379
    }); //crear la conexión del cliente
    // host: IP del servidor Redis
    // port: Puerto del servidor Redis

    client.on("error", function (error) {
        console.error(error);
    });
    console.log(redis)

}
catch (error) {
    console.error('Error de acceso a Redis' + error);
};

module.exports = client;