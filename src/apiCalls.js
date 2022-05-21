const fetchResponse = (url) => {
    return fetch(url)
    .then(response => {
        if(!response.ok) {
          console.log('HTTP request unsuccessful');
          this.setState({error: `Network Error - status ${response.status} at URL: ${response.url}`});
          throw new Error(`status ${response.status} at URL: ${response.url}`)
        } else {
          console.log('HTTP request successful');
        }
        return response;
      })
      .then(response => response.json())
}

export default fetchResponse;


// fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
// .then(response => {
//   if(!response.ok) {
//     console.log('HTTP request unsuccessful');
//     this.setState({error: `Network Error - status ${response.status} at URL: ${response.url}`});
//     throw new Error(`status ${response.status} at URL: ${response.url}`)
//   } else {
//     console.log('HTTP request successful');
//   }
//   return response;
// })
// .then(response => response.json())
// .then(movies => { 
//   return this.setState({ movies: movies })})
// .catch(err => console.log(err));
// }