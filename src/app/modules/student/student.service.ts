import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromBd = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDb,
  getAllStudentsFromDb,
  getSingleStudentFromBd,
};
