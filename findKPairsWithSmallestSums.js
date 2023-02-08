var kSmallestPairs = function (nums1, nums2, k) {
    const minHeap = new MinHeap();
    for (let i = 0; i < nums1.length; i++) {
        minHeap.offer([nums1[i] + nums2[0], i, 0]);
    }
    let count = 0;
    const pairs = [];
    while (minHeap.size() > 0 && count < k) {
        let [sum, i, j] = minHeap.poll();
        pairs.push([nums1[i], nums2[j]]);
        count += 1;
        if (j + 1 < nums2.length) {
            minHeap.offer([nums1[i] + nums2[j + 1], i, j + 1]);
        }
    }
    return pairs;
};