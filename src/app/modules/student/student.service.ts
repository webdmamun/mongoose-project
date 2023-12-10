import { Student } from '../student.model';
import { TStudent } from './student.interface';

const createStudentIntoDb = async (studentData: TStudent) => {
  if (await Student.isUserExist(studentData.id)) {
    throw new Error(' User Already Exists');
  }
  const result = await Student.create(studentData); //built in static method

  /**
    const student = new Student(studentData); // create an instatante

  if (await student.isUserExist(studentData.id)) {
    throw new Error(' User Already Exists');
  }
  const result = await student.save(); //built in instance method
   */

  return result;
};

const getAllStudentsFromDb = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromBd = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};

const deleteStudentFromDb = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  createStudentIntoDb,
  getAllStudentsFromDb,
  getSingleStudentFromBd,
  deleteStudentFromDb,
};
