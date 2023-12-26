import express from 'express';
import { UserController } from './user.controller';
import { createStudentValidationSchema } from '../student/student.validation';
import validateRequest from '../../middlewares/validateRequest';

const route = express.Router();

route.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  UserController.createStudent,
);

export const userRouters = route;
