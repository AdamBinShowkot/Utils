const comparePrevNewArrayFnc=require('./utils/comparePrevNewArray.ts');


// Test For PrevArray and NewArray Compare
const prevArr:any=[
    {
        "ItemSpcValueMapBidId":1,
        "ItemSpcValueMapId": 1091,
        "SpcValueMapId": 19,
        "SpcValueId": 32,
        "SpcValueName": "14th"
    },
    {
        "ItemSpcValueMapBidId":1,
        "ItemSpcValueMapId": 1095,
        "SpcValueMapId": 19,
        "SpcValueId": 34,
        "SpcValueName": "14th"
    }
]

const newArr:any=[
  {
    "ItemSpcValueMapId": 1091,
    "SpcValueMapId": 19,
    "SpcValueId": 32,
    "SpcValueName": "14th"
  },
  {
    "ItemSpcValueMapId": 1093,
    "SpcValueMapId": 21,
    "SpcValueId": 30,
    "SpcValueName": "12th"
  }
]
console.log(comparePrevNewArrayFnc(prevArr,newArr,"SpcValueId","SpcValueId","ItemSpcValueMapBidId","IsActive"))