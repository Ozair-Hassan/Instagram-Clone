// cloudStorage.js

import { Storage } from '@google-cloud/storage'

// Initializes a client with the service account key file
const storage = new Storage({
  keyFilename: '../../googleCloudAuth.json',
})

// Replace with the name of your Google Cloud Storage bucket
const bucketName = 'profile-images-instagram-clone'

// Reference to the bucket
const bucket = storage.bucket(bucketName)

/**
 * Uploads a file to Google Cloud Storage and returns the public URL.
 * @param {File} file - The file to upload.
 * @returns {Promise<string>} - A promise that resolves with the public URL of the uploaded file.
 */
const uploadFile = async (file) => {
  const blob = bucket.file(file.originalname)
  const blobStream = blob.createWriteStream({
    resumable: false,
  })

  return new Promise((resolve, reject) => {
    blobStream.on('error', (err) => {
      reject(err)
    })

    blobStream.on('finish', async () => {
      // The public URL can be used to directly access the file via HTTP.
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`

      // If you want to make the file public, uncomment the following line:
      // await blob.makePublic();

      resolve(publicUrl)
    })

    blobStream.end(file.buffer)
  })
}

export default uploadFile
