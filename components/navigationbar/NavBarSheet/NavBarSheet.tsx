'use client'

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {BookText, ChevronDown, ChevronUp, Home, Menu, Package, Users} from "lucide-react";
import Image from "next/image";
import {clsx} from "clsx";
import * as React from "react";
import {memo, useState} from "react";
import NavBarProductSheetItem from "@/components/navigationbar/NavBarProductSheetItem";
import {CategoryItem} from "@/components/navigationbar/types";
import NavBarProductSheetComponent from "@/components/navigationbar/NavBarProductSheetComponent";

const NavBarSheet = ({items}: {items: CategoryItem[]}) => {
    const [openProductsSheet, setOpenProductsSheet] = useState(true)

    return <Sheet>
        <SheetTrigger asChild>
            <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
            >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
                <NavBarProductSheetItem itemLink={'/'} itemNode={
                    <>
                        <Image src='/logo/logo.png' width={150} height={30} alt="logo" />
                        <span className="sr-only">Drytek</span>
                    </>
                }
                />
                <NavBarProductSheetItem itemLink={'/'} itemNode={
                    <>
                        <Home className="h-5 w-5" />
                        Trang chủ
                    </>
                }
                />
                <NavBarProductSheetItem itemLink={'/about'} itemNode={
                    <>
                        <Users className="h-5 w-5" />
                        Về chúng tôi
                    </>
                }
                />
                <div
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                    onClick={() => {setOpenProductsSheet(!openProductsSheet)}}
                >
                    <Package className="h-5 w-5" />
                    Sản phẩm
                    {openProductsSheet ? <ChevronUp className="h-5 w-5 ml-auto"/> : <ChevronDown className="h-5 w-5 ml-auto" />}
                </div>
                <div className={clsx("pl-5 text-base", !openProductsSheet && 'hidden')}>
                    <div className="max-h-[50dvh] overflow-y-scroll overflow-x-hidden">
                        <NavBarProductSheetItem itemLink={'/products'} itemNode={'Tất cả sản phẩm'} />
                        <NavBarProductSheetComponent items={items} />
                    </div>
                </div>
                <NavBarProductSheetItem itemLink={'/knowledge'} itemNode={
                    <>
                        <BookText className="h-5 w-5"/>
                        Kiến thức
                    </>
                } />
            </nav>
        </SheetContent>
    </Sheet>

}

export default memo(NavBarSheet);