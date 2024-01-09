import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    ref: 'User',
  },
  picturePath: {
    type: String,
    default: '',
  },
  bio: {
    type: String,
    default: '',
  },

  followers: [String],
  following: [String],
  totalNumberOfPosts: { type: Number, default: 0 },
})

const Profile = mongoose.model('Profile', profileSchema)
export default Profile
