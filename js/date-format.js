/*! dateFormat.js by Zane Hannan AU
 *  github.com/ZaneHannanAU/mini-client-tools
!*/
var dateFormat = function dateFormat() {
	"use strict"
	console.time('date formatting')

	var time = document.getElementsByTagName('time')
	// Get all time elements
	var times = []

	const localeFormat = // customisable
	[	'en-AU'
	,	'en-GB'
	,	'en-US'
	,	'en'  ]
	const dateTimeFormat = // customisable
	{	day: '2-digit'
	,	hour: '2-digit'
	,	minute: '2-digit'
	,	month: 'short'
	,	weekday: 'short'
	,	year: '2-digit'
	,	hour12: false
	// ,	timeZoneName: 'long' // Unneeded
	}
	const dateTimeFormatting = new Intl.DateTimeFormat(
		localeFormat
	,	dateTimeFormat
	).format || function (time) {
		return time.toLocaleDateString(
			localeFormat
		,	dateTimeFormat
		)
	}
	const dateTimeFormatter = function dateTimeFormatter(time) {
		return dateTimeFormatting(new Date(time))
	}

	for (var i = 0; i < time.length; i++) {
		// Time is formatted in UTC in the `datetime' set.
		// This sets the hover text to be that of `datetime'
		time[i].title = time[i].getAttribute('datetime')
		times[i] =
		{	local: undefined
		,	utc: time[i].title
		};
		time[i].textContent = dateTimeFormatter(time[i].title)
		// Sets it to the local time zone or format.
		times[i].local = time[i].textContent;
		// log value,	even though it's unneeded now
		time[i].translate = 'no'
		// No need for translation.
	}
	if (console.table) {
		console.table(times);
	} else {
		console.log(times);
	}
	console.timeEnd('date formatting')
	return times
};
window.addEventListener('load', dateFormat)
