const str = "nana";
const myMap = new Map();
// myMap.set("a","1");
for (let i of str) {
//   console.log(i);
  if(myMap.has(i)){
// console.log(myMap.has(i));
// let temp=myMap.get(i);
myMap.set(i, myMap.get(i) + 1);
  }else{
  myMap.set(i, 1);
  }

}
// console.log("map",myMap);
for(let [key,value] of myMap){
    console.log(`Key:${key}  value:${value}`);
}