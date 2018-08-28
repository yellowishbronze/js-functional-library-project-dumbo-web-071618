fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, cb) {
      for(var i in obj){
        cb(obj[i]);
      }
      return obj
    },

    map: function(object,cb) {
      let new_array = []
      for(let value in object){
        new_array.push(cb(object[value]))
      }
      return new_array
    },

    reduce: function(array, cb, accumulator = 0) {
      for(let value in array){
        accumulator = cb(accumulator, array[value], array)
      }
      return accumulator
    },

    find: function(array, value) {
        for (let index in array ){
          if (value(array[index])){
            return array[index]
          }
        }
    },

    filter: function(array, cb) {
        let new_array = []
        for (let index in array){
          if (cb(array[index])){
            new_array.push(array[index])
          }
        }
        return new_array
    },

    size: function(array) {
        let length = 0
        for (let index in array){
          length++
        }
        return length
    },

    first: function(array, num = 1) {
      count = 0
      new_array = []
        for (let index in array){
          if (num === 1){
            return array[index]
          }
          new_array.push(array[index])
          count ++
          if (count === num){break;}
        }
        return new_array
    },


    last: function(array, n = 1) {
      new_array = []
      start = array.length-n
      for (let index in array){
        if (n === 1 ){
          return array[array.length-1]
        }
        else {
          if (index >= start){
          new_array.push(array[index])
        }
        }
      }
      return new_array
    },

    compact: function(array) {
      new_array = []
        for(let index in array){
          if (!!array[index]){
            new_array.push(array[index])
          }
        }
        return new_array
    },

    sortBy: function(array,cb) {
        let new_array = array.slice()
        new_array.sort( (a,b) => (cb(a) - cb(b) ? 1 : -1));
        console.log(new_array)
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
