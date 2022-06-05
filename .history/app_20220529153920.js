const {readFile, writeFile} = require('fs');
readFile('./content/first.txt', 'utf' (err, result)=>{
    if(err) {
        console.log(err)
        return
    }
    console.log(result)
})


