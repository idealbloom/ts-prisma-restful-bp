import bcrypt from 'bcrypt';

const genBcryptHash = (plainText: string, saltRounds: number = 10): string => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(plainText, salt);
  return hash;
};

export default genBcryptHash;
