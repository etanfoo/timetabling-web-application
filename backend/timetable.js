const con = require('./database');

exports.timetableCreate = function(userId, timetableTitle) {
    // console.log('timetable create');
};  

exports.timetableInfo = function(timetableId) {
    // console.log('timetable info');
};

exports.timetableUpdate = function(timetableId, newTitle) {
    // console.log('timetable update');
};

exports.timetableDelete = function(userID, timetableId) {
    // console.log('timetable delete');
};

exports.timetableAddEvent = function(timetableId, eventId) {
    console.log('timetable add event');
};

exports.timetableDeleteEvent = function(timetableId, eventId) {
    console.log('timetable delete event');
};