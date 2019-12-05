// Dependencies
const fs = require("fs");
const path = require("path");
const express = require("express");

//Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

let notes;

const saveNotes = fs.readFileSync("db/db.json", "UTF-8");

if (saveNotes) {
  const writeNotes = JSON.parse(saveNotes);
  notes = writeNotes;
  noteID();
} else {
  notes = [];
}

//ASSIGN ID FOR NOTES
function noteID() {
  for (i = 0; i < notes.length; i++) {
    notes[i].id = i;
  }
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // body
app.use(express.static(__dirname + "/public")); // middleware function- serves in my public directory

//Routes
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", function(req, res) {
  return res.json(notes);
});

app.post("/api/notes", function(req, res) {
  var createNote = req.body;
  console.log(createNote);
  notes.push(createNote);
  noteID();
  fs.writeFileSync("db/db.json", JSON.stringify(notes, null, 2), function(err) {
    if (err) {
      throw err;
    }
  });
});

//Deleting the notes
app.delete("api/notes/:id", function(req, res) {
  const deleteNotes = req.params.id;
  notes.splice(deleteNotes, 1);
  noteID();
  fs.writeFileSync("db/db.json", JSON.stringify(notes, null, 2));
});

//HTML ROUTE To Notes
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});
//HTML ROUTE to Index
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
