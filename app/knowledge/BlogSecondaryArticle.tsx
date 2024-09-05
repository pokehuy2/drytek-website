'use client'
import {useRouter} from "next/navigation";
import Image from "next/image";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
type Props = {
    id: number,
    imageLink: string,
    article: string;
    date: string;
    description: string;
    author: string;
}
const BlogSecondaryArticle = ({id,imageLink,article, date, description, author} : Props) => {
    const router = useRouter();
    return (
        <Card className="flex md:flex-row flex-col rounded-sm p-2 max-w-[780px] md:max-h-[260px] text-sm cursor-pointer mt-3 gap-x-3" onClick={() => router.push(`/knowledge/${id}`)}>
            <Image
                src={imageLink}
                width={330}
                height={250}
                alt={article}
                className="rounded-sm"
            />
            <CardContent className="flex flex-col justify-between p-0 my-2">
                <div>
                    <h3 className="font-bold">{article}</h3>
                    <p className='text-right my-2'>{date}</p>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
                <div className="text-right">{author}</div>
            </CardContent>
        </Card>
    )
}

export default BlogSecondaryArticle;