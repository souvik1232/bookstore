import axios from "axios";
const baseurl="https://backend-bookstore.herokuapp.com/bookstore_user/"

export default class Axios{
    Post(url,data,token){
        // console.log(token);
        return axios.post(baseurl+url,data)
    }
}