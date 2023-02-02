const reverseNodes = (start, k) => {
    let current = start;
    let previous = null;
    let next = null;
    let index = 0;
    while (current && index < k) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        index += 1;
    }
    return [previous, current];
}

const nodesLength = (head) => {
    let current = head;
    let length = 0;
    while(current){
        current = current.next;
        length += 1;
    }
    return length;
}

var reverseKGroup = function (head, k) {
    if (!head) {
        return head;
    }

    let previous = null;
    let current = head;

    let count = 0;
    let length = nodesLength(head);

    let lastNodeOfCurrentPart;
    let lastNodeOfPreviousPart = null;

    while (current && length - count >= k) {
        lastNodeOfCurrentPart = current;
        [previous, current] = reverseNodes(current, k);
        count += k;
        if (lastNodeOfPreviousPart) {
            lastNodeOfPreviousPart.next = previous;
        }
        else {
            head = previous;
        }
        lastNodeOfPreviousPart = lastNodeOfCurrentPart;
    }
    return head;
};