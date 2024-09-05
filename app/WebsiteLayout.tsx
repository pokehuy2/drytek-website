import {memo, ReactNode, useContext} from "react";
import {NavBar} from "@/app/NavBar";
import ZaloChat from "@/app/ZaloChat";
import Footer from "@/app/Footer";

const WebsiteLayout = ({
    children,
}: Readonly<{
    children: ReactNode;
}>) => {
    return (
        <>
            <NavBar />
            <div className='md:mt-[68px] mt-[69px] max-w-screen'>{children}</div>
            <ZaloChat/>
            <Footer/>
        </>
    )
}

export default memo(WebsiteLayout);