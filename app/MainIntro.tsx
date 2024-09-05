'use client'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import * as React from "react"

const imageLinks = [
    '/images/absortech_industries_agriculture.jpg','/images/absortech_industries_automotive.jpg','/images/absortech_industries_cocoa.jpg'
]

const MainIntro = () => {
    return (
        <section>
            <div className={"w-full md:h-[650px] h-[450px] bg-cover bg-[url('/images/absortech_industries_agriculture.jpg')]"}>
                <div className="max-w-[1440px] mx-auto md:pt-80 pt-[268px]">
                    <div
                        className="md:rounded-3xl rounded-md md:skew-y-12 md:w-[55.5%] skew-y-6 justify-between md:p-12 p-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 -z-20">
                        <div className="flex flex-col gap-y-6 md:-skew-y-12 -skew-y-6">
                            <div className='md:text-[60px] text-lg text-white'><h1 className="leading-tight font-bold">
                                Giải pháp chống ẩm<br/>cho hàng hoá toàn diện
                            </h1></div>
                            <p className="max-[768px]:text-[12px] font-bold">Sản phẩm chống ẩm cho các ngành công nghiệp, nông nghiệp và thực phẩm</p>
                            <div className="flex gap-x-3">
                                <Button className="rounded-3xl">Xem sản phẩm</Button>
                                <Link href='/about'><Button variant="link" className="rounded-3xl">Tìm hiểu về chúng
                                    tôi</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:p-12 p-6 max-w-[1440px] mx-auto text-center">
                <div className="flex md:flex-row flex-col relative bg-white justify-around border-[1px] rounded-2xl md:p-6 p-3 text-lg font-bold max-[768px]:gap-y-6">
                    <div><span className="text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">64</span><div>Phạm vi tỉnh thành hoạt động</div></div>
                    <div><span
                        className="text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">100+</span>
                        <div>Sản phẩm đang kinh doanh</div>
                    </div>
                    <div><span
                        className="text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">2000+</span>
                        <div>Khách hàng đã sử dụng sản phẩm</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainIntro;