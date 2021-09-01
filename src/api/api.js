import axois from 'axios';

const instance = axois.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0'

});

export const usersAPI = {
    getUsers(activePage, numberOfUsersOnPage){
        return instance.get(`/users?page=${activePage}&count=${numberOfUsersOnPage}`)
        .then(response => {
            return response.data;
        })
    }
}