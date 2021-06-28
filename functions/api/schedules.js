const { db } = require('../util/admin');

// GET
exports.getSchedules = (request, response) => {
  db.collection('schedules')
    .get()
    .then((data) => {
      let schedules = [];
      data.forEach((doc) => {
        schedules.push({
          scheduleId: doc.id,
          name: doc.data().name,
          interval: doc.data().interval,
          notes: doc.data().notes,
        });
      });
      return response.json(schedules);
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({ error: error.code });
    });
};

// GET
exports.getOneSchedule = (request, response) => {
  db.doc(`/schedules/${request.params.scheduleId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return response.status(404).json({
          error: 'Could not find Schedule!',
        });
      }

      let ScheduleData = doc.data();
      ScheduleData.scheduleId = doc.id;
      return response.json(ScheduleData);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: error.code });
    });
};

// POST
exports.postSchedule = (request, response) => {
  if (request.body.name.trim() === '') {
    return response
      .status(400)
      .json({ body: 'Please enter all required information.' });
  }

  let newScheduleItem = {
    userId: request.user.uid,
    name: request.body.name,
    interval: request.body.interval,
    notes: request.body.notes,
    createdAt: new Date().toISOString(),
  };
  console.log(newScheduleItem);

  db.collection('schedules')
    .add(newScheduleItem)
    .then((data) => {
      let resNewScheduleItem = newScheduleItem;
      resNewScheduleItem.scheduleId = data.id;
      response.json(resNewScheduleItem);
      console.log(resNewScheduleItem);
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({ error: error.code });
    });
};

// DELETE
exports.deleteSchedule = (request, response) => {
  const document = db.doc(`/schedules/${request.params.scheduleId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return response.status(404).json({ error: 'Schedule not found.' });
      }
      return document.delete();
    })
    .then(() => {
      response.json({ message: 'Schedule deleted successfully.' });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};
