import { useEffect, useState } from "react";

function useInitials (data?: string) {
  const [initials, setInitials] = useState<string>()
  
  const getInitials = (value?: string) => {

    if (!value) return ''

    const stringArray = value.split(' ')
    const initials = stringArray.length > 1 ? `${stringArray[0]} ${stringArray[1]}` : `${stringArray[0].substr(0, 1)} ${`${stringArray[0].substr(-1, 1)}`}`
    setInitials(initials)
  }

  useEffect(() => {
    getInitials(data)
  }, [data])

  return { initials, getInitials }
}

export default useInitials