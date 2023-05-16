interface ILinkedList<T> {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
  printList(): void;
}

type NodeType<T> = {
  value: T;
  next: NodeType<T> | null;
};

class LinkedList<T> implements ILinkedList<T> {
  private head: NodeType<T> | null = null;
  private tail: NodeType<T> | null = null;
  private count = 0;

  get length() {
    return this.count;
  }
  append(item: T) {
    const node: NodeType<T> = {
      value: item,
      next: null,
    };
    if (!this.tail && !this.head) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail && (this.tail.next = node);
      this.tail = node;
    }
    this.count++;
  }

  prepend(item: T): void {
    const node: NodeType<T> = {
      value: item,
      next: null,
    };
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.count++;
  }

  get(index: number): T | undefined {
    if (index < 0 || index > this.count) {
      return undefined;
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode?.next as NodeType<T>;
    }
    return currentNode?.value;
  }

  insertAt(item: T, index: number): void {
    const node: NodeType<T> = {
      value: item,
      next: null,
    };
    if (index < 0 || index > this.length) {
      return;
    }
    if (index === 0) {
      this.prepend(item);
      return;
    }
    if (index === this.length) {
      this.append(item);
      return;
    }
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode?.next as NodeType<T>;
    }
    node.next = currentNode?.next as NodeType<T>;
    if (currentNode) {
      currentNode.next = node as NodeType<T>;
    }

    this.count++;
  }

  remove(item: T): T | undefined {
    if (!this.head) {
      return undefined;
    }

    if (this.head.value === item) {
      const value = this.head.value;
      this.head = this.head.next;
      this.count--;
      return value;
    }

    let prevNode = this.head;
    let currentNode = this.head.next;

    for (let i = 0; i < this.count; i++) {
      if (currentNode?.value === item) {
        if (currentNode === this.tail) {
          this.tail = prevNode;
          this.count--;
          return this.tail.value;
        }
        const deletedNode = currentNode;
        prevNode.next = currentNode.next;
        deletedNode.next = null;
        this.count--;
        return deletedNode.value;
      }
    }
    return undefined;
  }

  removeAt(index: number): T | undefined {
    if (index < 0 || index > this.count) {
      return undefined;
    }

    if (index === 0) {
      const nextNode = this.head?.next;
      this.head && (this.head.next = null);
      this.head = nextNode as NodeType<T>;
      return this.head?.value;
    }

    let prevNode = this.head;
    let currNode = prevNode?.next;

    for (let i = 0; i < index - 1 && currNode; i++) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (!currNode) {
      return undefined;
    }

    if (currNode === this.tail) {
      this.tail = prevNode;
      prevNode?.next && (prevNode.next = null);
      return this.tail?.value;
    } else {
      prevNode?.next && (prevNode.next = currNode.next);
      currNode.next = null;
      return currNode.value;
    }
  }

  printList(): void {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const list = new LinkedList<string>();

for (let i = 0; i < 10; i++) {
  const letter = String.fromCharCode("a".charCodeAt(0) + i);
  list.append(letter);
}

console.log(list.removeAt(5));

list.printList();
