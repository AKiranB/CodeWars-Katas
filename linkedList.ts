interface ILinkedList<T> {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
  getHead(): T | undefined;
  getTail(): T | undefined;
  printList(): void;
}

type NodeType<T> = {
  value: T;
  next: NodeType<T> | null;
};

export default class LinkedList<T> implements ILinkedList<T> {
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
    if (index < 1 || index > this.count) {
      return undefined;
    }

    let currentNode = this.head;

    for (let i = 1; i < index; i++) {
      currentNode = currentNode?.next as NodeType<T>;
    }
    return currentNode?.value;
  }

  getHead(): T | undefined {
    return this.head?.value;
  }

  getTail(): T | undefined {
    return this.tail?.value;
  }

  insertAt(item: T, index: number): void {
    const node: NodeType<T> = {
      value: item,
      next: null,
    };
    if (index < 1 || index > this.length) {
      return;
    }
    if (index === 1) {
      this.prepend(item);
      return;
    }
    if (index === this.length) {
      this.append(item);
      return;
    }
    let currentNode = this.head;
    for (let i = 1; i < index - 1; i++) {
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

    for (let i = 0; i < this.count - 1; i++) {
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
    if (index < 1 || index > this.count) {
      return undefined;
    }

    if (index === 1) {
      const nextNode = this.head?.next;
      const value = this.head?.value;
      this.head && (this.head.next = null);
      this.head = nextNode as NodeType<T>;
      return value;
    }
    let prevNode = this.head;
    let nodeToBeDeleted = prevNode?.next;
    for (let i = 1; i < index - 1; i++) {
      //@ts-ignore
      prevNode = nodeToBeDeleted;
      //@ts-ignore
      nodeToBeDeleted = nodeToBeDeleted.next;
    }

    if (!nodeToBeDeleted) {
      return undefined;
    }
    if (nodeToBeDeleted === this.tail) {
      const value = this.tail.value;
      this.tail = prevNode;
      prevNode?.next && (prevNode.next = null);
      return value;
    } else {
      const value = nodeToBeDeleted.value;
      prevNode?.next && (prevNode.next = nodeToBeDeleted.next);
      return value;
    }
  }

  printList(): void {
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next;
    }
  }
}

const list = new LinkedList<number>();

const node1 = 42;
const node2 = 99;
list.append(node1);
list.append(node2);

console.log(list.get(1));
console.log(list.removeAt(2));
