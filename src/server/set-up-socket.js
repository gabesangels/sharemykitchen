/* eslint-disable no-console */

import AWS from 'aws-sdk'
import ss from 'socket.io-stream'

import {
  IO_CONNECT,
  IO_DISCONNECT,
  LISTING_PICTURE,
  LISTING_PICTURE_START,
  LISTING_PICTURE_PROGRESS,
  LISTING_PICTURE_SUCCESS,
  LISTING_PICTURE_FAILURE,
} from '../shared/config'

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

const setUpSocket = (io) => {
  io.on(IO_CONNECT, (socket) => {
    console.log('[socket.io] A client connected.')

    ss(socket).on(LISTING_PICTURE, (stream) => {
      const key = +new Date()
      socket.emit(LISTING_PICTURE_START, key)
      console.log('[socket.io] uploading key: ', key)

      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: process.env.AWS_S3_BUCKET,
          Key: JSON.stringify(key),
          Body: stream,
        },
      })

      upload.on('httpUploadProgress', (progress) => {
        console.log(`[socket.io] current progress of ${progress.key}: ${(progress.loaded / progress.total) * 100}%`)
        socket.emit(LISTING_PICTURE_PROGRESS, progress)
      })

      upload.send((err) => {
        if (err) {
          console.log('error:', err)
          socket.emit(LISTING_PICTURE_FAILURE)
          return
        }
        console.log('success')
        socket.emit(LISTING_PICTURE_SUCCESS)
      })
    })

    socket.on(IO_DISCONNECT, () => {
      console.log('[socket.io] A client disconnected.')
    })
  })
}

export default setUpSocket
