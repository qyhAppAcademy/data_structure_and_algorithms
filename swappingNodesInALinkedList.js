var swapNodes = function (head, k) {
    if (!head || !head.next) {
        return head;
    }
    let front = null;
    let end = null;
    let current = head;
    let count = 1;
    while (current) {
        if (count === k) {
            front = current;
        }
        if (count === k + 1) {
            end = head;
        }
        current = current.next;
        if (end) {
            end = end.next;
        }
        count += 1;
    }
    if (count === k + 1) {
        end = head;
    }
    let tmp = front.val;
    front.val = end.val;
    end.val = tmp;
    return head;
};