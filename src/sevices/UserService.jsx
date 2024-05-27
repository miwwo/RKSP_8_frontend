import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080';

export const listUsers = async (token) => {
    const response = await axios.get(`${REST_API_BASE_URL}/admin/users`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

