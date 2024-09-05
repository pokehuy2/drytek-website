'use client'
import {DropdownMenuItem} from "@/components/ui/dropdown-menu";
import {memo} from "react";
import {useRouter} from "next/navigation";

const DropdownDeleteItem = ({id,path} : {id: string, path: string}) => {
    const router = useRouter()
    return <DropdownMenuItem onClick={async() => {await fetch('/api/dashboard/' + path + id, {method: 'DELETE'}); router.refresh()}}>Xoá</DropdownMenuItem>

}

export default memo(DropdownDeleteItem);