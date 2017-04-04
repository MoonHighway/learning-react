(() => {

  var printNames = response => {
      var people = JSON.parse(response).results,
          names = people.map(({name}) => `${name.last}, ${name.first}`)
      console.log(names.join('\n'))
  }

  const request = new XMLHttpRequest()
  request.open('GET', 'https://api.randomuser.me/?nat=US&results=10')
  request.onload = () => printNames(request.response)
  request.send()

})()
