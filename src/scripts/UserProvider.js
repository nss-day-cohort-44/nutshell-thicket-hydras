let users = []
export const useUsers = () => {
    return users.slice()
}
export const getUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(response => response.json())
    .then (
        parsedUsers => {
            console.log(parsedUsers)
            users = parsedUsers
            console.log("users" , users)
        })
}