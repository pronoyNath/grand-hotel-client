import axios from "axios"

const axiosPublic = axios.create({
    baseURL: 'https://grand-hotel-sand.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
}

export default useAxiosPublic;