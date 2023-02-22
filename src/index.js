var http = require("http");

const httpServer = http.createServer(handleServer);

let PORT=8081

function handleServer(req, res) {
    const {url}=req
    if(url==="/welcome"){
        res.writeHead(200)
        res.end(" Welcome to Dominos!")
    }
    else if(url==="/contact"){
        res.writeHead(200)
        res.end(`{  
            phone: '18602100000', 
            email: 'guestcaredominos@jublfood.com' 
           }
           `)
    }
    else{
        res.writeHead(404)
        res.end("404 Not Found")
    }
}




httpServer.listen(PORT,()=>{
  console.log("backend app is running")
})

module.exports = httpServer;