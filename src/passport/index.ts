import { PassportStatic } from 'passport';
import local from './localStrategy';

const passportConfig: (passport: PassportStatic) => void = (
  passport: PassportStatic,
) => {
  local(passport);
};

export default passportConfig;
