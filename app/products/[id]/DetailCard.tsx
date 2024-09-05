import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {ArrowUpRight} from 'lucide-react'

const DetailCard = () => {
    return (
        <Card>
            <CardHeader className="p-4">
                <CardTitle className="text-md">Absorpole</CardTitle>
                <h3 className="text-sm">Hút ẩm Container</h3>
            </CardHeader>
            <Separator />
            <div className="p-4">
                <CardDescription>Absorpole® là chất hút ẩm chứa carbon trung tính đầu tiên trên thị trường. Nó được làm bằng canxi clorua ít phát thải CO2, nhựa không dệt và tái chế. Cực hấp thụ có thể được sử dụng cho bất kỳ loại hàng hóa nào và được thiết kế để chiếm không gian tối thiểu với đầy đủ chức năng.</CardDescription>
                <h3 className="text-sm font-bold text-black p-3">Ưu điểm của sản phẩm</h3>
                <ul className="px-5 list-disc text-black">
                    <li><span className="font-bold">Khả năng hấp thụ cao:</span> Absorpole® có khả năng hút ẩm vượt trội, giúp bảo vệ hàng hóa khỏi ẩm mốc và hư hỏng do độ ẩm cao trong quá trình vận chuyển và lưu trữ.</li>
                    <li><span className="font-bold">Dễ sử dụng và lắp đặt:</span> Sản phẩm được thiết kế để dễ dàng lắp đặt trong các container hoặc kho hàng, giúp tiết kiệm thời gian và công sức trong việc bảo vệ hàng hóa.</li>
                    <li><span className="font-bold">Thân thiện với môi trường:</span> Absorpole® được sản xuất từ các nguyên liệu thân thiện với môi trường, giúp giảm thiểu tác động đến môi trường, đặc biệt là trong việc giảm phát thải CO2 và sử dụng nhựa tái chế.</li>
                </ul>
            </div>
            <Separator />
            <CardFooter className="flex-col items-start">
                <h3 className="text-sm font-bold text-black py-3">Tài liệu sản phẩm</h3>
                <div className="flex items-center">
                    <p className="underline hover:cursor-pointer text-sm">Bảng thông số kỹ thuật</p><ArrowUpRight size={16} className="ml-1"/>
                </div>
                <div className="flex items-center">
                    <p className="underline hover:cursor-pointer text-sm">Bảng chỉ số an toàn</p><ArrowUpRight size={16} className="ml-1"/>
                </div>
            </CardFooter>
        </Card>
    )
}

export default DetailCard