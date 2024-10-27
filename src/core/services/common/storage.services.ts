const setItem = (key:string , value:string):void=>{
    localStorage.setItem(key , JSON.stringify(value))
}


const getItem = (key:string  ):string | null =>{
    const item = localStorage.getItem(key);
    if (item) return JSON.parse(item);
    return null;
}


const removeItem = (key: string): boolean | void => {
    if (getItem(key) === null) return false;
    localStorage.removeItem(key);
    // return true;
}

const clearStorage = () :void =>{
    localStorage.clear();
}

export {setItem , getItem , removeItem , clearStorage}