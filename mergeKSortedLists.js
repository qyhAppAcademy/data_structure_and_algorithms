var mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null;
    }
    let steps = 1;
    while (steps < lists.length) {
        for (let i = 0; i < lists.length; i += steps * 2) {
            if (i + steps < lists.length) {
                lists[i] = mergeTwoLists(lists[i], lists[i + steps]);
            }
        }
        steps *= 2;
    }
    return lists[0];
};

const mergeTwoLists = (list1, list2) => {
    let p1 = list1;
    let p2 = list2;
    let prev = new ListNode();
    let head = prev;
    while (p1 && p2) {
        if (p1.val <= p2.val) {
            prev.next = p1;
            p1 = p1.next;
        }
        else {
            prev.next = p2;
            p2 = p2.next;
        }
        prev = prev.next;
    }
    if (p1) {
        prev.next = p1;
    }
    else {
        prev.next = p2;
    }
    return head.next;
}