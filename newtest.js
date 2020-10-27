function sum(a, ...args) {
    let res = 0;
    function() {
        if (args.length) { 
            res += sum(args);
        }        
    }
  
}

console.log(sum(1)(2)(5));
