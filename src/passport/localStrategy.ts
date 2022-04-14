import { PassportStatic } from 'passport';
import * as passportLocal from 'passport-local';
import { isEmpty, isNull } from 'lodash';
import { compare } from 'bcrypt';
import prisma from '../prisma';

const LocalStrategy = passportLocal.Strategy;

export default (passport: PassportStatic): void => {
  const local = new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done): Promise => {
      try {
        const user: {
          id: number;
          email: String;
          password: String;
          name: String;
          createdAt: Date;
          updatedAt: Date;
        } = await prisma.user.findFirst({
          where: {
            email,
          },
        });

        if (isEmpty(user) || isNull(user)) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        const compareResult: Boolean = await compare(password, user.password);
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
