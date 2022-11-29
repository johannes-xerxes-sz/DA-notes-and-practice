var messageBus = {
  subscribed : {},



  subscribe: function(topic, cb) {
    //do something w payload i.e. cb(payload)
    if (!this.subscribed[topic]) {
      this.subscribed[topic] = {};
    }
    this.subscribed[topic] = cb;
  },
  publish: function(topic, content) {
    if (!this.subscribed[topic]) {
      break; //dont know that break is correct here, could be ****return;*** instead
    }
    var cbs = this.subscribed[topic];
    for (cb in cbs) {
      var eachInList = cbs[cb];
      eachInList(content);
    }
  },
}

var tests = function() {

};
