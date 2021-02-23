var findDuplicate = function(nums) {
    let slowPointer = nums[0], fastPointer = nums[0];
    
    slowPointer = nums[slowPointer]
    fastPointer = nums[nums[fastPointer]]
    
    while (slowPointer != fastPointer) {
        slowPointer = nums[slowPointer]
        fastPointer = nums[nums[fastPointer]]
    }
    
    let aPointer = nums[0], bPointer = slowPointer;
    
    while (aPointer != bPointer) {
        aPointer  = nums[aPointer]
        bPointer = nums[bPointer]
    }
    return aPointer
};