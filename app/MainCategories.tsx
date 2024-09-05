'use client'

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import * as React from "react";

const MainCategories = () => {
    return (
        <section className="md:h-[950px] md:p-[100px]">
            <div className="max-w-[1200px] mx-auto">
                <Card className="border-0 shadow-none">
                    <CardHeader><h1 className="text-[30px] text-center font-bold">Sản phẩm <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">đa dạng</span> cho mọi nhu cầu</h1></CardHeader>
                    <CardContent><p className="font-bold text-gray-500">Chúng tôi cung cấp một loạt sản phẩm hút ẩm đa dạng nhằm đáp ứng nhu cầu của mọi khách hàng. Từ các viên hút ẩm tiện lợi cho hộ gia đình, túi hút ẩm nhỏ gọn cho các sản phẩm điện tử, đến các hệ thống hút ẩm công nghiệp hiệu suất cao.</p></CardContent>
                    <CardFooter className="justify-center gap-x-3">
                        <Button className="rounded-3xl">Tìm hiểu sản phẩm</Button>
                        <Button variant="outline" className="rounded-3xl">Nhắn tin cho tư vấn viên</Button>
                    </CardFooter>
                </Card>
                <div className="flex justify-end">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 5000,
                            }),
                        ]}
                        className="max-w-[1400px] w-full p-5 mt-4"
                    >
                        <CarouselContent>
                            <CarouselItem key={1} className="md:basis-1/3 lg:basis-2/3">
                                <div className="p-5">
                                    <Card className="md:p-5 shadow-lg shadow-cyan-500">
                                        <CardHeader className="flex flex-row gap-x-3 items-center">
                                            <Image src="/images/absortech_all_products_container.png" width={60}
                                                   height={60} alt="agriculture" className="rounded-2xl h-[60px]"/>
                                            <div>
                                                <h3 className="text-lg font-bold">Sản phẩm hút ẩm container</h3>
                                                <CardDescription className="text-md">Các sản phẩm hút ẩm dùng trong logistic, vận chuyển các đơn hàng lớn</CardDescription>
                                            </div>
                                        </CardHeader>
                                        <Separator/>
                                        <CardContent className="grid md:grid-cols-3 grid-cols-1 gap-5 p-8">
                                            <Button variant="outline">Absorpole</Button>
                                            <Button variant="outline">Absorbag</Button>
                                            <Button variant="outline">Absorgel Hanging</Button>
                                            <Button variant="outline">Absorgel Blanket</Button>
                                            <Button variant="outline">Absorgel Max&Compact</Button>
                                            <Button variant="outline">Absorgel Sheet<Badge className="bg-green-300 ml-2">Mới</Badge></Button>
                                        </CardContent>
                                        <CardFooter className="justify-end gap-x-3"><Button className="rounded-3xl">Chi tiết</Button></CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                            <CarouselItem key={2} className="md:basis-1/3 lg:basis-2/3">
                                <div className="p-5">
                                    <Card className="md:p-5 shadow-lg shadow-purple-500">
                                        <CardHeader className="flex flex-row gap-x-3 items-center">
                                            <Image src="/images/absorgel-blanket_container-desiccant.jpg" width={60}
                                                   height={60} alt="agriculture" className="rounded-2xl h-[60px]"/>
                                            <div>
                                                <h3 className="text-lg font-bold">Sản phẩm hút ẩm box</h3>
                                                <CardDescription className="text-md">Các sản phẩm hút ẩm dùng cho mục đích cá nhân</CardDescription>
                                            </div>
                                        </CardHeader>
                                        <Separator/>
                                        <CardContent className="grid md:grid-cols-3 grid-cols-1 gap-5 p-8">
                                            <Button variant="outline">Absorgel Pouches</Button>
                                            <Button variant="outline">Absorgel Sheet</Button>
                                        </CardContent>
                                        <CardFooter className="justify-end gap-x-3"><Button className="rounded-3xl">Chi tiết</Button></CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                            <CarouselItem key={3} className="md:basis-1/3 lg:basis-2/3">
                                <div className="p-5">
                                    <Card className="md:p-5 shadow-lg shadow-sky-500">
                                        <CardHeader className="flex flex-row gap-x-3 items-center">
                                            <Image src="/images/absortech_types-desiccant.jpg" width={60}
                                                   height={60} alt="agriculture" className="rounded-2xl h-[60px]"/>
                                            <div>
                                                <h3 className="text-lg font-bold">Túi & nilon</h3>
                                                <CardDescription className="text-md">Các sản phẩm túi và nilong</CardDescription>
                                            </div>
                                        </CardHeader>
                                        <CardFooter className="justify-end gap-x-3"><Button className="rounded-3xl">Chi tiết</Button></CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        {/*<CarouselPrevious />*/}
                        {/*<CarouselNext />*/}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default MainCategories