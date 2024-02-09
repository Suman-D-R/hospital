import express from 'express';
import * as appointmentController from '../controllers/appointment.controller';

const router = express.Router();

router.post('/', appointmentController.createAppointment);
router.get('/', appointmentController.getAllAppointments);
router.get('/:appointmentId', appointmentController.getAppointmentById);
router.put('/:appointmentId', appointmentController.updateAppointmentById);
router.delete('/:appointmentId', appointmentController.deleteAppointmentById);

export default router;
