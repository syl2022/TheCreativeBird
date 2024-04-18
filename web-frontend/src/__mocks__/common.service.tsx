
const user = {
    "email" : "user",
    "password": "user"
};


export const fetchUserData = async (email?: string, password?: string)=> {
    return new Promise((resolve, reject) => {
        process.nextTick(() =>
            email== user.email
                ? resolve(user)
                : reject({
                    error: `User not found.`,
                }),
        );
    });
}