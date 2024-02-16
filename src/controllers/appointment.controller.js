import HttpStatus from 'http-status-codes';
import * as AppointmentService from '../services/appointment.service';

export const createAppointment = async (req, res) => {
    try {
        const newAppointment = await AppointmentService.createAppointment(req.body);
        res.status(HttpStatus.CREATED).json(newAppointment);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

export const getAllAppointments = async (req, res) => {
    try {
        const appointments = await AppointmentService.getAllAppointments();
        res.status(HttpStatus.OK).json(appointments);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

export const getAppointmentById = async (req, res) => {
    try {
        const appointment = await AppointmentService.getAppointmentById(req.params.appointmentId);
        res.status(HttpStatus.OK).json(appointment);
    } catch (error) {
        res.status(HttpStatus.NOT_FOUND).json({ error: error.message });
    }
};

export const updateAppointmentById = async (req, res) => {
    try {
        const updatedAppointment = await AppointmentService.updateAppointmentById(req.params.appointmentId, req.body);
        res.status(HttpStatus.OK).json(updatedAppointment);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

export const getTotalCountByDoctor = async (req, res) => {
    try {
        const totalCountByDoctor = await AppointmentService.getTotalCountAndAppointmentsByDoctor();
        res.status(HttpStatus.OK).json(totalCountByDoctor);
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
};

export const getCountByDoctor = async (req, res) => {
    try {
        const { doctorId } = req.params;
        const count = await AppointmentService.getCountByDoctor(doctorId);
        res.status(HttpStatus.OK).json({ count });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

export const deleteAppointmentById = async (req, res) => {
    try {
        const deletedAppointment = await AppointmentService.deleteAppointmentById(req.params.appointmentId);
        res.status(HttpStatus.OK).json(deletedAppointment);
    } catch (error) {
        res.status(HttpStatus.NOT_FOUND).json({ error: error.message });
    }
};
