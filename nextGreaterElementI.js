var nextGreaterElement = function (nums1, nums2) {
    const hashMap = {};
    for (let i = 0; i < nums2.length; i++) {
        hashMap[nums2[i]] = i;
    }
    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        let ans = -1;
        for (let j = hashMap[nums1[i]] + 1; j < nums2.length; j++) {
            if (nums1[i] < nums2[j]) {
                ans = nums2[j];
                break;
            }
        }
        result.push(ans);
    }
    return result;
};