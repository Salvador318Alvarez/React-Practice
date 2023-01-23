import Billboard from "../components/Billboard";

const Home = () => {

    const person = {
        name:'yoshi',
        age:30,
        color: 'green'
    }

    const {name, age, color} = person
    //grabs those values and puts it in variable name and age

    const nums = [1,3,5,7,9];

    const [a,b,c] = nums
    //grabs the first three values of the nums array 
    //and set it to a=1 b=3 c=5


    const subtitle ='subtitle';
    // props practice 
    //can call the prop what you want 

    const getCalculations = (a:number, b:number) => {
        return {
            sum: a+b, 
            diff: Math.abs(a-b),
            product: a*b
        }
    }

    const Calculations = (a:any, b:any) => [
        a + b,
        Math.abs(a-b),
        a * b, 
    ]

    const { sum, product, diff } = getCalculations(3,5)
    // they don't have to be in order when using an object
    // they do when its an array though
    const [arraySum, arrayDiff, arrayProduct] = Calculations(3,5)
    
    //...nums spreads the array into individual.
    //get three separate string
    console.log(nums);
    console.log(...nums);
    const idPerson = {...person, id: 1}
    
    


    return ( 
        <section>
            <h1>Home</h1>
            <hr/>

            <Billboard title="Events" subtitle={subtitle}/> 
            <Billboard title="Songs" subtitle='sub 1'/> 
            <Billboard title="Games" subtitle='sub 2'/> 
            <Billboard title="Works" subtitle='sub 3'/> 
            <hr/>

            <p>{name} {age} {color}</p>
            <p>{a}, {b}, {c}</p>
            <p>{getCalculations(3,5).product}</p>
            <p>{sum}, {product}, {diff}</p>
            <p>{arraySum}, {arrayProduct}, {arrayDiff}</p>
            <hr/>

            <p>{nums}</p> 
            <p>{idPerson.name}</p>

        </section>
     );
}
 
export default Home;
//default means that you don't have to put it in 
// curly braces when import and you can call it 
// what you want. 
//import whatever from '/home'

//when put exporting other stuff add 
//export {variable, function}
// and then import it with curly braces later
// import {variable, function} from '/home'
