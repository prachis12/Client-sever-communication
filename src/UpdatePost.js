
function UpdatePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
           
          title: 'Prachi',
          body: '146',
          userId: 1,
          id:1
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));


return(
    <div className="btn">
        <button on onClick={UpdatePost}>UpdatePost</button>
    </div>
)
}

export default UpdatePost