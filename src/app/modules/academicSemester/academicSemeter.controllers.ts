import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { AcademicSemesterServices } from './academicSemester.service';
import catchAsync from '../../utils/catchAsync';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Semester Created Successfully',
    data: result,
  });

  // it wil call service function to send this data.
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
