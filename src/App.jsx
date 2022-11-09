import { useState, useEffect } from 'react';
import List from "./components/List";

function App() {
    const [names, setNames] = useState([])

    useEffect(() => {
        fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [] )

    return(
        <div className="container text-center mt-3" >
            <h1>Kekambas 102</h1>
            {names.map(name=>console.log(name.id))}
        </div>
    )
}

export default App;

// im lost 