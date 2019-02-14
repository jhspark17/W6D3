const followToggle = require("./follow_toggle.js");
$(() => {
  // we want to grab with jQuery the buttons we care about
  // for each of them, we want to instantiate an instance of the followToggle class
  $(".follow-toggle").each((idx, ele) => {
    new followToggle(ele);
  })
})

