import http from '../core/services/interceptor'
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';



const useMutationPost  = <T, V>(url: string, key: string): UseMutationResult<void, unknown, V> => {
    const queryClient = useQueryClient();

    const handleAdd = async (values: V) => {
        const res = await http.post(url, values&& values);
    };

    return useMutation(handleAdd, {
        onSuccess: () => {
            queryClient.invalidateQueries(key);
        },
    }
    );  
};

export default useMutationPost