/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

export class Solution {
    /**
     * @param intervals: an array of meeting time intervals
     * @return: the minimum number of conference rooms required
     */
    minMeetingRooms(intervals) {
        // Write your code here
        let starts = [];
        let ends = [];
        for (let i = 0; i < intervals.length; i++) {
            starts.push(intervals[i].start);
            ends.push(intervals[i].end);
        }
        starts.sort((a, b) => a - b);
        ends.sort((a, b) => a - b);
        console.log("starts")
        console.log(starts);
        console.log("ends")
        console.log(ends);
        let count = 0;
        let maxCount = 0;
        let start = 0;
        let end = 0;
        while (end < ends.length) {
            if (start < starts.length && starts[start] < ends[end]) {
                count += 1;
                maxCount = Math.max(maxCount, count);
                console.log("count");
                console.log(count);
                start += 1;
            }
            else {
                count -= 1;
                end += 1;
            }
        }
        return maxCount;
    }
}