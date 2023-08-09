export interface IRegistrationBody {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  password: string;
  admin?: number;
  vendor?: number;
}
