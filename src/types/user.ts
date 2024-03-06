export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export const mockUser: User = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@test.com',
  phone: '1234567890',
  password: 'password',
};
