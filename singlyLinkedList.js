class sllNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

}
/************************************************************************/
class sll {
  constructor() {
    this.head = null;
  }
/*----------------------------------------------------------------------*/
  add(data) {
    let node = new sllNode(data);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next !== null) {
       current = current.next;
      }

      current.next = node
    }

  }
/*----------------------------------------------------------------------*/
  get(index) {
    if (index > -1) {
      let current = this.head,
          i = 0;

      while ((current !== null) && (i < index)) {
        current = current.next;
        i++;
      }

      return current !== null ? current.data : undefined;
    }

    return undefined;
  }
/*----------------------------------------------------------------------*/
  remove(index) {
    if ((this.head === null) || (index < 0)) {
      return 'Index does not exist';
    }

    if (index === 0) {
      let tempStorage = this.head.data;

      this.head = this.head.next;

      return tempStorage;
    }

//     if (index > -1) {
//       let current = this.head,
//           i = 0;

//       while ((current !== null) && (i < index)) {
//         current = current.next;
//         i++
//       }

//     }

  }
/*----------------------------------------------------------------------*/
}
