'use server'

import { Pool } from '../db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { codigo, confirma_codigos } = req.body;

    try {
      const client = await Pool.connect();
      const result = await client.query('SELECT * FROM confirma_codigos WHERE codigo = $1', [codigo]);
      client.release();

      if (result.rows.length > 0) {
        const { usado, confirma_codigos: exist_confirma_codigos } = result.rows[0];

        if (!usado) {
          // Usando `client` ao invés de `pool`
          await client.query('UPDATE attendees SET usado = true, attendees = $1 WHERE codigo = $2', [confirma_codigos, codigo]);
          res.status(200).json({ message: 'Presença confirmada com sucesso!' });
        } else {
          res.status(400).json({ error: 'Este código já foi utilizado. Por favor, insira um código válido.' });
        }
      } else {
        res.status(400).json({ error: 'Código inválido. Por favor, insira um código válido.' });
      }
    } catch (error) {
      console.error('Erro ao consultar o banco de dados:', error);
      res.status(500).json({ error: 'Ocorreu um erro ao verificar o código. Por favor, tente novamente mais tarde.' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido. Utilize o método POST.' });
  }
}

