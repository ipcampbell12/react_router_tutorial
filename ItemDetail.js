import React, { useState, useEffect } from 'react';
import '../App.css'
import { useParams } from 'react-router-dom'
import { numberFormatter } from '../App'

//state holds info from API
//useEffect runs fetch call when component mounts



function ItemDetail() {

    let { id } = useParams();

    useEffect(() => {
        fetchItem();
        // console.log(id)
    }, []);

    //brackets means useEffect will run when component mounts

    const [item, setItem] = useState({})

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://swapi.dev/api/starships/${id}`)
        const item = await fetchItem.json()
        setItem(item)
        console.log(item)
    }

    return (
        <div>
            <h4>{item.name}</h4>
            <ul className='ship-deets'>
                <li>{`Manufactured by ${item.manufacturer} `}</li>
                <li>{`Costs ${numberFormatter.format(item.cost_in_credits)} credits`}</li>
                <li>{`Star ship class is ${item.starship_class}`}</li>
                <li>{`Model type is ${item.model}`}</li>
                <li>{`Holds up to ${item.passengers} passengers`}</li>
            </ul>
        </div>
    );
}

export default ItemDetail;