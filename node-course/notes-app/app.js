const chalk=require('chalk');

const yargs=require('yargs');

const notes = require('./notes.js');
const { strict } = require('yargs');

//customize yargs version

yargs.version('1.1.0');

//add command

yargs.command({
    command:'add',
    describe: 'add new note',
    builder : {
        title: {
            describe:'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body ',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.addNote(argv.title,argv.body)
    }

    
})

yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'note title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command:'list',
    describe:'listing notes',
    handler (){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            discribe: 'describe title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.readNotes(argv.title);
    }
})

//notes=> add, remove, list etc.

yargs.parse();


