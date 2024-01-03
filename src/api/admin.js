import axios from "axios"

export const loginAdmin = async (data) => {
    return await axios.post('/admin/login',data)
}