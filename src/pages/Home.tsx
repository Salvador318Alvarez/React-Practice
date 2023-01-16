import Billboard from "../components/Billboard";

const Home = () => {
    const subtitle ='subtitle';
    // props practice 
    //can call the prop what you want 
    return ( 
        <section>
            <h1>Home</h1>
            <Billboard title="Events" subtitle={subtitle}/> 
            <Billboard title="Songs" subtitle='sub 1'/> 
            <Billboard title="Games" subtitle='sub 2'/> 
            <Billboard title="Works" subtitle='sub 3'/> 
            <Billboard />
           
        </section>
     );
}
 
export default Home;