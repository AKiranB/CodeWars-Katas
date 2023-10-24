interface ILinkedList<T> {
  get length(): number;
  insertAt?(item: T, index: number): void;
  remove?(item: T): T | undefined;
  removeAt?(index: number): T | undefined;
  append?(item: T): void;
  prepend?(item: T): void;
  get?(index: number): T | undefined;
  getHead?(): T | undefined;
  getTail?(): T | undefined;
  printList?(): void;
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
      this.tail && this.tail.next === node;
      this.tail = node;
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
    if (index >= this.count || index < 0) {
      return undefined;
    }
    if (index === 0) {
      return this.head?.value;
    }
    if (index === this.count) {
      return this.tail?.value;
    }
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr?.next as NodeType<T>;
    }
    return curr?.value;
  }
}
