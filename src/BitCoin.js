import {useState} from 'react';

function BitCoin() {
  const[prices,setPrices] = useState([])

  function getPrices(){
fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
.then(res => res.json())
.then(res =>{

  let arr = []

  for (let each in res.bpi){
    arr.push(res.bpi[each])
  }
  setPrices(arr)
}
  
  )
  }
  return (
    <div className="App">
      <button onClick = {getPrices}>Get BitCoin Price</button>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {prices.map(each=>
            <tr>
              <td>{each.code}</td>
              <td>{each.description}</td>
              <td>{each.rate_float.toFixed(2)}</td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}

export default BitCoin;
