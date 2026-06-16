console.log("A");
console.log("B");
console.log("C");
// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{ 
//         console.log("Hi")
//     },0)
//     setTimeout(()=>{ // what ever we write in time out it is store in the queue. Then the next line code will be executed and then
//         console.log("Done")//the  element stored in the queue were executed
//     },2000)
//     console.log("D");
    //Synchronize code
    // const success = true;
    // if(success){
    //     console.log("Done");
    // }
    // else{
    //     console.log("No");
    // }
// })
// promise.then(res=>{console.log(res)}).catch(err=>{console.log(err)})

console.log(1);
console.log(2);
console.log("Hello");

function example(){
    console.log("Hi");
}
const example1=()=>{
    const a=1;
    const b=2;
    console.log(1+2);
}
setTimeout(example(),1000);
setTimeout(example1(),2000);