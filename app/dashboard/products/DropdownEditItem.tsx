'use client'
import {useRouter} from "next/navigation";
import {DropdownMenuItem} from "@/components/ui/dropdown-menu";
import {memo} from "react";

const DropdownEditItem = ({action,path,id} : {action: string, path: string, id: string}) => {
    const router = useRouter();
    return <DropdownMenuItem onClick={() => router.push(`/dashboard/${path}/${id}/edit`)}>
        {action}
    </DropdownMenuItem>
}

export default memo(DropdownEditItem);