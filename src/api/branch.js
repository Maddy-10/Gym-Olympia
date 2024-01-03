import axios from "axios"

export const loginBranch =  (data) => {
    return  axios.post('/branch/login', data);
}
export const fetchBranches = async (data) => {
    let res
    try {
        res = await axios.get('/branch/fetch-branches');
    }
    catch (err) {
        console.log(err);
    }
    return res.data.data
}