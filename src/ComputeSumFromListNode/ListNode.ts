export class ListNode {
  value: number;
  next: ListNode | null;
  constructor(value?: number, next?: ListNode) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}
