
function CreatePost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'Prachi',
          body: '146',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));


return(
    <div className="btn">
        <button on onClick={CreatePost}>CreatePost</button>
    </div>
)
}

export default CreatePost