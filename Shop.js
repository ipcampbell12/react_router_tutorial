import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

//state holds info from API
//useEffect runs fetch call when component mounts

function Shop(props) {

    useEffect(() => {
        fetchItems();
    }, []);
    //brackets means useEffect will run when component mounts

    const [items, setItems] = useState([])



    const fetchItems = async () => {
        const data = await fetch('https://swapi.dev/api/starships');
        const items = await data.json()
        //  console.log(items)

        setItems(items.results)
    }

    const re = new RegExp('starships\/([^/]*)\/')


    return (
        <div>
            <h1>Shop</h1>
            {items.map(item => (
                <h4 key={(item.url).match(re)[1]}>
                    <Link to={`/shop/${(item.url).match(re)[1]}`} > {item.name}</Link>

                </h4>
            ))
            }
        </div>
    );
}

export default Shop;