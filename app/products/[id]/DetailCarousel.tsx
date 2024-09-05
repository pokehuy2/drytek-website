import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import {Card} from "@/components/ui/card";

const DetailCarousel = () => {
    return <Card className="p-2 md:max-w-[550px] max-[768px]:mb-6">
        <Image src={"https://absortech.com/wp-content/uploads/2021/11/absorpole_carbon-neutral-desiccant.jpg"} width={530} height={500} alt="product" className="rounded-sm max-[768px]:hidden"/>
        <Carousel
            opts={{
                align: "start",
                loop: true
            }}
            className="w-full pt-2"
        >
            <CarouselContent>
                <CarouselItem key={1} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                    <Image src="https://absortech.com/wp-content/uploads/2021/11/absorpole_carbon-neutral-desiccant.jpg" width={163} height={163} alt="product's picture" className="rounded-sm bg-cover max-[768px]:w-full"/>
                </CarouselItem>
                <CarouselItem key={2} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                    <Image src="https://absortech.com/wp-content/uploads/2021/11/AbsorBag.jpg" width={163} height={163} alt="product's picture" className="rounded-sm max-[768px]:w-full"/>
                </CarouselItem>
                <CarouselItem key={3} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                    <Image src="https://absortech.com/wp-content/uploads/2021/11/absorgel-hanging_co2-neutral.jpg" width={163} height={163} alt="product's picture" className="rounded-sm max-[768px]:w-full"/>
                </CarouselItem>
                <CarouselItem key={4} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                    <Image src="https://absortech.com/wp-content/uploads/2021/11/absorgel-blanket_co2-neutral.jpg" width={163} height={163} alt="product's picture" className="rounded-sm max-[768px]:w-full"/>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0"/>
            <CarouselNext className="right-0"/>
        </Carousel>
    </Card>
}

export default DetailCarousel;