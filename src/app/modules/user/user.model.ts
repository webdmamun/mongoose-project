import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
      required: true,
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      required: true,
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// pre save middleware /  hook : will work on create() save()
userSchema.pre('save', async function (next) {
  // console.log(this, 'pre save middleware');
  // hasing password and save into db
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // this refering current proccessing document
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// set "" after saving password
userSchema.post('save', function (doc, next) {
  doc.password = '';

  next();
});

export const User = model<TUser>('Users', userSchema);
