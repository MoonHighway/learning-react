Isomorphism vs Universalism
========================
Samples of Universal and Isomorphic code.

### Universal Function
This code works in browser and in with node js

```javascript

    var printNames = response => {
        var people = JSON.parse(response).results,
            names = people.map(({name}) => `${name.last}, ${name.first}`)
        console.log(names.join('\n'))
    }
```

### Isomorphic Script
This code works in a browser and with node js. You can see the
[demo](http://rawgit.com/MoonHighway/learning-react/master/chapter-12/isomorphic-universal-samples/load-and-print.html)
of this script working in the browser. You can run the script with node js in the command line:
`node isomorphic-load-and-print.js`.

```javascript

    if (typeof window !== 'undefined') {
        const request = new XMLHttpRequest()
        request.open('GET', 'https://api.randomuser.me/?nat=US&results=10')
        request.onload = () => printNames(request.response)
        request.send()
    } else {
        const http = require('http')
        http.get(
            'https://api.randomuser.me/?nat=US&results=10',
            res => {

                let results = ''

                res.setEncoding('utf8')
                res.on('data', chunk => results += chunk)

                res.on('end', () => printNames(results))
            }
        )
    }
```
