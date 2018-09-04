import { UserResponse } from './../types/UserResponse';
import { User } from '../types/User';

export const userResponseMock: UserResponse = {
  uid: 'a1WxXtgeg323',
  email: 'achim.waldache@web.de',
  emailVerified: true,
  displayName: 'Achim Waldee',
  photoURL: null,
  phoneNumber: null,
  isAnonymous: false,
  lastLoginAt: '1',
  createdAt: '1',
};

export const userMock: User = {
  ...userResponseMock,
  firstname: 'Achim',
  lastname: 'Waldachee',
  nickname: 'Achi',
}
