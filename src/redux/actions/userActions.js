export const LOGIN_USER = 'LOGIN_USER'
export const UPDATE_USER = 'UPDATE_USER'

export const setUser = (userInfos) => ({
    type: UPDATE_USER,
    userInfos
})

export const loginUser = (userInfos) => ({
    type: LOGIN_USER,
    userInfos
})