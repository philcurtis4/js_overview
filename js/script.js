// Target the form 
const noteForm = document.querySelector('#note-form');
// Target the note header h3
const noteHeader = document.querySelector('.note-header');
//Target container
const NoteContainer = document.querySelector('.container');


// A function that is called when the form is submitted

function createNote (eventObj) {
    eventObj.preventDefault();
    noteHeader.innerHTML = 'Your Notes:'

    //grab the note input element

    const noteInput = document.querySelector('#note-input');

    //get the value(what they put in)

    let noteText = noteInput.value;
    
    // Create a date value object

    const dateObj = new Date(); 

    //get the month from data object

    const month = dateObj.getMonth() + 1; //indexing makes jan 0

    //get the date from data object

    const date = dateObj.getDate();

    // get the year from the date object

    const year = dateObj.getFullYear();
    
    //combine all of those in a string - 7/24/2024

    const dateStr = `${month}/${date}/${year}`;

    //create an object value with the note text and the current date
    const noteObj = {
        text: noteText,
        date: dateStr
    };
    

    //pull the old data from the database(localstoreage) or an empty array if not previous data has been stored
    
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    console.log(notes);

    //push the notes Obj to the notes array

    notes.push(noteObj);

    //save the notes array to the local storage

    localStorage.setItem('notes', JSON.stringify(notes));
    
}
// Set up and nessessary event listeners that should be listening when page loads

noteForm.addEventListener('submit', createNote);


// localStorage.setItem('name', 'Phil');


