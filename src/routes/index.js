import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import hospitalRoute from './hospital.route';
import doctorRoute from './doctor.route';
import departmentRoute from './department.route';
import patientRoute from './patient.route';
import appointmentRoute from './appointment.route';

const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/hospital', hospitalRoute);
  router.use('/doctor',doctorRoute);
  router.use('/department',departmentRoute);
  router.use('/patient',patientRoute);
  router.use('/appointment',appointmentRoute)


  return router;
};

export default routes;
