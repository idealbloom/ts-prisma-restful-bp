// version 0.1.2 2021-12-28: accessToken => token으로 명칭 변경
// version 0.1.3 2022-01-04: INVALIDSTATUS 추가
import prisma from '../prisma';

const IBErrors = {
  SUCCESS: {
    IBcode: '1000',
    IBmessage: 'Success',
    IBdetail: '',
    IBparams: {},
  },
  TOKENEXPIRED: {
    IBcode: '1001',
    IBmessage: 'token is expired',
    IBdetail: '',
    IBparams: {},
  },
  JWTERROR: {
    IBcode: '1002',
    IBmessage: 'token error',
    IBdetail: '',
    IBparams: {},
  },
  NOAUTHTOKEN: {
    IBcode: '1003',
    IBmessage: 'No auth Token',
    IBdetail: '',
    IBparams: {},
  },
  TOKENNOTEXPIRED: {
    IBcode: '1004',
    IBmessage: 'token is not expired yet',
    IBdetail: '',
    IBparams: {},
  },
  NOTREFRESHTOKEN: {
    IBcode: '1004',
    IBmessage: 'Not a refreshToken',
    IBdetail: '',
    IBparams: {},
  },
  NOTAUTHORIZED: {
    IBcode: '1005',
    IBmessage: '해당 계정으로 접근할수 없는 권한의 기능입니다.',
    IBdetail: '',
    IBparams: {},
  },
  KAKAOTOKENERROR: {
    // social token
    IBcode: '1101',
    IBmessage: 'From kakao auth message',
    IBdetail: '',
    IBparams: {},
  },
  DBTRANSACTIONERROR: {
    IBcode: '2000',
    IBmessage: 'DB transactin Error',
    IBdetail: '',
    IBparams: {},
  },
  NOTEXISTDATA: {
    IBcode: '2001',
    IBmessage: 'DB에서 데이터를 찾을 수 없습니다.',
    IBdetail: '',
    IBparams: {},
  },
  NOTMATCHEDDATA: {
    IBcode: '2002',
    IBmessage: 'DB 데이터와 값이 일치하지 않습니다',
    IBdetail: '',
    IBparams: {},
  },

  DUPLICATEDDATA: {
    IBcode: '2003',
    IBmessage: 'DB 데이터에 중복된 값이 존재합니다.',
    IBdetail: '',
    IBparams: {},
  },
  EXPIREDDATA: {
    IBcode: '2004',
    IBmessage: 'DB 데이터가 만료되었습니다.',
    IBdetail: '',
    IBparams: {},
  },
  INVALIDSTATUS: {
    IBcode: '2005',
    IBmessage: 'DB값이 유효하지 않은 상태입니다.',
    IBdetail: '',
    IBparams: {},
  },
  INVALIDPARAMS: {
    IBcode: '3001',
    IBmessage: '올바르지 않은 파라미터 값 입니다.',
    IBdetail: '',
    IBparams: {},
  },
  UNEXPECTED: {
    IBcode: '5000',
    IBmessage: '예기치 못한 에러가 발생했습니다.',
    IBdetail: '',
    IBparams: {},
  },
  EXTERNALAPI: {
    IBcode: '6000',
    IBmessage: '외부 API와 관련한 문제가 발생했습니다.',
    IBdetail: '',
    IBparams: {},
  },
};

export default {
  IBErrors,
  prisma,
};
