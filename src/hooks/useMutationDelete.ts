import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import http from '../core/services/interceptor'


const useMutationDelete =  (url:string , key:string): UseMutationResult<any, unknown, any>    => {

    const queryClient = useQueryClient()
    
    
    const handleDeleteLike =async (data:any)=>{  
          const res =await http.delete(url ,data)
          console.log(res.data);
    
      }
    
    return useMutation(handleDeleteLike, {
        onSuccess: () => {
            queryClient.invalidateQueries(key);
        },
    });
    
    
    }

export default useMutationDelete