'use client'

import {Button} from "@/components/ui/button";
import * as React from "react";
import {memo, useState} from "react";
import SearchSection from "@/app/SearchSection";

const SearchSectionButton = () => {
    const [openSearch, setOpenSearch] = useState(false)

    return <>
        <Button variant='secondary' className='rounded-3xl gap-x-2' onClick={() => setOpenSearch(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-search">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
        </svg>
        <p>Tìm kiếm</p>
        </Button>
        <SearchSection open={openSearch} setOpen={setOpenSearch} />
    </>
}

export default memo(SearchSectionButton);