import jwt from 'jsonwebtoken';
import prisma from './prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import handler from '@/pages/api/hello';

export const validateRoute = (handler: { (req: NextApiRequest, res: NextApiResponse, user: any): Promise<void>; (arg0: NextApiRequest, arg1: NextApiResponse, arg2: { id: number; email: string; firstName: string | null; lastName: string | null; password: string; createdAt: Date; updatedAt: Date; }): any; }) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
      const token = req.cookies.TUNZ_ACCESS_TOKEN
  
      if (token) {
        let user
  
        try {
          const  id  = jwt.verify(token, 'hello')
          user = await prisma.user.findUnique({
            where: { id: +id as number},
          })
  
          if (!user) {
            throw new Error('Not real user')
          }
        } catch (error) {
          res.status(401)
          res.json({ error: 'Not Authorizied' })
          return
        }
  
        return handler(req, res, user)
      }
  
      res.status(401)
      res.json({ error: 'Not Authorizied' })
    }
  }
  
  export const validateToken = (token: string) => {
    const user = jwt.verify(token, 'hello')
    return user
  }
  