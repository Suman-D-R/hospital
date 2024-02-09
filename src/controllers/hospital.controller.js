import HttpStatus from 'http-status-codes';
import * as HospitalService from '../services/hospital.service';

export const createHospital = async (req, res) => {
    try {
        const newHospital = await HospitalService.createHospital(req.body);
        res.status(HttpStatus.CREATED).json(newHospital);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

export const getAllHospitals = async (req, res) => {
    try {
        const hospitals = await HospitalService.getAllHospitals();
        res.status(HttpStatus.OK).json(hospitals);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

export const getHospitalById = async (req, res) => {
    try {
        const hospital = await HospitalService.getHospitalById(req.params.hospitalId);
        res.status(HttpStatus.OK).json(hospital);
    } catch (error) {
        res.status(HttpStatus.NOT_FOUND).json({ error: error.message });
    }
};

export const updateHospitalById = async (req, res) => {
    try {
        const updatedHospital = await HospitalService.updateHospitalById(req.params.hospitalId, req.body);
        res.status(HttpStatus.OK).json(updatedHospital);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

export const deleteHospitalById = async (req, res) => {
    try {
        const deletedHospital = await HospitalService.deleteHospitalById(req.params.hospitalId);
        res.status(HttpStatus.OK).json(deletedHospital);
    } catch (error) {
        res.status(HttpStatus.NOT_FOUND).json({ error: error.message });
    }
};
