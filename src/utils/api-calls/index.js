async function fetchPostData(q, state) {
    const response = await fetch(`/postcode/search?q=${q}&state=${state}`, {
      method: 'GET',
      headers: {
        'auth-key': '872608e3-4530-4c6a-a369-052accb03ca8',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const data = await response.json()
    console.log('Data: ' + data + JSON.stringify(data))
    return data
  }

export { fetchPostData }