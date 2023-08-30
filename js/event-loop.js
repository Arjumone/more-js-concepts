function a (){
    console.log('a');
    b();
    console.log('aa');
}
function b (){
    console.log('b');
    d();
    console.log('bb');
}
function d (){
    console.log('d');
    
    console.log('dd');
}
function x (){
    console.log('x');
    y();
    console.log('xx');
}
function y (){
    console.log('y');
    z();
    console.log('yy');
}
function z (){
    console.log('z');
    console.log('zz');
};

setTimeout (() =>{
    console.log('inside timeout');
},2000);

fetch(`https//jsonplaceholder.typicode.com/toods/1`)
.then(res => res.json())
.then(json => console.log(data))

a();
x();

