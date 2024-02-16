import express from 'express';
import * as patientController from '../controllers/patient.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/',userAuth, patientController.createPatient);
router.get('/',userAuth, patientController.getAllPatients);
router.get('/:patientId',userAuth, patientController.getPatientById);
router.put('/:patientId',userAuth, patientController.updatePatientById);
router.delete('/:patientId',userAuth, patientController.deletePatientById);

export default router;
