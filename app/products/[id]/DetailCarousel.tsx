import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import {Card} from "@/components/ui/card";
import {TProduct} from "@/components/navigationbar/types";

const DetailCarousel = ({product}: {product: TProduct}) => {
    return <Card className="p-2 md:max-w-[550px] max-[768px]:mb-6">
        <Image src={product.thumb} width={530} height={500} alt={product.title} className="rounded-sm max-[768px]:hidden"/>
        <Carousel
            opts={{
                align: "start",
                loop: true
            }}
            className="w-full pt-2"
        >
            <CarouselContent>
                {product?.images?.map((image, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                    <Image src={image.image} width={163} height={111} alt={image.alt ?? product.title} className="rounded-sm bg-cover max-[768px]:w-full"/>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-0"/>
            <CarouselNext className="right-0"/>
        </Carousel>
    </Card>
}

export default DetailCarousel;