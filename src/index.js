module.exports = function check(str, bracketsConfig) {
 for(let i=0;i<bracketsConfig.length;){
let strOff=bracketsConfig[i].join("");
if(str.includes(strOff)){
  str=str.replace(strOff,"");
  i=0
}
else{
  i++
}
 }
 return str.length==0?true:false
}
