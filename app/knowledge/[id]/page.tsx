import Image from 'next/image';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

const Page = () => {
    return (<>
        <div className="max-w-[1200px] mx-auto py-8">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/knowledge">Kiến thức</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Hướng dẫn chọn mua sản phẩm hút ẩm phù hợp</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <h1 className='text-center md:text-3xl text-xl p-10 max-[768px]:p-3 font-bold'>Hướng Dẫn Chọn Mua Sản phẩm Hút Ẩm Phù Hợp</h1>
            <p className='text-right md:my-5 mx-auto max-w-screen-lg max-[768px]:p-3 text-muted-foreground underline max-[768px]:text-sm'>Van Vu Cao , July 20, 2024</p>
        </div>
        <Image src="https://absortech.com/wp-content/uploads/2021/12/absortech_container-rain_inside-container.jpg"
                   alt={'article 1'} width={600} height={300} className='w-full h-[300px] object-cover'/>
        <div className="max-w-[1200px] mx-auto py-8 max-[768px]:px-6">
            <div>
                <p className="font-bold">I. Việc chọn một sản phẩm hút ẩm phù hợp có thể là một thách thức nếu bạn không biết những yếu tố cần cân nhắc. Dưới đây là một số điểm quan trọng bạn nên chú ý khi mua sản phẩm hút ẩm:</p>

                <h2 className="text-md font-bold my-2">1. Xác Định Nhu Cầu:</h2>
                <p>Trước tiên, bạn cần xác định nhu cầu của mình. Bạn cần hút ẩm cho một không gian nhỏ như phòng ngủ hay cho cả căn nhà? Sản phẩm hút ẩm có công suất phù hợp với diện tích phòng sẽ đảm bảo hiệu quả hoạt động tối ưu.</p>

                <h2 className="text-md font-bold my-2">2. Tính Năng và Chế Độ Hoạt Động:</h2>
                <p>Các sản phẩm hút ẩm thường có nhiều tính năng khác nhau như tự động điều chỉnh độ ẩm, chế độ tiết kiệm năng lượng, và các chế độ làm việc khác. Hãy chọn sản phẩm có tính năng phù hợp với nhu cầu và sở thích của bạn.</p>

                <h2 className="text-md font-bold my-2">3. Độ Ồn và Tiêu Thụ Điện:</h2>
                <p>Nếu bạn sử dụng sản phẩm hút ẩm trong phòng ngủ hoặc không gian yên tĩnh, hãy chọn sản phẩm có độ ồn thấp. Ngoài ra, việc tiết kiệm năng lượng cũng là một yếu tố quan trọng để giảm chi phí điện.</p>

                <h2 className="text-md font-bold my-2">4. Dung Tích Bình Chứa Nước:</h2>
                <p>Chọn sản phẩm có dung tích bình chứa nước đủ lớn để giảm tần suất phải đổ nước. Một bình chứa lớn sẽ giúp bạn tiết kiệm thời gian và công sức trong quá trình sử dụng.</p>

                <p>Việc lựa chọn sản phẩm hút ẩm phù hợp sẽ giúp bạn duy trì một môi trường sống thoải mái và bảo vệ sức khỏe của bạn và gia đình.</p>

                <Image src="/images/absortech_all_products_container.png" width={500} height={300} alt={"description picture"} className="mx-auto"/>

                <p className="font-bold">Lợi ích của Sản phẩm Hút Ẩm trong Cuộc Sống Hàng Ngày</p>
                <p>Trong cuộc sống hàng ngày, độ ẩm không khí có thể ảnh hưởng đáng kể đến sức khỏe và sự thoải mái của chúng ta. Sản phẩm hút ẩm đã trở thành một giải pháp hiệu quả giúp kiểm soát mức độ ẩm trong không khí, mang lại nhiều lợi ích thiết thực.</p>

                <h2 className="text-md font-bold my-2">1. Cải thiện Sức Khỏe Hô Hấp:</h2>
                <p>Khi độ ẩm không khí quá cao, không khí trở nên ngột ngạt và có thể tạo điều kiện cho nấm mốc và vi khuẩn phát triển. Sản phẩm hút ẩm giúp duy trì mức độ ẩm lý tưởng, từ đó giảm nguy cơ các vấn đề về hô hấp như hen suyễn hay viêm phế quản.</p>

                <h2 className="text-md font-bold my-2">2. Bảo Vệ Nội Thất và Đồ Đạc:</h2>
                <p>Độ ẩm cao có thể làm hỏng đồ gỗ, giấy tờ và các vật dụng khác trong gia đình. Sản phẩm hút ẩm giúp bảo vệ nội thất và đồ đạc của bạn khỏi các tổn hại do ẩm ướt, kéo dài tuổi thọ của chúng.</p>

                <h2 className="text-md font-bold my-2">3. Tăng Cường Tiện Nghi Sinh Hoạt:</h2>
                <p>Việc duy trì độ ẩm trong mức độ thoải mái giúp cải thiện chất lượng giấc ngủ và làm cho không gian sống trở nên dễ chịu hơn. Bạn sẽ cảm thấy thoải mái hơn trong môi trường không khí khô ráo và sạch sẽ.</p>

                <p>Sản phẩm hút ẩm không chỉ là một thiết bị tiện ích mà còn là một phần quan trọng trong việc tạo ra một môi trường sống khỏe mạnh và thoải mái.</p>
            </div>
        </div>
        </>
    )
}
export default Page;