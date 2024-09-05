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
const BlogMainArticle = ({id,imageLink,article, date, description, author} : Props) => {
    const router = useRouter();
    return (
        <Card className="rounded-sm p-2 max-w-[780px] text-sm cursor-pointer mt-3" onClick={() => router.push(`/knowledge/${id}`)}>
            <Image
                src={imageLink}
                width={760}
                height={500}
                alt={article}
                className="rounded-sm"
            />
            <CardContent className="card-body p-0 my-2">
                <h2 className="text-lg font-bold">{article}</h2>
                <p className='text-right my-2'>{author} - {date}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    )
}

export default BlogMainArticle;