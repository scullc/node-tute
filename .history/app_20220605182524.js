const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

// const flatten = (arr) => {
    // let newArr = []
    // for(let i = 0; i < arr.length; i++){
        


