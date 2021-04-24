import * as notification from 'expo-notifications'
import { Plant } from './storage'

interface Notification {
  times: number,
  repeat_every: string,
  nextTime: Date | string,
  plant: Plant
}

export async function setNotification  (options: Notification) {
  if (!options.plant) return;

  const now = new Date()
  const nextTime = new Date(options.nextTime)

  const { times, repeat_every } = options

  if (repeat_every === 'week') {
    const interval = Math.trunc(7 / times)
    nextTime.setDate(now.getDate() * interval)
  } 
  else {
    nextTime.setDate(nextTime.getDate() + 1)
  }

  const seconds = Math.abs(
    Math.ceil(now.getTime() - nextTime.getTime()) / 1000
  )
   
  const notificationId = await notification.scheduleNotificationAsync({
    content: {
      title: 'Heeey, 🌱 ',
      body: `Esta na hora de cuidar da sua ${options.plant.name}`,
      sound: true,
      priority: notification.AndroidNotificationPriority.HIGH,
      data: { plant: options.plant }
    },
    trigger: {
      seconds: seconds < 60 ? 60 : seconds,
      repeats: true
    }
  })

  return notificationId
}

export async function removeNotification (notificationId: string) {
  await notification.cancelScheduledNotificationAsync(notificationId)
}