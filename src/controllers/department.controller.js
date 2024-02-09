import HttpStatus from 'http-status-codes';
import * as DepartmentService from '../services/department.service';

export const createDepartment = async (req, res) => {
    try {
        const newDepartment = await DepartmentService.createDepartment(req.body);
        res.status(HttpStatus.CREATED).json(newDepartment);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

export const getAllDepartments = async (req, res) => {
    try {
        const departments = await DepartmentService.getAllDepartments();
        res.status(HttpStatus.OK).json(departments);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

export const getDepartmentById = async (req, res) => {
    try {
        const department = await DepartmentService.getDepartmentById(req.params.departmentId);
        res.status(HttpStatus.OK).json(department);
    } catch (error) {
        res.status(HttpStatus.NOT_FOUND).json({ error: error.message });
    }
};

export const updateDepartmentById = async (req, res) => {
    try {
        const updatedDepartment = await DepartmentService.updateDepartmentById(req.params.departmentId, req.body);
        res.status(HttpStatus.OK).json(updatedDepartment);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

export const deleteDepartmentById = async (req, res) => {
    try {
        const deletedDepartment = await DepartmentService.deleteDepartmentById(req.params.departmentId);
        res.status(HttpStatus.OK).json(deletedDepartment);
    } catch (error) {
        res.status(HttpStatus.NOT_FOUND).json({ error: error.message });
    }
};
