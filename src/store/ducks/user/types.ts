export enum UserTypes {
  GET_USER = 'GET_USER/user',
  SET_USER = 'SET_USER/user'
}


export interface UserData {
  username: string,
  id: string,
  user_image?: string
} 