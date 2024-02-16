import express from 'express';
import * as departmentController from '../controllers/department.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/',userAuth, departmentController.createDepartment);
router.get('/',userAuth, departmentController.getAllDepartments);
router.get('/:departmentId',userAuth, departmentController.getDepartmentById);
router.put('/:departmentId',userAuth, departmentController.updateDepartmentById);
router.delete('/:departmentId',userAuth, departmentController.deleteDepartmentById);

export default router;
