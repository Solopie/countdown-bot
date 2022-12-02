const moment = require('moment');

const curTime = () => {
    const eventTime = moment("2022-12-04 13:00+00:00"); // Start of HTB Event
    const currentTime = moment();
    const diffTime = eventTime.valueOf() - currentTime.valueOf();
    const duration = moment.duration(diffTime, 'milliseconds');
    let result = "";
    if (duration.hours() >= 1) {
        result = ('00' + duration.hours()).slice(-2) + " hours";
    } else if (duration.hours() == 0) {
        // Round down minutes
        result = ('00' + ((duration.minutes() / 10) * 10)).slice(-2) + " minutes";
    } else if (duration.minutes() < 10) {
        result = "Less than 10 minutes remaining!"
    } else {
        result = "Event has started!"
    }
    return result;
}

module.exports = {
    curTime
}
