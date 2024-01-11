import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import Footer from '../../components/Footer'
import axios from 'axios'
import NavBar from '../../components/NavBar'
import { setProfileData } from '../../redux/profileSlice'
import Loading from '../../components/Loading'
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
    return (
      <div>
        <Loading />
      </div>
    ) // Or a more sophisticated loader
  }
  return (
    <div>
      <NavBar />
      <section className="flex flex-col flex-grow order-4 ml-[244px] max-w-[1179px] ">
        <div className="pt-[30px] px-[20px] mx-[102px] box-content w-[935px] max-w-[935px] block">
          {/* Profile and Info */}
          <div className="mb-[44px] flex flex-row items-stretch relative">
            {/* Profile Picture */}
            <div className="mr-[30px] flex-grow basis-0 flex flex-col relative justify-center ">
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
            <div className="grow-[2]  basis-[30px] flex-shrink flex flex-col box-border items-stretch align-baseline ">
              {/* Username and edit profile */}
              <div className="flex-shrink flex flex-row items-center relative ">
                <a
                  href="#"
                  className="inline flex-shrink box-border relative"
                >
                  <h2 className="leading-[25px] break-words text-[20px] font-system-primary block">
                    {userName}
                  </h2>
                </a>
                {loggedUser === userName && (
                  <>
                    <div className="overflow-visible flex-shrink ml-[20px] items-stretch flex flex-row self-auto relative justify-start ">
                      <div className="overflow-visible box-border flex flex-row items-center self-auto justify-start relative flex-grow">
                        <div className="overflow-visible flex flex-col items-stretch self-auto justify-start relative flex-grow">
                          <Link
                            className="w-auto h-[32px] text-ellipsis justify-center rounded-lg font-semibold flex items-center text-center cursor-pointer px-[16px] relative font-system-primary text-[14px] leading-[14px] bg-[#efefef] hover:bg-gray-300/95"
                            to={`/edit-profile`}
                          >
                            Edit profile
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="ml-[5px] flex-shrink-0 block">
                      <div className="py-[8px] justify-center box-border items-center cursor-pointer px-[8px]">
                        <svg
                          aria-label="Options"
                          class="x1lliihq x1n2onr6 x5n08af"
                          fill="currentColor"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <title>Options</title>
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="8.635"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></circle>
                          <path
                            d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="mb-[20px] block ">
                <div className="block"></div>
              </div>
              {/* Posts and followers */}
              <ul className="mb-[20px] flex flex-row text-[16px]  ">
                <li className="mr-[40px] leading-[16px]">
                  <span className="font-semibold">{totalNumberOfPosts}</span>{' '}
                  posts
                </li>
                <li className="mr-[40px] leading-[16px]">
                  <span className="font-semibold">{followers.length}</span>{' '}
                  followers
                </li>
                <li className="text-[16px] leading-[16px]">
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
                <div className="py-[7px] max-w-[350px] block"></div>
                <h1 className="block text-[14px] leading-[14px] font-system-primary">
                  {bio}
                </h1>
              </div>
            </div>
          </div>
          {/*  Posts Saved Tagged */}
          {/* Posts */}
        </div>
      </section>

      <div className="ml-[244px]">
        <Footer />
      </div>
    </div>
  )
}

export default Profile
