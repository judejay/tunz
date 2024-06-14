import {  PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { songsData  } from './songsData';

const prisma = new PrismaClient();

const run = async () => {
    await Promise.all(
        songsData.map(async (artist) => {
            return prisma.artist.upsert({
                where: { name: artist.name },
                update: {},
                create: {
                  name: artist.name,
                  songs: {
                    create: artist.songs.map((song) => ({
                        name: artist.name,
                      title: song.name, 
                      duration: song.duration,
                      url: song.url,
                    })),
                  },
                },
              })
        }
    ));


const salt =  bcrypt.genSaltSync();
const user = await prisma.user.upsert({
    where: { email: 'user@test.com' },
    update: {},
    create: {
      email: 'user@test.com',
      password: bcrypt.hashSync('password', salt),
      firstName: 'Sam',
      lastName: 'Cam'
    },
  })
  const songs = await prisma.song.findMany({})
  await Promise.all(
    new Array(10).fill(1).map(async (_, i) => {
      return prisma.playlist.create({
        data: {
          name: `Playlist #${i + 1}`,
          user: {
            connect: { id: user.id },
          },
          songs: {
            connect: songs.map((song) => ({
              id: song.id,
            })),
          },
        },
      })
    })
  )
};
run().catch((e) => {
    throw e
}).finally(async () => {
    await prisma.$disconnect();
})
