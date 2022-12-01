const moment = require('moment');

const curTime = () => {
    const eventTime = moment("2022-12-02 13:00+00:00"); // Start of HTB Event
    const currentTime = moment();
    const diffTime = eventTime.valueOf() - currentTime.valueOf();
    const duration = moment.duration(diffTime, 'milliseconds');
    const result = ('00' + duration.hours()).slice(-2) + ":" + ('00' + duration.minutes()).slice(-2);
    return result;
}

module.exports = {
    curTime
}