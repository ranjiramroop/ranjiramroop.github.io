var $noteTitle = $(".note-title");
var $noteText = $(".note-textarea");
var $saveNoteBtn = $(".save-note");
var $createNoteBtn = $(".new-note");
var $noteList = $(".list-container .list-group");

// textEntry is used to keep track of the note in the textarea
var textEntry = {};

//Saving a note to the db with the post method
var saveNote = function(note) {
  return $.ajax({
    url: "/api/notes",
    data: note,
    method: "POST"
  });
};
// retrieving all notes from the db with a get method
var savedNotes = function() {
  return $.ajax({
    url: "/api/notes",
    method: "GET"
  });
};
// Deleting a note from the db with the delete method
var deleteNote = function(id) {
  return $.ajax({
    url: "api/notes/" + id,
    method: "DELETE"
  });
};

// shows the textEntry, or will show the option to create a new note
var rendertextEntry = function() {
  $saveNoteBtn.hide();
  console.log(textEntry);
  if (textEntry.text) {
    $noteTitle.attr("readonly", true);
    $noteText.attr("readonly", true);
    $noteTitle.val(textEntry.title);
    $noteText.val(textEntry.text);
  } else {
    $noteTitle.attr("readonly", false);
    $noteText.attr("readonly", false);
    $noteTitle.val("");
    $noteText.val("");
  }
};

// Takes the input then saving it to the db to update the view
var handleNoteSave = function() {
  var createNote = {
    title: $noteTitle.val(),
    text: $noteText.val()
  };
  saveNote(createNote).then(function(data) {
    getAndRenderNotes();
    rendertextEntry();
  });
};

// Delete the clicked note
var handleNoteDelete = function(event) {
  event.stopPropagation();
  var index = $(this)
    .parent(".list-group-item")
    .data("index");
  var note = notes[index];
  if (textEntry.id === note.id) {
    textEntry = {};
  }
  deleteNote(note.id);
  getAndRenderNotes();
  rendertextEntry();
};

// textEntry display
var handleNoteView = function() {
  var index = parseInt($(this).attr("data-index"));
  console.log(index);
  textEntry = notes[index];
  console.log(textEntry);
  rendertextEntry();
};

// User can enter a new note in the textEntry
var handleCreateNoteView = function() {
  textEntry = {};
  rendertextEntry();
};

// The save button will disappear when the entry is empty, but it will show it if text is entered
var handleRenderSaveBtn = function() {
  if (!$noteTitle.val().trim() || !$noteText.val().trim()) {
    $saveNoteBtn.hide();
  } else {
    $saveNoteBtn.show();
  }
};

var notes;

// The sidebar will create a list using the note titles
var renderNoteList = function() {
  $noteList.empty();
  var noteListItems = [];
  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];
    var $li = $("<li class='list-group-item'>").attr("data-index", i);
    var $span = $("<span>").text(note.title);
    var $delBtn = $(
      "<i class='fas fa-trash-alt float-right text-danger delete-note'>"
    );
    $li.append($span, $delBtn);
    noteListItems.push($li);
  }
  $noteList.append(noteListItems);
};

// Gets notes from the db and renders them to the sidebar
var getAndRenderNotes = function() {
  return savedNotes().then(function(data) {
    notes = data;
    renderNoteList();
  });
};

$saveNoteBtn.on("click", handleNoteSave);
$noteList.on("click", ".list-group-item", handleNoteView);
$createNoteBtn.on("click", handleCreateNoteView);
$noteList.on("click", ".delete-note", handleNoteDelete);
$noteTitle.on("keyup", handleRenderSaveBtn);
$noteText.on("keyup", handleRenderSaveBtn);

// Gets and renders the initial list of notes
getAndRenderNotes();
