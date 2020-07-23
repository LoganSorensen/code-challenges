function removeKthLinkedListNode(head, k) {
  let current = head;
  let length = 0;

  while (current !== null) {
    current = current.next;
    length++;
  }

  if (k > length) {
    return head;
  }

  current = head;
  const position = length - k;
  let i = 0;

  if (position === 0) {
    head = head.next;
  }

  while (i < position - 1) {
    current = current.next;
    i++;
  }

  current.next = current.next.next;
  return head;
}
