import LinkedList from "../linkedList";

describe("LinkedList", () => {
  it("should create empty linked list", () => {
    const list = new LinkedList();
    expect(list).not.toBeNull();
    expect(list.getHead()).toBeUndefined();
    expect(list.getTail()).toBeUndefined();
  });
  it("should append node to linked list", () => {
    const list = new LinkedList<number>();
    const node1 = 42;
    const node2 = 99;
    list.append(node1);
    list.append(node2);
    expect(list.getHead()).toEqual(node1);
    expect(list.getTail()).toEqual(node2);
  });
  it("should prepend node to linked list", () => {
    const list = new LinkedList<number>();
    const node1 = 42;
    const node2 = 99;
    list.prepend(node1);
    list.prepend(node2);
    expect(list.getHead()).toEqual(node2);
    expect(list.getTail()).toEqual(node1);
  });
  it("should delete node by value from linked list", () => {
    const list = new LinkedList<number>();
    expect(list.removeAt(5)).toBeUndefined();
    const node1 = 42;
    const node2 = 99;
    list.append(node1);
    list.append(node2);
    expect(list.removeAt(1)).toBe(node1);
  });
  it("should delete linked list tail", () => {
    const list = new LinkedList<number>();
    const node1 = 42;
    const node2 = 99;
    list.append(node1);
    list.append(node2);
    expect(list.removeAt(1)).toBe(node1);
    // expect(list.getHead()).toBe(node2);
    expect(list.getTail()).toBe(node2);
  });
});
