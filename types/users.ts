export interface Session{
    email: string,
    password: string,
    fullname: string
}

export interface User extends Session{
    id: number
}