import express from 'express';
import * as departmentController from '../controllers/department.controller';

const router = express.Router();

router.post('/', departmentController.createDepartment);
router.get('/', departmentController.getAllDepartments);
router.get('/:departmentId', departmentController.getDepartmentById);
router.put('/:departmentId', departmentController.updateDepartmentById);
router.delete('/:departmentId', departmentController.deleteDepartmentById);

export default router;
