import React, { useState } from 'react';
import "./Coin.css";
export default function Coin({ data, column }) {
    // const [coins,setCoins]=useState(data);
    // const sorting=(col)=>{
    //     const sorted=[...data].sort((a,b)=>
    //     a.col>b.col? 1:-1
    //     )
    //     setCoins(sorted);
    //     console.log(sorted);
    // }
    return (
        <table>
            <thead>
                <tr>
                    {column.map((col)=>(
                        // <th onClick={()=>sorting(col.heading)}>{col.heading}</th>
                        <th>{col.dataField}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((coin) => (
                    <tr>
                        <td><img src={coin.image} alt="Error" className="icon"></img></td>
                        <td>{coin.name}</td>
                        <td>{coin.symbol}</td>
                        <td>&#8377; {coin.current_price}</td>
                        <td>&#8377; {coin.market_cap}</td>
                        <td>&#8377; {coin.total_volume}</td>
                        <td>&#8377; {coin.high_24h}</td>
                        <td>&#8377; {coin.low_24h}</td>
                        <td>{coin.price_change_percentage_24h < 0 ? (<p className='red'>{coin.price_change_percentage_24h.toFixed(2)}%</p>) : (<p className='green'>{coin.price_change_percentage_24h.toFixed(2)}%</p>)}</td>
                        <td>{coin.market_cap_change_percentage_24h.toFixed(2)}%</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}