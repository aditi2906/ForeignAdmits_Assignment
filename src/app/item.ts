import { Time } from "@angular/common";
export interface Task {
  description: string;
  date: Date;
  time: Time;
  done: boolean;
}
