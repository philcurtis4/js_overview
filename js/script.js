// Target the form 
const noteForm = document.querySelector('#note-form');
// Target the note header h3
const noteHeader = document.querySelector('.note-header');
//Target container
const NoteContainer = document.querySelector('.container');


function getNotes () {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    return notes;
}

// A function that is called when the form is submitted

function createNote (eventObj) {
    eventObj.preventDefault();

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

    const objHours = dateObj.getHours();

    const hour = objHours > 12 ? objHours - 12 : objHours;

    const minutes = dateObj.getMinutes();
    //combine all of those in a string - 7/24/2024

    const dateStr = `${month}/${date}/${year} ${hour}:${minutes}`;

    //create an object value with the note text and the current date
    const noteObj = {
        text: noteText,
        date: dateStr
    };
    

    //pull the old data from the database(localstoreage) or an empty array if not previous data has been stored
    
    //if no data is stored it will be falsy and an empty array is returned. If there is data stored it returns that
    const notes = getNotes(); //created a function above

    //push the notes Obj to the notes array

    notes.push(noteObj);
    const jsonArray = JSON.stringify(notes);

    //save the notes array to the local storage

    localStorage.setItem('notes', jsonArray);

        // resets the input box to empty
    noteInput.value = "";

    outputNotes();
    
}

function outputNotes () {
    //retrieve the raw notes array from localStorage

    const notes = getNotes(); //created a function above

    //convert the raw array from localStorage

        //already handled in getNotes();

    //Target our main container element

    const container = document.querySelector('.container');
    const notesHeader = document.querySelector('.note-header');

    if (notes.length) {
        notesHeader.innerText = 'Your Notes:';
    }

    container.innerHTML = '';
    //loop over each object in the array and output an article element into our main container for each object

    for (const noteObj of notes) {
        container.insertAdjacentHTML('beforeend', `
            <article class="note">
                <p class="note-text">${noteObj.text}</p>
                <p class="note-date">Added: ${noteObj.date}</p>
            </article>
            `);

    } 
}

// Set up and nessessary event listeners that should be listening when page loads


outputNotes();
noteForm.addEventListener('submit', createNote);



// localStorage.setItem('name', 'Phil');


