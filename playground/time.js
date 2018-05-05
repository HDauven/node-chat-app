var moment = require('moment');

var date = new Date();
console.log(date.getMonth());

var date = moment();
date.add(100, 'years').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));

var createdAt = (123456);
var oldDate = moment(createdAt);
console.log(oldDate.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
