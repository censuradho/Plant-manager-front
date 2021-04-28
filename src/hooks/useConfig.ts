import { useState, useEffect } from 'react'
import { loadConfig, Config, saveConfig } from '../libs/storage'


function useConfig () {
  const [config, setConfig] = useState<Config>({})
  const [isLoading, setIsLoading] = useState(true)

  const getConfig = async () => {
    try {
      setIsLoading(true)
      const data = await loadConfig()
      setConfig(data)
    } catch (err) {
      throw new Error(err)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getConfig()
  }, [])

  return { config, isLoading, saveConfig }
}

export default useConfig
