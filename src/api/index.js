import myAxios from "./myAxios"

export const reqLogin = (loginObj) => myAxios.post('/login',loginObj)