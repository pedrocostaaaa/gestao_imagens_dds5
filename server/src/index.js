import { criarImagem, editarImagem, mostrarImagem, deletarImagem, dowloadImagem, mostrarUmaImagem } from './controllers/ImagemController.js';
import fileUpload from 'express-fileupload';
import express from 'express';
import cors from 'cors';


const app = express();
const porta = 5000;

app.use(express.json());
app.use(fileUpload());
app.use(cors());


app.get('/', (req, res) => {
    res.send('API Funcionando :)')
});

app.get('/public/:nomeImg', dowloadImagem);
//CRUD imagem
app.get('/imagem/:id_imagem', mostrarUmaImagem);
app.delete('/imagem/:id_imagem', deletarImagem);
app.put('/imagem/:id_imagem', editarImagem);
app.get('/imagem', mostrarImagem);
app.get('/imagem', dowloadImagem);
app.post('/imagem', criarImagem);

app.listen(porta, () => {
    console.log(`API Rodando na porta ${porta}`)
});
