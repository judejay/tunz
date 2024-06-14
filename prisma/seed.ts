import {  PrismaClient } from '@prisma/client';
import becryp from 'bcrypt';
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
};


run().catch((e) => {
    throw e
}).finally(async () => {
    await prisma.$disconnect();
})
