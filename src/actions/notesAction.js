import { GET_NOTES } from '../actionTypes';
import { database } from '../firebase';
export function getNotes() {
  let notes = [];

  database.on('value', snapshop => {
    notes.push(snapshop.val());
  });

  return {
    type: GET_NOTES,
    payload: {
      notes
    }
  };
}

export function saveNote(note) {
  return database.push(note);
}
