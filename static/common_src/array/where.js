define(function (require, exports, module) {
    /**
	 * http://www.paulfree.com/28/javascript-array-filtering/#more-28
	 * @param {Object} f lambda表达式字符串
	 * @example
	 * 		var a = [1,2,3,4,5,6,7,8,9,10];
	 * 		a.where( "( n, i ) => n % 2 == 0" ) ;// return even numbers
	 * 				 --> [2,4,6,8,10]
	 */
    Array.prototype.where = function (f) {
        var fn = f;
        // if type of parameter is string
        if (typeof f == "string")
            // try to make it into a function
            if ((fn = lambda(fn)) == null)
                // if fail, throw exception
                throw "Syntax error in lambda string: " + f;
        // initialize result array
        var res = [];
        var l = this.length;
        // set up parameters for filter function call
        var p = [0, 0, res];
        // append any pass-through parameters to parameter array
        for (var i = 1; i < arguments.length; i++) p.push(arguments[i]);
        // for each array element, pass to filter function
        for (var i = 0; i < l; i++) {
            // skip missing elements
            if (typeof this[i] == "undefined") continue;
            // param1 = array element
            p[0] = this[i];
            // param2 = current indeex
            p[1] = i;
            // call filter function. if return true, copy element to results
            if (!!fn.apply(this, p)) res.push(this[i]);
        }
        // return filtered result
        return res;
    }

    /**
	 * http://www.paulfree.com/11/javascript-lambda-expressions/
	 * @param {Object} l lambda表达式字符串
	 */
    function lambda(l) {
        var fn = l.match(/\((.*)\)\s*=>\s*(.*)/);
        var p = [];
        var b = "";
        if (fn.length > 0) fn.shift();
        if (fn.length > 0) b = fn.pop();
        if (fn.length > 0) p = fn.pop()
			.replace(/^\s*|\s(?=\s)|\s*$|,/g, '').split(' ');
        // prepend a return if not already there.
        fn = ((!/\s*return\s+/.test(b)) ? "return " : "") + b;
        p.push(fn);
        try {
            return Function.apply({}, p);
        } catch (e) {
            return null;
        }
    }
});
