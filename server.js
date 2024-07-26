//importar o express
import express from "express"

const PORT = 5555

const app = express()
//parte 01 - Roteamento - GET, POST, PUT, DELETE
//parte 02 - Roteamento - Receber informações
/** Formas
 *   
 */

app.get('/users', (request, response)=>{
    console.log(request.query)
     const {nome, cargo, idade } = request.query
     response.status(200).json({nome, cargo,idade})
})
app.get('/users/:id:/:idade', (request, response)=>{
    const {id, idade} = request.params
    response.status(200).json({"users": id, "idade": idade})
})
app.get('/users', (request, response)=>{
    response.status(201).json([
    'Usuario 01',
    'Usuario 02',
    'Usuario03',
])
})
app.get('/users', (request, response)=>{
    response.status(201).json([
    'Usuario 01',
    'Usuario 02',
    'Usuario03',
])
})
app.listen(PORT, ()=>{
    console.log("Servidor on PORT" + PORT)
})