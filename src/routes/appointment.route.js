import express from 'express';
import * as appointmentController from '../controllers/appointment.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/',userAuth, appointmentController.createAppointment);
router.get('/',userAuth, appointmentController.getAllAppointments);
router.get('/appointment/:appointmentId',userAuth, appointmentController.getAppointmentById);
router.put('/:appointmentId',userAuth, appointmentController.updateAppointmentById);
router.delete('/:appointmentId',userAuth, appointmentController.deleteAppointmentById);
router.get('/totalcountbydoctor', appointmentController.getTotalCountByDoctor);
router.get('/count-by-doctor/:doctorId', appointmentController.getCountByDoctor);

export default router;
