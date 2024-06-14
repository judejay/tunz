import {  PrismaClient } from '@prisma/client';
import becryp from 'bcrypt';
import { artistsData } from './songsData';

const prisma = new PrismaClient();

const run = async () => {
    await Promise.all(
        artistsData.map(async (artist) => {
            return prisma.artist.upsert({
                where: { name: artist.name },
                update: {},
                create: {
                  name: artist.name,
                  songs: {
                    create: artist.songs.map((song) => ({
                      name: song.name,
                      title: song.title, 
                      duration: song.duration,
                      url: song.url,
                    })),
                  },
                },
              })
        }
    ));
};


run().catch((e) => {
    throw e
}).finally(async () => {
    await prisma.$disconnect();
})
