import { Time } from "@angular/common";
export interface Item {
  description: string;
  TaskDate:Date,
  TaskTime:Time,
  done: boolean;
}
