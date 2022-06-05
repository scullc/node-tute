const {readFile, writeFile} = require('fs');
const first = result;
readFile('./content/first.txt', 'utf8', (err, result)=>{
if(err) {
    console.log(err)
    return
}
const second = result
readFile('./content/second.txt', 'utf8', (err, result)=>{
if(err) {
    console.log(err)
    return
}

writeFile(
    '/content/result-async.txt',
    `Here is the result: ${first} ${second}`
    ,(err, result)=>{
        if(err){
            co
        }
    }
)
    })
})




