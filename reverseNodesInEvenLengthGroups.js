var reverseEvenLengthGroups = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let l = 2;
    let n = 0;
    let node = head;
    let prev = head;
    while (node.next) {
        node = node.next;
        n += 1;
        if (n === l) {
            if (l % 2 === 0) {
                let end = node.next;
                let reverse = node.next;
                let curr = prev.next;
                while (curr != end) {
                    let currNext = curr.next;
                    curr.next = reverse;
                    reverse = curr;
                    curr = currNext;
                }
                let tmp = prev.next;
                prev.next = reverse;
                prev = tmp;
                node = prev;
            }
            else {
                prev = node;
            }
            l += 1;
            n = 0;
        }
    }
    if (n > 0 && n % 2 === 0) {
        let current = prev.next;
        let previous = null;
        while (current) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        prev.next = previous;
    }
    return head;
};