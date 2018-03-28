function postData(){
  return fetch('http://localhost:3000/scores',{
      method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          points: 10235,
          user_initial: "CD",
          level_id: 3
        })
    }
  )
  .then(res => res.json())
  .then(console.log)
}
function checkData(){
    return fetch('http://localhost:3000/levels/3')
    .then(res => res.json())
    .then(console.log)
  }
