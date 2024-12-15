"use client";
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import EmptyState from './_components/EmptyState';
import Link from 'next/link';

function Dashboard(){
    const [VideoList,SetVideoList] = useState([]);
    return (
        <div>
            <div className='flex justify-between items-center'>
            <h2 className='font-bold text-2xl text-primary'>Dashboard</h2>
            <Link href = {'/dashboard/create-new'}>
             <Button>+ Create New</Button>
             </Link>
            </div>
            {/* Empty State */}

            {
                VideoList?.length==0&&<div>
                        <EmptyState/>
                    </div>
            }
        </div>
    )   
}

export default Dashboard