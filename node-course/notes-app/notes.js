const fs=require ('fs');
const chalk = require('chalk');

const getNotes=()=>{
   return 'yournotes';
}

const addNote=(title,body)=>{

   const notes=loadNotes();

   // const duplicateNotes = notes.filter((note)=>note.title===title);

   const duplicateNote= notes.find((note)=>note.title===title);

   debugger;
   
   if(duplicateNote===undefined){
      notes.push({
         title: title,
         body: body,
      })

      saveNotes(notes);
   }
   else {
      console.log('note title taken')
   }
   
}

const saveNotes=(notes)=>{

   const dataJSON=JSON.stringify(notes);
   fs.writeFileSync('notes.json',dataJsON);

}

const loadNotes=()=>{

   try{

      const dataBuffer=fs.readFileSync('notes.json');
      const dataJSON=dataBuffer.toString();
      return JSON.parse(dataJSON);

   } catch (e){

      return [];

   }
}

const removeNote=(title)=>{

   const notes=loadNotes();
   const notestokeep = notes.filter((note)=>note.title!==title);

   if(notestokeep.length<notes.length)
   {
      console.log(chalk.green('removed'));
      saveNotes(notestokeep);
   }
   else{
      console.log(chalk.blue(' not removed'));
   }
 
}

const listNotes=()=>{
      const notes=loadNotes();
      console.log(chalk.red('your notes'));
      notes.forEach(note => {
         console.log(note.title);         
      });
}

const readNotes=(title)=>{
   const notes=loadNotes();
   const mynote=notes.find((note)=>note.title===title);
   if(mynote)
   {
      console.log(chalk.inverse(mynote.title));
      console.log(mynote.body)
   }
   else{
      console.log(title+' not found');
   }

}


module.exports={
   getNotes: getNotes,
   addNote: addNote,
   removeNote: removeNote,
   listNotes: listNotes,
   readNotes: readNotes
}  