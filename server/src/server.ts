import express from 'express';

const app = express();

app.use(express.json());


app.get('/', (req, res) =>{
    return res.send('hello Word');
});


app.listen(3333);
console.log('Server rodando na porta 3002');