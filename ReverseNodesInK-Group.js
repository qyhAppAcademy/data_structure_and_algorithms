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
    return [previous, current, next];
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
    let lastCurrentPartNode;
    let lastPreviousPartNode;
    while (current && count < k) {

    }
};