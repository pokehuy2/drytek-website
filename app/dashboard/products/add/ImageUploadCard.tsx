import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Dispatch, SetStateAction, useRef} from "react";
import {Upload} from "lucide-react";

const ImageUploadCard = ({images, setImages} : {images: string[], setImages: Dispatch<SetStateAction<string[]>>}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const uploadFile = (e: any) => {
        const file = e.currentTarget.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (evt) => {
                const img = btoa(evt.target?.result?.toString() ?? '');

                setImages(prevState => [...prevState, img]);
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
                        src={(images[0] && atob(images[0])) ?? '/images/placeholder.svg'}
                        width="300"
                    />
                    <div className="grid grid-cols-3 gap-2">
                        <Image
                            alt="Product image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="84"
                            src={(images[1] && atob(images[1])) ?? "/images/placeholder.svg"}
                            width="84"
                        />
                        <Image
                            alt="Product image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="84"
                            src={(images[2] && atob(images[2])) ?? "/images/placeholder.svg"}
                            width="84"
                        />
                        {images[3] &&
                            <Image
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src={images[3] ? atob(images[3]) : "/images/placeholder.svg"}
                                width="84"
                            />}
                        {images[4] && <Image
                            alt="Product image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="84"
                            src={images[4] ? atob(images[4]) : "/images/placeholder.svg"}
                            width="84"
                        />}
                        {images[5] && <Image
                            alt="Product image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="84"
                            src={images[5] ? atob(images[5]) : "/images/placeholder.svg"}
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