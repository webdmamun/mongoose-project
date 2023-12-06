import { Student } from '../student.model';
import { TStudent } from './student.interface';

const createStudentIntoDb = async (studentData: TStudent) => {
  // const result = await StudentModel.create(studentData); //built in static method

  const student = new Student(studentData); // create an instatante
  const result = await student.save(); //built in instance method

  if (await student.isUserExist(studentData.id)) {
    throw new Error(' User Already Exists');
  }

  return result;
};

const getAllStudentsFromDb = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromBd = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDb,
  getAllStudentsFromDb,
  getSingleStudentFromBd,
};
