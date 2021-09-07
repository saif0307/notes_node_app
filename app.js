const notes = require('./notes')
const yargs = require('yargs')


yargs.command({
    command:'add',
    describe: 'Adding a new Note!',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
        // console.log('Note title:', argv.title)
        // console.log('Note Body:', argv.body)
        // console.log(argv)
    }
    
})
yargs.command({
    command:'remove',
    describe: 'Removed a Note!',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: ({title}) => {
        notes.remove(title)
    }
})

yargs.command({
    command:'list',
    describe: 'listing the notes',
    handler: () => {
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe: 'Reading a new Note!',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: ({title}) => {
        notes.readNote(title)
    }
})

yargs.parse()