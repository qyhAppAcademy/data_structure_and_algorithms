var mergeKLists = function (lists) {

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
    return head.next;
}