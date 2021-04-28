import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { loadCurrentUser, saveCurrentUser, Account  } from '../libs/storage'

function useCurrentUser () {
  const user = useSelector(value => value.user)

  const [currentUser, setCurrentUser] = useState<Account>()  

  const handleChangeCurrentUser = async (account: Account) => {
    await saveCurrentUser(account)
  }

  const getUser = () => {
    
  }
  useEffect(() => {
    saveCurrentUser(user)
  }, [user])

  useEffect(() => {
    loadCurrentUser()
      .then(user => user && setCurrentUser(user))
      .catch(err => {})
  }, [])
  
  return { currentUser, handleChangeCurrentUser }
}

export default useCurrentUser