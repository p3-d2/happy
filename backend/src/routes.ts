import { Router, Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Orphanage from './models/Orphanage'

const routes = Router()

routes.post('/orphanages', async (req: Request, res: Response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = req.body

  const orphanageRepository = getRepository(Orphanage)

  const orphanage = orphanageRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  })

  await orphanageRepository.save(orphanage)

  return res.status(201).json(orphanage)
})

export default routes
