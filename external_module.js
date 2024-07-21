const load=require("lodash");
let item=[1,[2,[3,4]]];
let newItem=load.flattenDeep(item);
console.log(newItem);