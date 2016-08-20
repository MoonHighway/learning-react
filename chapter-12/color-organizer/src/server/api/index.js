import { Router } from 'express'
import C from '../../constants'
import fs from 'fs'
import path from 'path'
import { v4 } from 'node-uuid'

const router = Router()

export const saveState = state =>
    new Promise((resolves, rejects) =>
        fs.writeFile(
            path.join(__dirname, '../../../data/initialState.json'),
            JSON.stringify(state),
            error => (error) ? rejects(error) : resolves()
        )
    )

const start = store => {

    router.post("/colors", (req, res) => {
        const action = {
            type: C.ADD_COLOR,
            id: v4(),
            title: req.body.title,
            color: req.body.color,
            timestamp: new Date().toString()
        }
        store.dispatch(action)
        saveState(store.getState()).then(
            () => res.status(200).json(action),
            error => res.status(500).json(error)
        )
    })

    router.put("/color/:id", (req, res) => {
        const action = {
            type: C.RATE_COLOR,
            id: req.params.id,
            rating: parseInt(req.body.rating)
        }
        store.dispatch(action)
        saveState(store.getState()).then(
            () => res.status(200).json(action),
            error => res.status(500).json(error)
        )
    })

    router.delete("/color/:id", (req, res) => {
        const action = {
            type: C.REMOVE_COLOR,
            id: req.params.id
        }
        store.dispatch(action)
        saveState(store.getState()).then(
            () => res.status(200).json(action),
            error => res.status(500).json(err)
        )

    })

    return router

}

export default start