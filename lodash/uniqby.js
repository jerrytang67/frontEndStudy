
import _ from "lodash";


const aiFeatures=[
  {
    id:1,
    name:"bla1"
  },
  {
    id:3,
    name:"bla2"
  }
]

const models =[
  {
    id:1,
    name:"models1"
  },
  {
    id:33,
    name:"models33"
  }
]

const customModels =[
  {
    id:33,
    name:"customModels33"
  },
  {
    id:44,
    name:"customModels44"
  }
]


const uniq = _.uniqBy([ ...customModels,...aiFeatures,...models ],'id');
console.log(uniq)
