import { useQuery } from "react-query"
import http from '../core/services/interceptor'

const useQueryGet = <T>(url:string , key:string[] | number[]  ) =>{
    const getList = async():Promise<T>=>{
        const result = await http.get(url)
        return result.data
        // console.log(result);
    }
    
    return useQuery(key , getList)

}

export default useQueryGet