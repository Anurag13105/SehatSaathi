"use client";

import { useRouter } from 'next/navigation'

export default function Button(props) {

  const router = useRouter()
  

  return (
    <button disabled={props.logged} onClick={() => router.push(`/${props.linkto}`)} className=" mx-3 px-5 py-1 text-xl font-semibold  rounded-2xl  text-white   transition-all duration-[400ms] hover:font-bold hover:bg-[#42BA85] disabled:invisible ">{props.name}</button>
  )
}
