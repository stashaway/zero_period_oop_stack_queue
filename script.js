


function queue(){
    //queues are FIFO
    //queues are LILO
    this.data = [];
    this.add = function(item){
        //adds an item to the queue data, returns the length of the data
        return this.data.push(item)
    };
    this.remove = function(){
        //removes an item from the queue and returns it
        return this.data.shift();
    };
    this.get_length = function(){
        //returns the length of the queue's data
        return this.data.length;
    };
    this.remove_all = function(){
        //gets all items from the queue data, clears that data, and then returns the data that was there
        //return the items in order of queue
        var new_array=this.get_all();
        this.data=[];
        return new_array;
    };
    this.get_all = function() {
        //return all items from the queue in queue order
        var new_array = [];
        for (var i = 0; i < this.data.length; i++) {
            new_array.push(this.data[i]);
        }
        return new_array;
    }
}


/*end queue*/

function stack(){
    //stacks are FILO
    //stacks are LIFO
    this.data = [];
    this.add = function(item){
        //add an item to the stack
        return this.data.push(item)
    };
    this.remove = function(){
        //remove an item from the stack and return it
        return this.data.pop();
    };
    this.get_length = function(){
        //return the length of the stack
        return this.data.length;
    };
    this.remove_all = function(){
        //return all items from the stack in stack order, and then clear the data
        var new_array=this.get_all();
        this.data=[];
        return new_array;
    };
    this.get_all = function(){
        //return all items from the stack in stack order
        var new_array = [];
        for (var i = 0; i < this.data.length; i++) {
            new_array.push(this.data[i]);
        }
        return new_array;
    }
}
/* begin stack test */
var new_stack = new stack();
new_stack.add(5);
new_stack.add(2);
new_stack.add(7);
console.log(new_stack.get_all()); //should return an array with 5, 2, 7
console.log(new_stack.remove()); //should return 7
console.log(new_stack.get_all()); //should return an array with 5, 2
new_stack.add(8);
console.log(new_stack.get_length()); //should return 3
console.log(new_stack.remove()); //should return 8
console.log(new_stack.remove()); //should return 2
console.log(new_stack.remove()); //should return 5
console.log(new_stack.get_length()); //should return 0
console.log(new_stack.remove()); //should return false

/* begin queue test */
console.log('queue test');
var new_queue = new queue();
new_queue.add(5);
new_queue.add(2);
new_queue.add(7);
console.log(new_queue.get_all()); //should return an array with 5, 2, 7
console.log(new_queue.remove()); //should return 5
console.log(new_queue.get_all()); //should return an array with 2, 7
new_queue.add(8);
console.log(new_queue.get_length()); //should return 3
console.log(new_queue.remove()); //should return 2
console.log(new_queue.remove()); //should return 7
console.log(new_queue.remove()); //should return 8
console.log(new_queue.get_length()); //should return 0
console.log(new_queue.remove()); //should return false





