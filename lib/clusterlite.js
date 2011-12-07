var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

module.exports.workers = 0;

var cl = function(func){
  var num_workers = numCPUs;
  if(module.exports.workers > 0){
    num_workers = module.exports.workers;
  }

  if (cluster.isMaster) {
    for (var i = 0; i < num_workers; i++) {
      cluster.fork();
    }

    cluster.on('death', function(worker) {
      cluster.fork();
    });
  } else {
    func();
  }
}


module.exports = cl

