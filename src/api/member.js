import axios from "axios"
export const createMember = async (data) => {
    const today = new Date();
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const date = today.getDate();
    try {
      
        const res = await axios.post("member/create", {
            ...data,
            year,
            date,
            month
        })
        
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchMembers = async (data) => {
    let res;
    try {
         res = await axios.get("member/fetch-members")
    }
    catch (err) {
        console.log(err);
    }
    return res.data.data;
}