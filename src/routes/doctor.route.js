import express from 'express';
import * as doctorController from '../controllers/doctor.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/',userAuth, doctorController.createDoctor);
router.get('/',userAuth, doctorController.getAllDoctors);
router.get('/:doctorId',userAuth, doctorController.getDoctorById);
router.put('/:doctorId',userAuth, doctorController.updateDoctorById);
router.delete('/:doctorId',userAuth, doctorController.deleteDoctorById);

export default router;
