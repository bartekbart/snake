// GLOBAL VARIABLES

// CONSTANTS

var COLS = 26;
var ROWS = 26;

//IDs
var EMPTY = 0;
var SNAKE = 1;
var FRUIT = 2;

var grid = {
    
    width: null,
    height: null,
    _grid: null,
    
    init: function(d,c,r) {
        this.width = c;
        this.height = r;
        
        this._grid = [];
        for (var x = 0; x < c; x++) {
            this._grid.push([]);
           for (var y=0; y < r; y++) {
               this._grid[x].push(d);
           }
        }
    },
    
    set: function(val, x,y) {
        this._grid[x][y] = val;
    },
    
    get: function(x,y) {
        return this._grid[x][y];
    }
    
}

var snake = {
    
    direction: null,
    last: null,
    _queue: null,
    
    init: function(d,x,y) {
        this.direction = d;
        this._queue = [];
        this.insert(x,y);
    },
    
    insert: function(x,y) {
        this._queue.unshift({x:x, y:y});
        this.last = this._queue[0];
    },
    
    remove: function() {
        return this._queue.pop();
        
    }
    
}

function setFood() {
    var empty = [];
    for (var x = 0; x < grid.width; x++){
        for (var y = 0; y < grid.height; y++) {
            
        }
    }
}

function main() {}

function init() {}

function loop() {}

function update() {}

function draw() {}

main();