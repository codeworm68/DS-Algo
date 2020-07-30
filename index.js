class Node {
  constructor(value){
    this.value = value,
    this.next = null
  }
}

class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value){
    if (index >= this.length) {
      this.append(value);
    } else if (index == 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      var temp = this.head;
      for(let i=0; i<index-1; i++){
        temp = temp.next;
      }
      console.log(temp.value);

      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;
    }
  }

  printList(){
    let array = [];
    let currentNode = this.head;
    while(currentNode != null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

}

let myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.prepend(5);
myLinkedList.insert(100, 15);
myLinkedList.printList();