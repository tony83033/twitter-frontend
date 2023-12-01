import React from 'react'
import Image from 'next/image';
import { FiMessageCircle } from "react-icons/fi";
import { FaRetweet } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";

const FeedCard: React.FC=()=>{
    return <div className='grid grid-cols-12 border border-b-0 border-r-o border-l-0  border-gray-600 p-5 m-1 hover:bg-slate-600 cursor-pointer gap-2 transition-all'>
        <div className='col-span-1 '>
            <Image className='rounded-full' src="https://avatars.githubusercontent.com/u/86745864?v=4" alt='UserProfile' height={50} width={50}/> 
        </div>
        <div className='col-span-11 m-1'>
            <h1>Sumit pal</h1>
            <p>Did you know? Cloud computing has transformed the way businesses operate! Learn how leveraging the cloud can supercharge your organization's efficiency and scalability. Say goodbye to traditional limitations! #CloudComputing  #programming #DevOps</p>
            <div className='flex justify-between items-center mt-5 text-xl pr-10 w-[95%]'>
                <div>
                <FiMessageCircle />
                </div>
                <div>
                <FaRetweet />
                </div>
                <div>
                <AiOutlineLike />
                </div>
                <div>
                <MdOutlineFileUpload />
                </div>
            </div>
        </div>
    </div>
}

export default FeedCard;