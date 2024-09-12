import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Dispatch, SetStateAction, useRef} from "react";
import {Upload} from "lucide-react";

type TImages = {
    thumbImage: string,
    image1: string,
    alt1: string,
    image2: string,
    alt2: string,
    image3: string,
    alt3: string,
    image4: string,
    alt4: string,
    image5: string,
    alt5: string,
    image6: string,
    alt6: string,
    image7: string,
    alt7: string,
    image8: string,
    alt8: string,
    image9: string,
    alt9: string,
}

type Props = {
    images: TImages
    setImages: Dispatch<SetStateAction<TImages>>
}

const ImageUploadCard = ({images, setImages} : {images: TImages, setImages: Dispatch<SetStateAction<TImages>>}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const uploadFile = (e: any) => {
        const file = e.currentTarget.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (evt) => {
                const img = btoa(evt.target?.result?.toString() ?? '');

                // setImages(prevState => [...prevState, ...images]);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <Card
            className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
        >
            <CardHeader>
                <CardTitle>Ảnh sản phẩm</CardTitle>
                <CardDescription>
                    Tải lên ảnh của sản phẩm
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="300"
                        src={(images?.thumbImage && atob(images?.thumbImage)) ?? '/images/placeholder.svg'}
                        width="300"
                    />
                    <div className="grid grid-cols-3 gap-2">
                        <Image
                            alt="Product image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="84"
                            src={(images?.image1 && atob(images?.image1)) ?? "/images/placeholder.svg"}
                            width="84"
                        />
                        <Image
                            alt="Product image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="84"
                            src={(images?.image2 && atob(images?.image3)) ?? "/images/placeholder.svg"}
                            width="84"
                        />
                        {images?.image3 &&
                            <Image
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src={images?.image3 ? atob(images?.image3) : "/images/placeholder.svg"}
                                width="84"
                            />}
                        {images?.image4 &&
                            <Image
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src={images?.image4 ? atob(images?.image4) : "/images/placeholder.svg"}
                                width="84"
                            />}
                        {images?.image5 &&
                            <Image
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src={images?.image5 ? atob(images?.image5) : "/images/placeholder.svg"}
                                width="84"
                            />}
                        {images?.image6 &&
                            <Image
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src={images?.image6 ? atob(images?.image6) : "/images/placeholder.svg"}
                                width="84"
                            />}
                        {images?.image7 &&
                            <Image
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src={images?.image7 ? atob(images?.image7) : "/images/placeholder.svg"}
                                width="84"
                            />}
                        {images?.image8 &&
                            <Image
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src={images?.image8 ? atob(images?.image8) : "/images/placeholder.svg"}
                                width="84"
                            />}
                        {images?.image9 &&
                            <Image
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src={images?.image9 ? atob(images?.image9) : "/images/placeholder.svg"}
                                width="84"
                            />}
                        <input
                            type="file" onChange={uploadFile} ref={inputRef}
                            className="hidden"
                        >
                        </input>
                        <div
                            className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed cursor-pointer" onClick={() => inputRef.current?.click()}>
                            <Upload className="h-4 w-4 text-muted-foreground"/>
                            <span className="sr-only">Upload</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ImageUploadCard;