import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaChevronRight} from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic} from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag} from "react-icons/hi2";
import { MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { BiVideo } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive} from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper} from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";

const Sidebar = () => {
    const sidebar=[
        {   
            id:1,
            name:"Home",
            icon:<GoHome />,

        },
        {   
            id:2,
            name:"Shorts",
            icon:<SiYoutubeshorts />,

        },
        {   
            id:1,
            name:"Subscription",
            icon:<MdOutlineSubscriptions />,

        },
    ];


    const sidebar2 = [
        {
          id: 1,
          name: "Your Channel",
          icon: <PiUserSquareThin />,
        },
        {
          id: 2,
          name: "History",
          icon: <MdHistory />,
        },
        {
          id: 3,
          name: "Playlists",
          icon: <MdOutlineSubscriptions />,
        },
        {
          id: 4,
          name: "Your Videos",
          icon: <BiVideo />,
        },
        {
          id: 5,
          name: "Watch later",
          icon: <MdOutlineWatchLater />,
        },
        {
          id: 6,
          name: "Liked videos",
          icon: <AiOutlineLike />,
        },
      ];
      const sidebar3 = [
        {
          id: 1,
          name: "Trending",
          icon: <SiTrendmicro />,
        },
        {
          id: 2,
          name: "Shopping",
          icon: <HiOutlineShoppingBag />,
        },
        {
          id: 3,
          name: "Music",
          icon: <SiYoutubemusic />,
        },
        {
          id: 4,
          name: "Films",
          icon: <PiFilmSlateLight />,
        },
        {
          id: 5,
          name: "Live",
          icon: <CgMediaLive />,
        },
        {
          id: 6,
          name: "Gaming",
          icon: <IoGameControllerOutline />,
        },
        {
          id: 7,
          name: "News",
          icon: <FaRegNewspaper />,
        },
        {
          id: 8,
          name: "Sport",
          icon: <TfiCup />,
        },
        {
          id: 9,
          name: "Courses",
          icon: <SiStylelint />,
        },
        {
          id: 10,
          name: "Fashion & beauty",
          icon: <PiLightbulbLight />,
        },
        {
          id: 11,
          name: "Padcasts",
          icon: <MdPodcasts />,
        },
      ];
      const sidebar4 = [
        {
          id: 1,
          name: "Youtube Premium",
          icon: <FaYoutube />,
        },
        {
          id: 2,
          name: "Youtube Studio",
          icon: <SiYoutubestudio />,
        },
        {
          id: 3,
          name: "Youtube Music",
          icon: <SiYoutubemusic />,
        },
        {
          id: 4,
          name: "Youtube Kids",
          icon: <SiYoutubekids />,
        }
      ]



  return (
    <>
    <div className="px-6 mt-16 w-[16%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
    {/* sidebar 1 home section */}
        <div className="space-y-3 items-center">
         {
            sidebar.map((item)=>{
                return(
                    <div className="flex items-center rounded-xl space-x-6 p-1 hover:bg-gray-200 duration-200">
                    <div className="text-xl cursor-pointer"> 
                        {item.icon}
                    </div>
                    <span className="cursor-pointer">{item.name}</span>
                    </div>
                )
            })
         }
        </div>
        <br />
        <hr />


        {/* sidebar2 you section */}

        <div className="space-y-3 items-center">
            <div className="flex items-center space-x-1">
                <h1>You</h1>
                <FaChevronRight/>
            </div>
         {
            sidebar2.map((item)=>{
                return(
                    <div className="flex items-center rounded-xl space-x-6 p-1 hover:bg-gray-200 duration-200">
                    <div className="text-xl cursor-pointer"> 
                        {item.icon}
                    </div>
                    <span className="cursor-pointer">{item.name}</span>
                    </div>
                )
            })
         }
        </div>
        <br />
        <hr />

        {/* sidebar 3 explore section */}
        <div className="space-y-3 items-center">
        <div>
                <h1 className="font-semibold">Explore</h1>
            </div>
         {
            sidebar3.map((item)=>{
                return(
                    <div className="flex items-center rounded-xl space-x-6 p-1 hover:bg-gray-200 duration-200">
                    <div className="text-xl cursor-pointer"> 
                        {item.icon}
                    </div>
                    <span className="cursor-pointer">{item.name}</span>
                    </div>
                )
            })
         }
        </div>
        <br />
        <hr />

         {/* sidebar 4 more about youtube section*/}
         <div className="space-y-3 items-center">
            <div>
                <h1 className="font-semibold">More from youtube</h1>
            </div>
         {
            sidebar4.map((item)=>{
                return(
                    <div className="flex items-center rounded-xl space-x-6 p-1 hover:bg-gray-200 duration-200">
                    <div className="text-xl cursor-pointer text-red-700"> 
                        {item.icon}
                    </div>
                    <span className="cursor-pointer">{item.name}</span>
                    </div>
                )
            })
         }
        </div>
        <br />
        <hr />
        <span className="text-xs font-semibold text-gray-500">About Press Copyright <br/>Contact us Creators <br />Advertise Developers <br /><br />
        <p>Terms Privacy Policy & Safety <br />How YouTube works <br />Test new features</p>
        </span>
        <br />
        <p className="text-xs font-semibold text-gray-700">&copy; 2025 Google LLC</p>
    </div>
    </>
  )
}

export default Sidebar