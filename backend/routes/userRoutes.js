import express from 'express'
import { createNote, deleteNote, getAllNotes, updateNote } from '../controller/userController.js'

const route = express.Router()

route.post("/note", createNote)
route.get("/notes", getAllNotes)
route.put("/update/note/:id", updateNote)
route.delete("/delete/note/:id", deleteNote)

export default route