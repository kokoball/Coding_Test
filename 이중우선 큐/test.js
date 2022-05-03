function DupQueue() {
  this.queue = [];
}
DupQueue.prototype.command = function (cmd) {
  var self = this;
  var cmd_line = String(cmd).split(" ");
  if ("I" == cmd_line[0]) {
    var value = parseInt(cmd_line[1]);
    if (this.empty()) {
      this.queue.push(value);
    } else if (value < this.queue[0]) {
      this.queue.unshift(value);
    } else if (value > this.queue[this.queue.length - 1]) {
      this.queue.push(value);
    } else {
      for (var i = 0; i < this.queue.length; i++) {
        if (this.queue[i] > value) {
          this.queue.splice(i, 0, value);
          break;
        }
      }
    }
  } else if ("D" == cmd_line[0]) {
    if ("1" == cmd_line[1]) {
      this.queue.pop();
    } else {
      this.queue.shift();
    }
  }
  //console.log(cmd, this.queue);
};
DupQueue.prototype.empty = function () {
  return !!(this.queue.length == 0);
};
DupQueue.prototype.first = function () {
  return this.queue[0];
};
DupQueue.prototype.last = function () {
  return this.queue[this.queue.length - 1];
};

function solution(values) {
  var dq = new DupQueue();
  values.forEach((cmd) => dq.command(cmd));
  //console.log(dq.queue);
  return dq.empty() ? [0, 0] : [dq.last(), dq.first()];
}

const operations = ["I 16", "D 1"];

console.log(solution(operations));
