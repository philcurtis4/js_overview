// const newLi = $('<li>'); //creates a new element
// newLi.text('New List item');

// //$('li.special').text('changed')

// $('li.special').html('<a href="https://google.com">Go To Google</a>')

// $('ul').append(newLi); // adds another list item at the end


const $saveBtn = $('#save-note');

function createNote() {
  //eventObj.preventDefault();
  const $titleInput = $('#title-input');
  const $textInput = $('#text-input');
  const $dateInput = $('#date-input');
  const dateStr = $dateInput.val();
  const dateTime = dayjs(dateStr)

  console.log(dateTime.format('MMM DD YYYY'));
  // added the day js script to get this format
}

$saveBtn.on('click', createNote)

$('#date-input').datepicker();

