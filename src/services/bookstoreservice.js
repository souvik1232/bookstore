import Axios from "./axiosservice";

const axiosService = new Axios()

export default class BookStoreService {
    addUser = (data) => {
        return axiosService.Post('admin/registration', data)
    } 
    login = (data) =>{
        return axiosService.Post('admin/login',data)
    }
}