import { useState } from "react"

function University(){

    const[univ,setUniv] = useState([])

    function fetchData(){
        fetch("http://universities.hipolabs.com/search?country=INdia")
        .then(res => res.json())
.then(res =>setUniv(res))
    }
return(
    <>
    <button onClick={fetchData}>Get University Data</button>
    <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Domain</th>
            <th>State</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {univ.map(each=>
            <tr>
              <td>{each.name}</td>
              <td>{each.domains[0]}</td>
              <td>{each["state-province"]? each["state-province"]  : "Not available"}</td>
              <td>{each.country}</td>
            </tr>
            )}
        </tbody>
      </table>
    </>
)
}

export default University