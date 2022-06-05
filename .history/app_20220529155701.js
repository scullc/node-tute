const {readFile, writeFile} = require('fs');

const first = result1
readFile('./content/first.txt', 'utf8', (err, result1)=>{
if(err) {
    console.log(err)
    return
}
const second = result2
readFile('./content/second.txt', 'utf8', (err, result)=>{
if(err) {
    console.log(err)
    return
}

writeFile(
    './content/result-async.txt',
    `Here is the result: ${first} ${second}`
    ,(err, result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result)
        }
    )
    })
})




