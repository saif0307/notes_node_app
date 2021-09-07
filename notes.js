const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const dublicateNotes = notes.filter((item) => item.title.toLowerCase() === title.toLowerCase())
    
    if(!dublicateNotes.length) {
        notes.push({
            title,
            body
        })

        saveNotes(notes)
    } else {
        console.log('Note title already taken!')
    }   
}

const remove = (title) => {
    const notes = loadNotes()
    const filteredNotes = notes.filter((item) => item.title.toLowerCase() !== title.toLowerCase())
    
    if(filteredNotes.length === notes.length) {
        console.log(chalk.red.inverse('No note Found'))
    } else {
        saveNotes(filteredNotes)
        console.log(chalk.green.inverse('Note removed: ' + title))
    }
}


const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('My Notes:'))
    notes.forEach((item) => console.log(`Title: ${item.title}`))
}

const readNote = (title) => {
    const notes = loadNotes()
    
    const note = notes.find((item) => item.title.toLowerCase() === title)
    debugger;
    if(note) {
        console.log('Title:', chalk.blue.inverse(note.title))
        console.log('Body:', note.body)
    }else {
        console.log(chalk.red.inverse('No note found!'))
    }

}

const saveNotes = (notes) => {
     const toJson = JSON.stringify(notes)
     fs.writeFileSync('notes.json', toJson)
}

const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync('notes.json')
        const jsonNotes = notesBuffer.toString()
        return JSON.parse(jsonNotes)
    }
    catch(e) {
        return []
    }
}

module.exports = {addNote, remove, listNotes, readNote}