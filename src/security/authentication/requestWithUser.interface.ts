import { Request } from 'express';
import User from '../../api/users/entities/user.entity';

interface RequestWithUser extends Request {
  user: User;
}

export default RequestWithUser;
