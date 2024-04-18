import httpclient from "../api/http-common";

export const fetchUserData = async (email?: string, password?: string) => {
    try {
        const request    = {
            "email": email,
            "password": password
        }
        const response = await httpclient.post("http://localhost:8080/login", request);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

 