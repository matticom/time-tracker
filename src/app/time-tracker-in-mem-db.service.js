"use strict";
var TimeTrackerInMemDbService = (function () {
    function TimeTrackerInMemDbService() {
    }
    TimeTrackerInMemDbService.prototype.createDb = function () {
        var times = [
            { id: 1,
                project: 'project1',
                employee: 'Anton',
                start: '2017-11-29T03:57:00.000Z',
                end: '2017-11-29T03:57:00.000Z',
                breakLength: '45',
                activities: 'Coding'
            },
            { id: 2,
                project: 'project3',
                employee: 'Boris',
                start: '2016-11-27T10:11:00.000Z',
                end: '2016-11-29T21:57:00.000Z',
                breakLength: '30',
                activities: 'Chair assembling'
            },
            { id: 3,
                project: 'project3',
                employee: 'Cecil',
                start: '2015-11-29T14:57:00.000Z',
                end: '2015-11-29T21:57:00.000Z',
                breakLength: '36',
                activities: 'Sleeping'
            },
            { id: 4,
                project: 'project3',
                employee: 'Boris',
                start: '2014-03-03T03:03:00.000Z',
                end: '2014-03-03T21:57:00.000Z',
                breakLength: '45',
                activities: 'Web Surfing'
            },
            { id: 5,
                project: 'project6',
                employee: 'Boris',
                start: '2015-12-24T23:59:00.000Z',
                end: '2015-12-25T08:57:00.000Z',
                breakLength: '34',
                activities: 'Web Surfing'
            },
            { id: 6,
                project: 'project34',
                employee: 'Klaus',
                start: '2016-07-23T06:43:54.654Z',
                end: '2016-07-23T14:34:43.345Z',
                breakLength: '25',
                activities: 'Web Surfing'
            },
            { id: 7,
                project: 'project44',
                employee: 'martin',
                start: '2016-01-31T12:45:23.000Z',
                end: '2016-01-31T20:34:46.000Z',
                breakLength: '47',
                activities: 'Web Surfing'
            },
        ];
        return { times: times };
    };
    return TimeTrackerInMemDbService;
}());
exports.TimeTrackerInMemDbService = TimeTrackerInMemDbService;
//# sourceMappingURL=time-tracker-in-mem-db.service.js.map