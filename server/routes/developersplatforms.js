const express = require('express')

const devPlat = require('../db/developersplatforms')

const router = express.Router()

module.exports = router

router.post('/:id', (req, res) => {
  const devId = Number(req.params.id)
  const platId = Number(req.body.platformId)
  return devPlat.insertNewDevPlat({ developerId: devId, platformId: platId })
    .then(devPlatId => {
      res.status(201).json(devPlatId)
      return null
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({
        error: {
          title: 'create new developer'
        }
      })
    })
})