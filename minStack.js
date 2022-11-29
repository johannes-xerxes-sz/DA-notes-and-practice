/**
 * initialize your data structure here.
 */
 var MinStack = function() {
     this.stack = [],
     this.length = 0;
 };

 MinStack.prototype.push = function(val) {
     this.stack.push(val);
     this.length++
 };

 /**
  * @return {void}
  */
 MinStack.prototype.pop = function() {
     this.stack.pop()
     this.length--
 };

 /**
  * @return {number}
  */
 MinStack.prototype.top = function() {
     return this.stack[this.length -1]
 };

 /**
  * @return {number}
  */
 MinStack.prototype.getMin = function() {
     let sorted = this.stack.sort((a,b)=>{return a-b})
     console.log('here',sorted)
     return sorted[0]

 };
 
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
