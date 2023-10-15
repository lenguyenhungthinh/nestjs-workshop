import { EntitySchema } from 'typeorm';
import { BaseSchema } from './base.schema';
import { LoginUser } from 'src/shared/domain/entity/login-user.entity';

const LoginUserSchema = new EntitySchema<LoginUser>({
  name: 'LoginUser',
  tableName: 'LOGIN_USER',
  target: LoginUser,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: 'increment',
    },
    email: {
      type: String,
    },
    displayName: {
      type: String,
    },
    isValid: {
      type: Boolean,
      name: 'is_valid',
    },
    ...BaseSchema,
  },
});

export default LoginUserSchema;
