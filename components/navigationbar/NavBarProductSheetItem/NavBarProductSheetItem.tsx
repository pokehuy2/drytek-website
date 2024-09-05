import Link from "next/link";
import {SheetClose} from "@/components/ui/sheet";
import * as React from "react";
import {memo, ReactNode} from "react";

const NavBarProductSheetItem = ({itemLink, itemNode} : {itemLink: string; itemNode: ReactNode}) => {
    return <SheetClose asChild>
        <Link
            href={`${itemLink}`}
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
            {itemNode}
        </Link>
    </SheetClose>
}

export default memo(NavBarProductSheetItem);