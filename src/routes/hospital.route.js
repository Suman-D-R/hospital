import express from 'express';
import * as hospitalController from '../controllers/hospital.controller';

const router = express.Router();

router.post('/', hospitalController.createHospital);
router.get('/', hospitalController.getAllHospitals);
router.get('/:hospitalId', hospitalController.getHospitalById);
router.put('/:hospitalId', hospitalController.updateHospitalById);
router.delete('/:hospitalId', hospitalController.deleteHospitalById);

export default router;
