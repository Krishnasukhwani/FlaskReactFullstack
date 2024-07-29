import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:5000/users"

class UserService{
    getUsers(){
        return axios.get(USER_API_BASE_URL)
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL,user)
    }

    getUserByID(userId){
        return axios.get(USER_API_BASE_URL + "/" + userId)
    }

    updateUser(userId,user){
        return axios.put(USER_API_BASE_URL + "/" + userId, user)
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + "/" + userId)
    }
}

export default new UserService()