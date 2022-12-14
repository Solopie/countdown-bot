const moment = require('moment');

const curTime = () => {
    const endTime = moment("2022-12-04 13:00+00:00"); // Start of HTB Event
    const currentTime = moment();
    const diffTime = endTime.valueOf() - currentTime.valueOf();

    if (diffTime < 0) {
        result = "Event has ended!";
        return result;
    }

    const duration = moment.duration(diffTime, 'milliseconds');
    let result = "";
    if (duration.hours() >= 1) {
        result = ('00' + duration.asHours()).slice(-2) + " hours";
    } else if (duration.asHours() == 0) {
        // Round down minutes
        result = ('00' + ((duration.minutes() / 10) * 10)).slice(-2) + " minutes";
    } else if (duration.minutes() < 10) {
        result = "Less than 10 minutes remaining!"
    } else {
        result = "Event has ended!"
    }
    return result;
}

module.exports = {
    curTime
}
