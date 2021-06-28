const functions = require('firebase-functions');

const app = require('express')();
const cors = require('cors');
app.use(cors());

const {
  loginUser,
  signUpUser,
  getUserDetails,
  updateUserDetails,
  uploadProfilePhoto,
} = require('./api/users');

const { getGroceries, postGrocery, deleteGrocery } = require('./api/groceries');

const {
  getSchedules,
  getOneSchedule,
  postSchedule,
  deleteSchedule,
} = require('./api/schedules');

const auth = require('./util/auth');

// User Routes
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.get('/user', auth, getUserDetails);
app.post('/user', auth, updateUserDetails);
app.post('/user/image', auth, uploadProfilePhoto);

// Grocery Routes
app.get('/groceries', getGroceries);
app.post('/postGrocery', postGrocery);
app.delete('/grocery/:groceryId', deleteGrocery);

// Schedule Routes
app.get('/schedules', getSchedules);
app.get('/schedule/:scheduleId', getOneSchedule);
app.post('/postSchedule', auth, postSchedule);
app.delete('/schedule/:scheduleId', auth, deleteSchedule);

exports.api = functions.https.onRequest(app);
