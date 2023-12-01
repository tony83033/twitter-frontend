import Image from 'next/image'

import { BsTwitter } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { FaHashtag } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import FeedCard from '@/components/FeedCard';
import { FaMoneyCheckAlt } from "react-icons/fa";


interface TwitterSiddeButton {
    title: string;
    icon: React.ReactNode;
}

const sideMenuItems: TwitterSiddeButton[] =[
  {
    title: 'Home',
    icon: <IoMdHome />
  },
  {
    title: 'Explore',
    icon: <FaHashtag />
  },
  {
    title: 'Notification',
    icon: <FaBell />
  },{
    title: 'Messages',
    icon: <FaEnvelope />
  },
  {
    title: 'Bookmark',
    icon: <FaBookmark />
  },
  {
    title: 'Twitter Blue',
    icon: <FaMoneyCheckAlt />
  },
  {
    title: 'Profile',
    icon: <FaUser />
  },
  {
    title: 'More',
    icon: <MdMoreHoriz />
  },
  
]

export default function Home() {
  return (
   <div className="">
    <div className='grid grid-cols-12 h-screen w-screen px-56'>
      <div className='col-span-3 ml-34   pt-2'>
        <div className="text-4xl h-fit cursor-pointer transition-all hover:bg-gray-600 rounded-full p-2 w-fit ">
        <BsTwitter />
        </div>
       <div className='mt-4 text-2xl font-bold pr-4'>
        <ul>
        {sideMenuItems.map(item=> <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 cursor-pointer w-fit mt-2" key={item.title}><span>{item.icon}</span><span>{item.title}</span></li>)}
        </ul>
        <div className='mt-4 px-5'>
        <button className=' bg-[#1d9bf0] text-lg p-4 rounded-full w-full  '>Tweet</button>
        </div>
       
       </div>
      </div>
      <div className='col-span-5 border-r-2 border-l-2 border-white h-screen overflow-scroll'>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>
      <div className='col-span-3'></div>
    </div>
   </div>
  )
}
