const fetchResponse = (url) => {
    return fetch(url)
    .then(response => {
        if(!response.ok) {
          console.log('HTTP request unsuccessful');
          throw new Error(`Network Error - status ${response.status} at URL: ${response.url}`)
        } else {
          console.log('HTTP request successful');
        }
        return response;
      })
      .then(response => response.json())
}

export default fetchResponse;