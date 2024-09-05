import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {ArrowUpRight} from 'lucide-react'

const ReceptCard = () => {
    return (
        <Card className="max-w-[550px] my-5">
            <CardHeader><h3 className="font-bold">Hướng dẫn sử dụng</h3></CardHeader>
            <Separator />
            <CardContent className="py-3">
                <video
                    src='https://absortech.com/wp-content/uploads/2021/11/absorgel-blanket_container-desiccant-installation.mp4'
                    controls width='480' height='360'/>
            </CardContent>
            <Separator className="my-3"/>
            <CardFooter className="flex-col items-start">
                <h3 className="text-sm font-bold py-3">Download tài liệu</h3>
                <div className="flex items-center"><p className="underline hover:cursor-pointer text-sm">Tải tài liệu hướng dẫn sử dụng tại đây</p><ArrowUpRight size={16} className="ml-1"/></div>
            </CardFooter>
        </Card>
    )
}

export default ReceptCard;