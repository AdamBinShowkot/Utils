// Compare prev and new array 
const comparePrevNewArray=(prevValues:Array<any>,newValues:Array<any>,prevKey:string,newKey:string,primaryKey:string,activeKey:string)=>{
    // initilize return array.
    let returnArray:Array<any>=[];

    // copy both array and store new array without using instance.
    const prevArray:Array<any>=[...prevValues];
    const newArray:Array<any>=[...newValues];

    // initilize both array length.
    const prevArrayLen:number=prevArray.length | 0;
    const newArrayLen:number=newArray.length | 0;

    // compare two objects primary key are same or not?
    const areEqual = (obj1: any,obj1Key:string, obj2: any,obj2Key:string) => {
        return (
            obj1[obj1Key] === obj2[obj2Key]
        );
    };

    // identify new element and previous element.
    if(newArrayLen && prevArrayLen){
        // identify new element and previous element.
        newArray.forEach((newEle:any)=>{
            let object:any={...newEle};
            const hasMatch:boolean=prevArray.some(prevEle=> areEqual(newEle,newKey, prevEle,prevKey));

            // Find Previous Existing elements.
            if(hasMatch){
                object[activeKey]=1;
            }
            // Find New Elements.
            else{
                object[activeKey]=1;
                object[primaryKey]=0;
            }
            returnArray=[...returnArray,object];
        })

        // identify remove elements
        prevArray.forEach((prevEle:any)=>{
            let object:any={...prevEle};
            const hasMatch:boolean=newArray.some(newEle=> areEqual(prevEle,prevKey,newEle,newKey));

            // Find Remove elements.
            if(!hasMatch){
                object[activeKey]=0;
                returnArray=[...returnArray,object];
            }
        })
    }
    // if all are previous elements
    else if(prevArrayLen>0 && newArrayLen==0){
        // so if only have previous array length , that's means all elements are removed.
        prevArray.forEach((ele:any)=>{
            let object:any={...ele};
            object[activeKey]=0
            returnArray=[...returnArray,object];
        })
    }
    // if all are new elements
    else if(newArrayLen>0 && prevArrayLen==0){
        // so if only have new array length , that's means all elements are new.
        prevArray.forEach((ele:any)=>{
            let object:any={...ele};
            object[primaryKey]=0
            object[activeKey]=1;
            returnArray=[...returnArray,object];
        })
    }else{
        return returnArray;
    }

    // return array.
    return returnArray;
}


module.exports=comparePrevNewArray;