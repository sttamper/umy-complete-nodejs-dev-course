const fs = require('fs');

const getNotes = () => {
    return 'my notes...';
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('New note added!');
    } else {
        console.log('Note title taken!');
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log('Note removed!');
    } else {
        console.log('No note found!');
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};