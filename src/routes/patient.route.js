import express from 'express';
import * as patientController from '../controllers/patient.controller';

const router = express.Router();

router.post('/', patientController.createPatient);
router.get('/', patientController.getAllPatients);
router.get('/:patientId', patientController.getPatientById);
router.put('/:patientId', patientController.updatePatientById);
router.delete('/:patientId', patientController.deletePatientById);

export default router;
