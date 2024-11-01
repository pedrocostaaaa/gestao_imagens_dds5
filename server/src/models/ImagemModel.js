import mysql from 'mysql2/promise';
import db from '../conexao.js';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createImagem(descricao, nomeImg, imagem) {
    const conexao = mysql.createPool(db);
    console.log('ImagemModel :: createImagem');
    const sql = 'INSERT INTO imagens (descricao,caminho) VALUES (?,?)';
    const params = [descricao, nomeImg];

    try {
        await imagem.mv(path.join(__dirname, '..', '..', 'public', 'img', nomeImg));
        const [retorno] = await conexao.query(sql, params);
        return [201, 'Imagem cadastrada']
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function readImagem() {
    const conexao = mysql.createPool(db);
    console.log('ImagemModel :: readImagem');
    const sql = 'SELECT * FROM imagens';
    try {
        const [retorno] = await conexao.query(sql);
        return [200, retorno]
    } catch (error) {
        console.log(error)
        return [500, error];
    }
}

export async function updateImagem(descricao, id_imagem) {
    const conexao = mysql.createPool(db);
    console.log('Imagem :: updateImagem');
    const sql = 'UPDATE imagens SET descricao=? WHERE id_imagem = ?';
    const params = [descricao, id_imagem];

    try {
        const [retorno] = await conexao.query(sql, params);
        if (retorno.affectedRows < 1) {
            return [404, { message: 'Imagem não encontrada' }];
        }
        return [200, { message: 'Imagem atualizada' }];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function deletarImagem(descricao, id_imagem) {
    console.log('ImagemModel :: deletarImagem')
    const conexao = mysql.createPoll(db);
    const sql = 'DELETE FROM imagens WHERE id_imagem = ?';
    const params = [id_imagem];

    try {
        const [retorno] = await conexao.query(sql, params);
        if (retorno.affectedRows < 1) {
            return [404, { message: 'Imagem não encontrada' }];
        }
        return [200, { message: 'Imagem deletada' }];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}