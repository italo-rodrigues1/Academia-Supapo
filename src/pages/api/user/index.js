import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handlerUser(req, res) {
    const { method } = req
    if(method === 'GET'){
        const users = await prisma.user.findMany()
        res.status(200).json({ users })
    }else if(method === 'POST'){
        const { email, password } = req.body
        const user = await prisma.user.create({
            data: {
                email,
                password
            }
        })
        return res.status(200).json({ user })
    }
   return res.status(404).json({ message: 'Route not found' })
}