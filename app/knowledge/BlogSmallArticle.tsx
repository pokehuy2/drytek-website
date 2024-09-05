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
const BlogSmallArticle = ({id,imageLink,article, date, description, author} : Props) => {
    const router = useRouter();
    return (
        <Card className="rounded-sm p-2 max-w-[340px] text-sm cursor-pointer mt-3" onClick={() => router.push(`/knowledge/${id}`)}>
            <Image
                src={imageLink}
                width={330}
                height={330}
                alt={article}
                className="rounded-sm"
            />
            <CardContent className="card-body p-0 my-2">
                <h3 className="font-bold">{article}</h3>
                <p className='text-right my-2'>{date}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
            <Separator />
            <CardFooter className="mt-2 justify-start p-0 text-sm">
                <div>{author}</div>
            </CardFooter>
        </Card>
    )
}

export default BlogSmallArticle;