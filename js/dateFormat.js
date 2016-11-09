/*! dateFormat.js by Zane Hannan AU
 *  github.com/ZaneHannanAU/mini-client-tools
!*/
'use asm';
// Search `asm.js' for more
var time = document.getElementsByTagName('time')
// Get all time elements
var format = {
         day: 'numeric',
        hour: 'numeric',
      minute: 'numeric',
       month: 'long',
     weekday: 'long',
        year: 'numeric',
// timeZoneName: 'long' // Unneeded
}
var onload = function () {
 for (var i = 0; i < time.length; i++) {
  time[i].title = time[i].getAttribute('datetime')
  // This sets the hover text to be that of `datetime'
  // Time is formatted in UTC in the `datetime' set.
  time[i].textContent = new Date(time[i].title).toLocaleDateString({},format)
  // Sets it to the local time zone or format.
  time[i].translate = 'no'
  // No need for translation now.
 }
}
