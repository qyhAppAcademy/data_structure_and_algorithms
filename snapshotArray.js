class SnapshotArray {
    // Constructor
    constructor(length) {
        this.snapID = 0;
        this.nodeValue = {};
        this.nodeValue[0] = {};
        this.ncount = length;
    }

    // Function setValue sets the value at a given index idx to val.
    setValue(idx, val) {
        if (idx < this.ncount) {
            this.nodeValue[this.snapID][idx] = val;
        }
    }

    // This function takes no parameters and returns the snapID.
    // snapID is the number of times that the snapshot() function was called minus 1.
    snapshot() {

    }

    // Function getValue returns the value at the index idx with the given snapID.
    getValue(idx, snapID) {

    }
}