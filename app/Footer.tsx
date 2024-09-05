'use client'
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {clsx} from "clsx";
import {ChevronDown} from 'lucide-react'
import {useState} from "react";

const Footer = () => {
    const [open, setOpen] = useState(false)
    return (
        <footer className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white md:px-0 px-3 pt-8 pb-3">
            <div className={clsx("grid md:gap-3 gap-5 max-w-[1440px] mx-auto", open ? 'lg:grid-cols-[1fr_1.5fr_1fr_2fr]' : 'lg:grid-cols-[1fr_1fr_1fr_1fr]')}>
                <div className="hidden md:block">
                    <Link href='/'><h1 className="text-3xl font-extrabold">DRYTEK</h1></Link>
                </div>
                <address className="not-italic">
                    <h3 className="font-bold mb-2">Công ty TNHH Drytek Việt Nam</h3>
                    <ul className="text-sm">
                        <li className="md:py-2 py-1">Địa chỉ: Số 1 Ngõ 171 Minh Khai, Tổ 83, Phường Minh Khai, Quận Hai Bà Trưng, Hà Nội</li>
                        <li className="md:py-2 py-1">MST: 0110448193</li>
                        <li className="md:py-2 py-1">Hotline: (+84) 982-561-654</li>
                        <li className="md:py-2 py-1">Email: <a href="mailto:contact@drytek.vn" className="hover:underline">sales2@drytek.vn</a></li>
                    </ul>
                </address>

                <div className="md:mx-auto">
                    <h3 className="font-bold mb-2">Công ty</h3>
                    <ul className="text-sm">
                        <li className="md:py-2 py-1 hover:underline"><Link href='/contact'>Liên hệ</Link></li>
                        <li className="md:py-2 py-1 hover:underline"><Link href='/about'>Về chúng tôi</Link></li>
                        <li className="md:py-2 py-1 hover:underline"><Link href='/hiring'>Tuyển dụng</Link></li>
                        <li className="md:py-2 py-1 hover:underline"><Link href='/sitemap'>Sitemap</Link></li>
                    </ul>
                </div>
                <div>
                    <div className="flex items-center"><h3 className="font-bold mb-2 cursor-pointer hover:underline"
                             onClick={() => setOpen(!open)}>Liên lạc với chúng tôi</h3><ChevronDown size={16} className="mb-2 ml-2"/></div>
                    <div className={clsx(open ? '' : 'hidden')}>
                        <div className="grid lg:grid-cols-[1fr_.75fr] gap-3 text-black"><Input type="email"
                                                                                               placeholder="Email"/><Input
                            type="tel" placeholder="Điện thoại"/></div>
                        <div className="grid w-full gap-2 mt-2 text-black">
                            <Textarea placeholder="Nội dung"/>
                            <Button variant="outline">Gửi tin nhắn</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-3 items-center space-x-2 text-xs justify-center mt-6">
                <div>Drytek &copy; 2024. All rights reserved.</div>
                <Separator orientation="vertical"/>
                <div className="cursor-pointer hover:underline">Terms</div>
                <Separator orientation="vertical"/>
                <div className="cursor-pointer hover:underline">Policy</div>
            </div>
        </footer>
    )
}

export default Footer