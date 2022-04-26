import { PassportStatic } from 'passport';
import local from './localStrategy';
import jwt from './jwtStrategy';

const passportConfig: (passport: PassportStatic) => void = (
  passport: PassportStatic,
) => {
  local(passport);
  jwt(passport);
};

export default passportConfig;
