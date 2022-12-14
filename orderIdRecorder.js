/*
You run an e-commerce website and want to record the last N order ids in a log.
Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log.
  i is guaranteed to be smaller than or equal to N.

You should be as efficient with time and space as possible.
*/

var orderIdRecorder = {
  log: [],
  record: function(order_id) {
    this.log.push(order_id);
  },
  get_last: function(i) {
    if (i === undefined) {
      return this.log[this.log.length - 1]
    }
    return this.log[this.log.length - 1 - i]
  }
}
