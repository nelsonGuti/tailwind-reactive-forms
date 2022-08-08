export class Employee {
  id = '';
  name = '';
  email = '';
  isActive = true;
  position = '';
  vacationsDaysUsed = 0;
  vacationDaysTotal = 12;

  get vacationDaysLeft() {
    return this.vacationDaysTotal - this.vacationsDaysUsed;
  }

  constructor(params?: any) {
    if (params) {
      Object.assign(this, params);
    }
  }
}
