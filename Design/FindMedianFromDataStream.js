var MedianFinder = function() {
    this.maxQ = new heap((a, b)=>b - a, []);
    this.minQ = new heap((a, b)=>a - b, []);
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.maxQ.size() <= 0)
        return this.maxQ.insert(num);
    
    if (this.minQ.size() <= 0) {
        if(num>=this.maxQ.top())
            return this.minQ.insert(num);
        else{
            this.maxQ.insert(num);
            this.minQ.insert(this.maxQ.extract());            
            return;
        }
    }
    
    if(num>=this.minQ.top()){
        if(this.minQ.size()<=this.maxQ.size())
            return this.minQ.insert(num);
        else{
            this.minQ.insert(num);
            this.maxQ.insert(this.minQ.extract());
            return;
        }
    }
    else {
        if (this.maxQ.size() <= this.minQ.size())
            return this.maxQ.insert(num);
        else {
            this.maxQ.insert(num);
            this.minQ.insert(this.maxQ.extract());
            return;
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.minQ.size()<= 0)
        return this.maxQ.top();
    if (this.minQ.size() == this.maxQ.size())
        return (this.minQ.top() + this.maxQ.top()) / 2;
    return this.minQ.size() > this.maxQ.size() ? this.minQ.top() : this.maxQ.top();
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
    
/*Heap Implementation JavaScript*/
let heap = function(comparator,array){
    this.ar=[...array];/*No mutation*/    
    this.comparator=comparator;//0/+ve/-ve
    
    /*build heap*/
    for(let i=parseInt((this.ar.length-1)/2);i>=0;i--){
        this.heapify(i);
    }
};
heap.prototype.heapify = function(i){
    if(i>=this.ar.length)
        return;
    let temp=i;
    if((2*i)+1<this.ar.length&&this.comparator(this.ar[(2*i)+1],this.ar[temp])<0)
        temp=(2*i)+1;
    if((2*i)+2<this.ar.length&&this.comparator(this.ar[(2*i)+2],this.ar[temp])<0)
        temp=(2*i)+2;
    
    if(temp!==i){
        /*Swap*/
        let copy=this.ar[temp];
        this.ar[temp]=this.ar[i];
        this.ar[i]=copy;
        
        this.heapify(temp);
    }
};

heap.prototype.insert = function(data){
    if(data==null)
        return false;
    this.ar.push(data);
        
    let i=this.ar.length-1;
    let parent=parseInt((i-1)/2);
    // comparator arguments should be inverted ???. Min Heap parent > child node swap heapify
    // while(parent>=0&&this.comparator(this.ar[parent],this.ar[i])<0){//Agar ye hai fir to loop mein nhi jayega
      
      while(parent>=0&&parent!=i&&this.comparator(this.ar[i],this.ar[parent])<0){
      
        this.heapify(parent);
        i=parent;
        parent=parseInt((parent-1)/2);        
    }
    return true;
};

heap.prototype.extract = function(){
    let copy=this.ar[0];
    this.ar[0]=this.ar[this.ar.length-1];
    this.ar.pop();
    this.heapify(0);
    return copy;
};
heap.prototype.size = function(){
    return this.ar.length;
};
heap.prototype.top = function(){
    return this.ar[0];
};