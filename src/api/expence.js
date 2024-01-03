import axios from "axios";
export const createExpence = async (data) => {
    try {
        const res = await axios.post("expence/create")
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchExpence = async (data) => {
    let res;
    try {
        res=await axios.get("expence/fetch-expences")
    }
    catch (err) {
        console.log(err);
    }
    return res.data.data;
}