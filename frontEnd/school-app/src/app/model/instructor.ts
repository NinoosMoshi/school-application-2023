import { User } from "./user";

export interface Instructor {

  instructorId: number;
  firstName: string;
  lastName: string;
  summary: string;
  user: User;

}
