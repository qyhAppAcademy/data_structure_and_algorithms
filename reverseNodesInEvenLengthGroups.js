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
                l += 1;
                node = prev;
                n = 0;
            }
            else {

            }
        }
    }
};