import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDb = async (password: string, studentData: TStudent) => {
  //   create a user object
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_pass as string);
  userData.role = 'student';
  //set manually generated id
  userData.id = '203020001';

  const newUser = await User.create(userData);
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await Student.create(studentData);
    return newStudent;
  }

  return newUser;
};

export const UserService = {
  createStudentIntoDb,
};
