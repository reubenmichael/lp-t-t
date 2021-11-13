async function fetchPostData(q) {
    // Querying only via postcode (without &state=${state})
    // as postcodes only exist in one state
    const response = await fetch(`/postcode/search?q=${q}`, {
      method: 'GET',
      headers: {
        // NB: usually an auth key should be kept separate to the code,
        // e.g. provided via an environment variable, and not checked into git
        'auth-key': '872608e3-4530-4c6a-a369-052accb03ca8',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const data = await response.json()
    return data
  }

export { fetchPostData }