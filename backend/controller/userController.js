import Note from './../model/userModel.js'

export const createNote = async (req, res) => {
    try {
      const newNote = new Note(req.body);
      const savedNote = await newNote.save();
      res.status(201).json({
        message: "Note saved successfully",
        data: savedNote,
      });
    } catch (error) {
      res.status(500).json({ message: "Note is not saved" });
    }
  };

  export const getAllNotes = async (req, res) => {
    try {
        const noteData = await Note.find()
        if(!noteData || noteData.length === 0){
            return res.status(404).json({message: "No notes found."})
        }
        res.status(200).json(noteData)
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch notes", error });
    }
  }

  export const updateNote = async (req, res) => {
    try {
        const id = req.params.id;
        const noteExist = await Note.findById(id)
        if(!noteExist){
            return res.status(404).json({message: "No note found."})
        }
        const updatedData = await Note.findByIdAndUpdate(id, req.body, {
            new: true
        })
        res.status(200).json({message: "Note updated successfully." , data: updatedData})
    } catch (error) {
        res.status(500).json({message: "Failed to update note.", error})
    }
  }

  export const deleteNote = async (req, res) => {
    try {
        const id = req.params.id;
        const noteExist = await Note.findById(id)
        if(!noteExist){
            return res.status(404).json({message: "No note found."})
        }
        const deletedNote = await Note.findByIdAndDelete(id)
        res.status(200).json({message: "Note deleted successfully." , data: deletedNote})
    } catch (error) {
        res.status(500).json({message: "Failed to update note.", error})
    }
  }