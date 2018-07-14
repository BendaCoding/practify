export const userResponseMock: IUserResponse = {
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

export const userMock: IUser = {
  ...userResponseMock,
  firstname: 'Achim',
  lastname: 'Waldachee',
  nickname: 'Achi',
}
