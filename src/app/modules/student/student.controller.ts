import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDb();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Students are retieved successfully',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const studentId = req.params.studentId;

  const result = await StudentServices.getSingleStudentFromBd(studentId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student is retieved successfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const studentId = req.params.studentId;

  const result = await StudentServices.deleteStudentFromDb(studentId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student is deleted successfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
