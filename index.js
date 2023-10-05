import{hello} from "./src/helloworld.js";
console.clear();
console.log(hello());

console.log('brian')

const test='brian';

console.log(`'brian'${test}`);

const arreglo=[1,2,3,4,5];

console.log(arreglo);

console.log(arreglo[0]);

const objeto = {
    name:'BMW',
    apellido: {
        name:'ford'
    }
};

const functTest = () =>{
    console.log('hello wolrd')
}

const cond = false;

cond==true ? console.log('true') : console.log('false')

functTest();
console.log(objeto.apellido.name);
