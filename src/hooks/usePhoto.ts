import { useState, useEffect } from "react"
import * as ImagePicker from 'expo-image-picker'
import { Platform } from 'react-native'

interface usePhotoOptions {
  camera?: boolean,
  library?: boolean
}

function usePhoto (options?: usePhotoOptions) {
  const [image, setImage] = useState<ImagePicker.ImagePickerResult>()

  const defaultOptions: ImagePicker.ImagePickerOptions = {
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 4],
    quality: 1,
  }

  const pickLibrayImage = async (options?: ImagePicker.ImagePickerOptions) => {
    const result = await ImagePicker.launchImageLibraryAsync(options || defaultOptions)
    if (result.cancelled) return;

    setImage(result)
  }

  const pickCameraImage = async (options?: ImagePicker.ImagePickerOptions) => {
    const result = await ImagePicker.launchCameraAsync(options || defaultOptions)
    if (result.cancelled) return;

    setImage({ ...result })
  }

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'web') return;

      if (options?.library) {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }

      if (options?.library) {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })()
  }, [])

  return { image, pickCameraImage, pickLibrayImage }
}

export default usePhoto
