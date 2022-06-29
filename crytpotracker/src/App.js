import React, { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

function App() {
  const [coins, setCoins] = useState([])
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
      }).catch(error => console.log(error))
  }, [])
  function priceformat(data, row) {
    if (data < 0) {
      return (
        <span style={{ color: 'red' }}>{data}</span>
      )
    }
    else {
      return (
        <span style={{ color: 'green' }}>{data}</span>
      )
    }
  }
  const column = [
    { dataField: 'image', text: 'Icon' },
    { dataField: 'name', text: 'Name', sort: true },
    { dataField: 'symbol', text: 'Symbol', sort: true },
    { dataField: 'current_price', text: 'Price', sort: true },
    { dataField: 'market_cap', text: 'Market Capital', sort: true },
    { dataField: 'total_volume', text: 'Total Volume', sort: true },
    { dataField: 'high_24h', text: 'High', sort: true },
    { dataField: 'low_24h', text: 'Low', sort: true },
    { dataField: 'price_change_percentage_24h', text: 'Percent Price Change', sort: true, formatter: priceformat },
    { dataField: 'market_cap_change_percentage_24h', text: 'Percent Market Capital Change', sort: true, formatter: priceformat }
  ]
  return (
    <div className='App'>
      {/* <Coin data={coins} column={column} /> */}
      <BootstrapTable
        keyField="id"
        data={coins}
        columns={column}
        striped
        hover
        condensed
      />
    </div>
  );
}

export default App;
