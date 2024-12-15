const comparePrevNewArrayFnc=require('./utils/comparePrevNewArray.ts');
const buildHierarchyTitleFnc=require('./utils/buildHierarchyTitle.ts');


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
//console.log(comparePrevNewArrayFnc(prevArr,newArr,"SpcValueId","SpcValueId","ItemSpcValueMapBidId","IsActive"))

// Test Data for buildHierarchyTitle
const data = [
  { Id: 1, ParentId: 0, Title: "Team A" },
  { Id: 2, ParentId: 1, Title: "Team B" },
  { Id: 3, ParentId: 2, Title: "Team C" },
  { Id: 4, ParentId: 0, Title: "Team X" },
  { Id: 5, ParentId: 4, Title: "Team Y" },
  { Id: 6, ParentId: 4, Title: "Team Z" },
  { Id: 7, ParentId: 6, Title: "Team E" },
];
const updatedData:any = buildHierarchyTitleFnc(data, "Id", "Title", "ParentId");
console.log(updatedData)