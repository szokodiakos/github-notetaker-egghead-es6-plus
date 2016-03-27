import React from 'react';

import NotesList from './NotesList.js';
import AddNote from './AddNote.js';

const Notes = ({ notes, username, addNote }) => (
  <div>
    <h3>Notes for {username}</h3>
    <AddNote username={username} addNote={addNote} />
    <NotesList notes={notes} />
  </div>
);

Notes.propTypes = {
  notes: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired,
};

export default Notes;
