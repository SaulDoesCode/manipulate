var OverrideFuncton = function (funcName, Func, ContextObject) {
  "use strict";
   var err = msg => console.error(msg);
   if(arguments.length >= 3) {
     if(typeof funcName !== "string") {
       err("invalid funcName -> ensure it's a string");
       return;
     }
     if(typeof func !== 'function') {
        err("invalid Func -> ensure it it's a function");
       return;
     }
     if(toString.call(ContextObject) !== '[object Object]') {
       err("invalid ContextObject -> ensure it it's an Object");
       return;
     }
     var namespaces = funcName.split(".");
     var func = namespaces.pop();
     var i = 0;
     for(i in namespaces) ContextObject = ContextObject[namespaces[i]];
     ContextObject[func] = Func;
   } else {
     console.error("OverrideFuncton invalid -> Missing Params");
   }
}
