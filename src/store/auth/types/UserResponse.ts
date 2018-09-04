export interface UserResponse {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
  email: string;
  emailVerified: boolean;
  phoneNumber: string | null;
  isAnonymous: boolean;
  lastLoginAt: string;
  createdAt: string;
}
