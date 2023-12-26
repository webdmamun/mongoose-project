import { UserService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  const result = await UserService.createStudentIntoDb(password, studentData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student Created Successfully',
    data: result,
  });

  // it wil call service function to send this data.
});

export const UserController = {
  createStudent,
};
