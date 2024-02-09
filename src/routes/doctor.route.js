import express from 'express';
import * as doctorController from '../controllers/doctor.controller';

const router = express.Router();

router.post('/', doctorController.createDoctor);
router.get('/', doctorController.getAllDoctors);
router.get('/:doctorId', doctorController.getDoctorById);
router.put('/:doctorId', doctorController.updateDoctorById);
router.delete('/:doctorId', doctorController.deleteDoctorById);

export default router;
