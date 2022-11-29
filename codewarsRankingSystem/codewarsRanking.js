/*
var User = class User {} is used instead of simply 
class User {} for development with the Class in dev tools
*/
var User = class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  increaseProgress(activityRank) {
    if (activityRank === this.rank) {
      this.progress += 3;
    }
    if (activityRank === this.rank - 1) {
      this.progress += 1;
    }
    if (activityRank === this.rank - 2) {
      this.progress = this.progress;
    } else {     
      let diff = Math.abs(activityRank - this.rank);
      if (this.rank < 0) {
        if ((this.rank * 100 + this.progress + (diff * diff * 10)) > 0) {
          diff--;
        }
      }
      this.progress +=  diff * diff * 10
    }

    this.updateStats();
  }

  updateStats() {
    let isNegative = this.rank < 0;   
    if (this.progress > 100) {
      if (((this.rank * 100) + this.progress) > 0 && isNegative) {
        this.rank += Math.floor(this.progress / 100) + 1;
      } else {
        this.rank += Math.floor(this.progress / 100);
      }
      this.progress = this.progress % 100;
    }

  }

}

var u = new User()

console.log(u)

u.increaseProgress(-4)

console.log(u)

u.increaseProgress(-3)

console.log(u)

u.increaseProgress(1)

console.log(u)

u.increaseProgress(5)

console.log(u)