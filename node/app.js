import express from "express";
import cors from 'cors'
//importar conexion a la db
import db from "./database/db.js";
//importamos enrutador
import blogRoutes from './routes/routes.js'

const app = express()

app.use( cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosa a la base de datos')
} catch (error) {
    console.log('no se pudo conectar a la base de datos')
    
}

app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
})

app.listen(8000, ()=>{
    console.log('Server Up running in http://localhost:8000/')
})