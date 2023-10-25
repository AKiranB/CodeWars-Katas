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
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.head && (this.head.next = node);
      this.head = node;
    }
    this.count++;
  }

  prepend(item: T) {
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

  get(index: number) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }
    if (index === 0) {
      return this.head?.value;
    }
    if (index === this.count - 1) {
      return this.tail?.value;
    }
    let currValue = this.head;

    for (let i = 0; i < index; i++) {
      currValue = currValue?.next as NodeType<T>;
    }
    return currValue?.value;
  }

  getHead() {
    if (this.head) {
      return this.head.value;
    } else {
      return undefined;
    }
  }

  getTail() {
    if (this.tail) {
      return this.tail.value;
    } else {
      return undefined;
    }
  }

  insertAt(item: T, index: number) {
    const node: NodeType<T> = {
      value: item,
      next: null,
    };

    if (index < 0 || index >= this.count) {
      console.error("Please enter a valid index");
    }
    if (index === 0 && this.head) {
      node.next = this.head;
      this.head = node;
      this.count++;
    } else if (index === this.count && this.tail) {
      this.tail.next = node;
      this.tail = node;
      this.count++;
    }
    let prevValue = this.head;
    let currValue = prevValue?.next;
    for (let i = 0; i < index - 1; i++) {
      prevValue = prevValue?.next as NodeType<T>;
    }
    if (currValue && prevValue) {
      prevValue.next = node;
      node.next = currValue;
      this.count++;
    }
  }

  remove(item: T) {
    if (this.head?.value === item) {
      const value = this.head.value;
      const newHead = this.head.next;
      this.head.next = null;
      this.head = newHead;
      return value;
    }

    let prevValue = this.head;
    let currValue = prevValue?.next;
    for (let i = 0; currValue && i < this.count - 1; i++) {
      if (currValue.value === item) {
        prevValue!.next = currValue.next;
        currValue.next = null;
        return currValue.value;
      }
      prevValue = currValue;
      currValue = currValue.next;
    }
  }

  removeAt(index: number) {
    if (index === 0 && this.head) {
      const value = this.head.value;
      const newHead = this.head.next;
      this.head.next = null;
      this.head = newHead;
      return value;
    }
    let prevValue = this.head;
    let currValue = prevValue?.next;
    for (let i = 0; currValue && i < index - 1; i++) {
      prevValue = prevValue?.next as NodeType<T>;
    }
    if (currValue && prevValue) {
      prevValue!.next = currValue.next;
      currValue.next = null;
      return currValue.value;
    }
  }

  printList() {
    let value = this.head;
    for (let i = 0; i < this.count; i++) {
      console.log(value, "-->");
      value = value?.next as NodeType<T>;
    }
  }
}
