var j = require('./emoji_strategy.json');
var fs = require('fs');

var obj = {}
var stream = fs.createWriteStream("e.json");
stream.once('open', function(fd) {
  for (var key in j) {
    // console.log(j[key])
    thing = j[key]["unicode"];
    stream.write('"' + key + '"' + ':' + '"'+ thing+ '"' + ',');
  }
  stream.end();
});
