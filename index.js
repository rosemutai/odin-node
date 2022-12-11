const http = require('http')
const fs = require('fs')

const app = http.createServer((req, res) =>{

    if(req.url === "/"){
        fs.readFile('./index.html', (err, data) => {
                if(err){
                    console.log(err)
                }else{
                    res.writeHead(200, {'Content-Type': 'text/html'})
                    res.end(data)

                }
        })

    }

    else if(req.url === "/about"){
        fs.readFile('./about.html', (err, data) =>{
            if(err){
                console.log(err)
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.end(data)
            }
        })
    }

    else if(req.url === "/contact"){
        fs.readFile('./contact.html', (err, data) =>{
            if(err){
                console.log(err)
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.end(data)
            }
        })
    }

    else {
        fs.readFile('./404.html', (err, data) =>{
            if(err){
                console.log(err)
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.end(data)
            }
        })
    }

})

app.listen(5000, () => console.log("Server running at port 5000"))

