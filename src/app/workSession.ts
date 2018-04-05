export class WorkSession {
  constructor(
    public id: number,
    public employee: string,
    public project: string,
    public start: string,
    public end: string,
    public breakLength: number,
    public activities: string,
  ) {}

  toString(): string {
    return "[Worksession: id = " + this.id
      + " Employee = " + this.employee
      + " Project = " + this.project
      + " StartDate = " + this.start
      + " EndDate = " + this.end
      + " BreakLength = " + this.breakLength
      + " Activities = " + this.activities
      + " ]";
  }

  toObject(): Object {
    return {
      id: this.id.toString(),
      employee: this.employee,
      project: this.project,
      start: new Date(this.start).toISOString(),
      end: new Date(this.end).toISOString(),
      break: this.breakLength.toString(),
      activies: this.activities
    };
  }
}
