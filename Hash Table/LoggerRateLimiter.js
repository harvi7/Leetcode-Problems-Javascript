var Logger = function() {
    this.msgDict = new Map();
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (!this.msgDict.has(message) || 10 <= timestamp - this.msgDict.get(message)) {
        this.msgDict.set(message, timestamp)
        return true
    }
    return false
};