import axiosSecure from "../../../hooks/useAxiosSecure"

export const getHostRoom =async (email)=>{
    const {data} = await axiosSecure.get(`/room/${email}`)
    return data
}