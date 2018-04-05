"use strict";
var WorkSession = (function () {
    function WorkSession(id, employee, project, start, end, breakLength, activities) {
        this.id = id;
        this.employee = employee;
        this.project = project;
        this.start = start;
        this.end = end;
        this.breakLength = breakLength;
        this.activities = activities;
    }
    WorkSession.prototype.toString = function () {
        return "[Worksession: id = " + this.id
            + " Employee = " + this.employee
            + " Project = " + this.project
            + " StartDate = " + this.start
            + " EndDate = " + this.end
            + " BreakLength = " + this.breakLength
            + " Activities = " + this.activities
            + " ]";
    };
    WorkSession.prototype.toObject = function () {
        return {
            id: this.id.toString(),
            employee: this.employee,
            project: this.project,
            start: new Date(this.start).toISOString(),
            end: new Date(this.end).toISOString(),
            break: this.breakLength.toString(),
            activies: this.activities
        };
    };
    return WorkSession;
}());
exports.WorkSession = WorkSession;
//# sourceMappingURL=workSession.js.map