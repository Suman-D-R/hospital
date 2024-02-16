import Department from '../models/department.model';

export const createDepartment = async (departmentData) => {
    try {
        
        return await Department.create(departmentData);
    } catch (error) {
        throw error;
    }
};

export const getAllDepartments = async () => {
    try {
        return await Department.find();
    } catch (error) {
        throw error;
    }
};

export const getDepartmentById = async (departmentId) => {
    try {
        const department = await Department.findById(departmentId);
        if (!department) {
            throw new Error('Department not found');
        }
        return department;
    } catch (error) {
        throw error;
    }
};

export const updateDepartmentById = async (departmentId, departmentData) => {
    try {
        const updatedDepartment = await Department.findByIdAndUpdate(departmentId, departmentData, { new: true });
        if (!updatedDepartment) {
            throw new Error('Department not found');
        }
        return updatedDepartment;
    } catch (error) {
        throw error;
    }
};

export const deleteDepartmentById = async (departmentId) => {
    try {
        const deletedDepartment = await Department.findByIdAndDelete(departmentId);
        if (!deletedDepartment) {
            throw new Error('Department not found');
        }
        return deletedDepartment;
    } catch (error) {
        throw error;
    }
};
