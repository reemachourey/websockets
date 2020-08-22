//create a mini server
const http = require("http");
let connection=nul;
const httpserver= http.createServer((req,res)=>{
    console.log("we have recived a request");
});

//websocket server for handshake
const websocket = new WebSocketServer({
    "httpServer":httpserver
})

//request for http upgrade
websocket.on("request", request=>{
    connection=request.accept(null, request.origin);
    connection.on("onopen", e=>console.log("Connection Open!!"));
    connection.on("onclose", e=>console.log("Connection Closed!!"));

    connection.on("onmessage", message=> {
        console.log("Received message!!")
    });
});

//server is listening
httpserver.listen(8080,()=>console.log("We are listening"));