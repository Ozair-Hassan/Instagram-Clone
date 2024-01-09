import dotenv from 'dotenv'
// cloudStorage.js
dotenv.config()
import { Storage } from '@google-cloud/storage'

// Make sure the GOOGLE_APPLICATION_CREDENTIALS_BASE64 environment variable is not undefined
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64) {
  console.error(
    'The GOOGLE_APPLICATION_CREDENTIALS_BASE64 environment variable is not set.'
  )
  process.exit(1) // Exit the process if the environment variable is not set
}

// Decode the base64 environment variable to get the JSON credentials
const credentialsJSON = JSON.parse(
  Buffer.from(
    process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64,
    'base64'
  ).toString()
)

const storage = new Storage({
  credentials: credentialsJSON,
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
      // Set the signed URL to expire in 10 years
      const tenYears = 10 * 365 * 24 * 60 * 60 * 1000 // Convert 10 years to milliseconds
      const options = {
        action: 'read',
        expires: Date.now() + tenYears,
      }

      try {
        const [signedUrl] = await blob.getSignedUrl(options)
        resolve(signedUrl)
      } catch (err) {
        reject(err)
      }
    })

    blobStream.end(file.buffer)
  })
}

export default uploadFile
