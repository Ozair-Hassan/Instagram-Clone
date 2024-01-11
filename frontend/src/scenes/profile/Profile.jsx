import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import Footer from '../../components/Footer'
import axios from 'axios'
import NavBar from '../../components/NavBar'
import { setProfileData } from '../../redux/profileSlice'
import { setLogout } from '../../redux/authSlice'
const Profile = () => {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const { userName } = useParams()

  useEffect(() => {
    const verifyToken = async () => {
      setIsLoading(true) // Start loading
      const token = Cookies.get('token')
      if (token) {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
          const profileResponse = await axios.get(
            `/api/profile/${userName}`,
            config
          )
          const profileData = profileResponse.data

          dispatch(setProfileData(profileData))
        } catch (error) {
          console.error('Error fetching profile data:', error)
        } finally {
          setIsLoading(false) // Stop loading regardless of outcome
        }
      } else {
        setIsLoading(false) // Stop loading if no token
      }
    }

    verifyToken()
  }, [userName, dispatch])

  const profile = useSelector((state) => state.profile.profileData)
  const user = useSelector((state) => state.auth.user)
  const loggedUser = user?.userName
  const fullName = profile?.fullName
  const totalNumberOfPosts = profile?.totalNumberOfPosts
  const followers = profile?.followers
  const following = profile?.following
  const bio = profile?.bio
  const picture = profile?.picturePath

  if (isLoading) {
    return <div>Loading...</div> // Or a more sophisticated loader
  }
  return (
    <div>
      <NavBar />
      <section className="flex flex-col flex-grow order-4 ml-[244px] max-w-[1179px] ">
        <div className="pt-[30px] px-[20px] box-content w-[935px] max-w-[935px] block">
          {/* Profile and Info */}
          <div className="mb-[44px] flex flex-row items-stretch relative">
            {/* Profile Picture */}
            <div className="mr-[30px] flex-grow flex flex-col relative justify-center">
              <div className="w-[150px] h-[150px] mx-auto block">
                <div className="rounded-[50%] box-border h-full w-full relative overflow-hidden block">
                  <button>
                    <img
                      src={picture}
                      alt="Loading..."
                      className="object-cover rounded-full w-[150px] h-[150px]"
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Profile Info  */}
            <div className="grow-[2] basis-[30px] flex-shrink flex flex-col box-border items-stretch align-baseline ">
              {/* Username and edit profile */}
              <div className="flex-shrink flex flex-row items-center relative">
                <a
                  href="#"
                  className="inline flex-shrink box-border relative"
                >
                  <h2 className="leading-[25px] break-words text-[20px] font-system-primary block">
                    {userName}
                  </h2>
                </a>
                {loggedUser === userName && (
                  <div className="overflow-visible flex-shrink ">
                    <button>
                      <Link to={`/edit-profile`}>Edit Profile</Link>
                    </button>
                  </div>
                )}
              </div>
              <div className="mb-[20px] block ">
                <div className="block"></div>
              </div>
              {/* Posts and followers */}
              <ul className="mb-[20px] flex flex-row text-[16px] ps-[40px] ">
                <li className="mr-[40px]">
                  <span className="font-semibold">{totalNumberOfPosts}</span>{' '}
                  posts
                </li>
                <li className="mr-[40px]">
                  <span className="font-semibold">{followers.length}</span>{' '}
                  followers
                </li>
                <li className="text-[16px]">
                  <span className="font-semibold">{following.length}</span>{' '}
                  following
                </li>
              </ul>
              {/* Bio */}
              <div className="flex flex-col items-start box-border relative align-baseline">
                <div className="overflow-visible justify-center box-border flex flex-row items-center static self-auto gap-x-[10px] gap-y-[10px] ">
                  <span className="leading-[18px] overflow-visible max-w-full text-[14px] break-words font-semibold relative block font-system-primary whitespace-pre-line">
                    {fullName}
                  </span>
                </div>
                <div className="py-[6px] max-w-[350px] block"></div>
                <h1 className="block text-[14px] leading-[14px] font-system-primary">
                  {bio}
                </h1>
              </div>
            </div>
          </div>
        </div>
        Profile info
      </section>

      <div className="ml-[244px]">
        <Footer />
      </div>
    </div>
  )
}

export default Profile
