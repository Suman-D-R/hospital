import express from 'express';
import * as hospitalController from '../controllers/hospital.controller';
import { userAuth } from '../middlewares/auth.middleware';


const router = express.Router();

router.post('/', hospitalController.createHospital);
router.get('/', hospitalController.getAllHospitals);
router.get('/:hospitalId',userAuth, hospitalController.getHospitalById);
router.put('/:hospitalId',userAuth, hospitalController.updateHospitalById);
router.delete('/:hospitalId',userAuth, hospitalController.deleteHospitalById);

export default router;
