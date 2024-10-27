import axios , {AxiosResponse , AxiosError, AxiosRequestConfig  } from "axios";
import { getItem, removeItem } from "../common/storage.services";


const baseURL = import.meta.env.VITE_BASE_URL

const instance = axios.create({
    baseURL: baseURL,
});


const onSuccess = (response : AxiosResponse) => {
    return response
}

const onError = (err:AxiosError ) => {
    console.log(err);

    if (err.message === "Network Error"){
        // toast.error("توکن شما منقضی شده است")
        removeItem('token');
        window.location.pathname = '/login'
    }

    const myErr = err.response?.status

    if(myErr  && myErr === 401){
        // clearStorage()
        removeItem('token');
        // toast.error('توکن شما منقضی شده است')
        window.location.pathname = '/' // or '/login'
    }

    if(myErr && myErr >= 400 && myErr < 500){
        // alert("Client request error: " + err.response.status);
    }

    return Promise.reject(err);
}


instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use(opt => {

    //const user = useSelector(state => state.user)

    const token = getItem("token") ? getItem("token") : null;


    //  opt.headers['MessageTest'] = "Hello World"; 
    //  opt.headers['Content-Type'] = "application/json";
    if (token) opt.headers.Authorization = 'Bearer ' + token;
    return opt
})

export default instance;