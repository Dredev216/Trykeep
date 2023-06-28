import express from 'express'

const app = express()
app.use(express.json())

const medicamentos = [
    {id: 1, nome: 'Paracetamol', expDate: '21/06/2023'},
    {id: 2, nome: 'Batrim', expDate: '23/06/2023'},
    {id: 3, nome: 'Coflix', expDate: '25/06/2023'},
    {id: 4, nome: 'Dolaren', expDate: '27/06/2023'},
    {id: 5, nome: 'Vitamina C', expDate: '30/06/2023'},
]

function buscarMedicamentoPorId(id){
    return medicamentos.filter(medicamento => medicamento.id == id )
}

function buscarIndiceMedicamento(id){
    return medicamentos.findIndex(medicamento => medicamento.id == id)
}

app.post('/createMedicamentos', (req, res) => {
    medicamentos.push(req.body)
    res.send('Cadastrado com sucesso!')
})

app.get('/', (req,res) => {
    res.send('HELLO WORLD')
})

app.get('/readMedicamento/:id', (req, res) =>{
   	res.json(buscarMedicamentoPorId(req.params.id))
})

app.get('/readMedicamentos', (req, res) => {
    res.send(medicamentos)
})

app.put('/updateMedicamento/:id', (req, res) => {
    let index = buscarIndiceMedicamento(req.params.id)
    medicamentos[index].nome = req.body.andre
    medicamentos[index].expDate = req.body.expDate

    res.send('Registo alterado com sucesso!')
})

app.delete('/deleteMedicamento/:id', (req, res) => {
    let index = buscarIndiceMedicamento(req.params.id)
    medicamentos.splice(index, 1);
    
    res.send(`Apagado com sucesso!`)
})

export default app
