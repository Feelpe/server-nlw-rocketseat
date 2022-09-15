import express from "express";
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient({
  log: ['query']
});

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany();

  return res.json(games);
})

app.post('/ads', (req, res) => {
  return res.status(201).json([]);
})

app.get('games/:id/ads', (req, res) => {
  // const gameId = req.params.id;
})

app.get('ads/:id/discord', (req, res) => {
  // const adId = req.params.id;
})

app.listen(3333);