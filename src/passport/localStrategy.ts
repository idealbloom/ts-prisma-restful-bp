import { PassportStatic } from 'passport';
import passportLocal from 'passport-local';

import { isEmpty, isNull } from 'lodash';
import bcrypt from 'bcrypt';
import prisma from '../prisma';

const LocalStrategy = passportLocal.Strategy;

export default async (passport: PassportStatic) => {
  const local = new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await prisma.user.findFirst({
          where: {
            email,
          },
        });

        if (isEmpty(user) || isNull(user)) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        const compareResult = await bcrypt.compare(password, user.pw);
        if (!compareResult) {
          return done(null, false, {
            message: 'Incorrect password.',
          });
        }
        return done(null, user);
      } catch (error) {
        console.error(error);
        return done(error);
      }
    },
  );
  passport.use(local);
};
