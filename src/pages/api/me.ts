import { validateRoute } from "../../../lib/auth";
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "../../../lib/prisma";

export default validateRoute(async (req: NextApiRequest, res: NextApiResponse, user: any) => {
    const playlistsCount = await prisma.playlist.count({
      where: {
        userId: user.id,
      },
    })
  
    console.log(playlistsCount)
    res.json({ ...user, playlistsCount })
  })
  
