import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password Must Be String',
    })
    .max(20, { message: "Password can't be more than 20 characters" })
    .optional(),
});

export const UserValidation = {
  userValidationSchema,
};
