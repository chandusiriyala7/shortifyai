"use client"
import React from 'react' 
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import Image from 'next/image'

function CustomLoading({loading}) {
    return(
        <AlertDialog open = {loading}>
   <AlertDialogTitle></AlertDialogTitle>
  <AlertDialogContent className='bg-white'>
     <div className='bg-white flex flex-col items-center my-10 justify-center'>
      <Image src = {'/progress.gif'} width= {100} height={100} alt ="loading"/>
        <h2>Generating your Video.... Do not Refresh.</h2>
     </div>
  </AlertDialogContent>
</AlertDialog>

    )
}
export default CustomLoading
