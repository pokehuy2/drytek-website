import BlogSmallArticle from "@/app/knowledge/BlogSmallArticle";
import BlogMainArticle from "@/app/knowledge/BlogMainArticle";
import BlogSecondaryArticle from "@/app/knowledge/BlogSecondaryArticle";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

const mockArticles = [
    {
        id: 1,
        imageLink: "https://absortech.com/wp-content/uploads/2021/12/absortech_container-rain_inside-container.jpg",
        article: "Lợi ích của Sản phẩm Hút Ẩm trong Cuộc Sống Hàng Ngày",
        date: "2024-08-12",
        description: "Khám phá các lợi ích của sản phẩm hút ẩm trong việc cải thiện sức khỏe, bảo vệ nội thất và tăng cường tiện nghi sinh hoạt.",
        author: 'Cao Thanh Lam'
    },
    {
        id: 2,
        imageLink: "https://absortech.com/wp-content/uploads/2021/12/absortech_moisture-damage_container_boxes.jpg",
        article: "Hướng Dẫn Chọn Mua Sản phẩm Hút Ẩm Phù Hợp",
        date: "2024-08-10",
        description: "Cung cấp hướng dẫn chi tiết về cách chọn sản phẩm hút ẩm phù hợp với nhu cầu và không gian sử dụng.",
        author: 'Van Phu Viet'
    },
    {
        id: 3,
        imageLink: "https://absortech.com/wp-content/uploads/2021/12/absortech_moisture-damage-costs_port.jpg",
        article: "Cách Bảo Quản và Vệ Sinh Sản phẩm Hút Ẩm",
        date: "2024-08-08",
        description: "Hướng dẫn chi tiết về cách bảo quản và vệ sinh sản phẩm hút ẩm để duy trì hiệu quả và kéo dài tuổi thọ của máy.",
        author: 'Trinh Tung Linh'
    },
    {
        id: 4,
        imageLink: "https://absortech.com/wp-content/uploads/2021/12/absortech_container-rain_inside-container.jpg",
        article: "Top 5 Sản phẩm Hút Ẩm Tốt Nhất Năm 2024",
        date: "2024-07-15",
        description: "Danh sách 5 sản phẩm hút ẩm hàng đầu của năm 2024 với đánh giá chi tiết về hiệu suất và tính năng.",
        author: 'Cao Thanh Lam'
    },
    {
        id: 5,
        imageLink: "https://absortech.com/wp-content/uploads/2021/12/absortech_moisture-damage_container_boxes.jpg",
        article: "So Sánh Các Loại Sản phẩm Hút Ẩm: Hơi Nước và Hấp Thụ",
        date: "2024-07-20",
        description: "Phân tích sự khác biệt giữa các loại sản phẩm hút ẩm dựa trên công nghệ hơi nước và hấp thụ để giúp bạn chọn lựa đúng loại.",
        author: 'Van Phu Viet'
    },
    {
        id: 6,
        imageLink: "https://absortech.com/wp-content/uploads/2021/12/absortech_moisture-damage-costs_port.jpg",
        article: "Những Sai Lầm Thường Gặp Khi Sử Dụng Sản phẩm Hút Ẩm",
        date: "2024-07-25",
        description: "Những lỗi phổ biến mà người dùng thường mắc phải khi sử dụng sản phẩm hút ẩm và cách khắc phục chúng.",
        author: 'Trinh Tung Linh'
    },
    {
        id: 7,
        imageLink: "https://absortech.com/wp-content/uploads/2021/12/absortech_moisture-damage-costs_port.jpg",
        article: "Lợi Ích của Sản phẩm Hút Ẩm Trong Mùa Mưa",
        date: "2024-06-30",
        description: "Tại sao sản phẩm hút ẩm lại đặc biệt quan trọng trong mùa mưa và những lợi ích mà nó mang lại.",
        author: "Bùi Thị Giang"
    },
    {
        id: 8,
        imageLink: "https://absortech.com/wp-content/uploads/2021/12/absortech_moisture-damage-costs_port.jpg",
        article: "Tại Sao Bạn Nên Đầu Tư Vào Sản phẩm Hút Ẩm",
        date: "2024-06-20",
        description: "Các lý do chính đáng để bạn xem xét việc đầu tư vào một sản phẩm hút ẩm cho ngôi nhà của mình.",
        author: "Ngô Văn Hiệu"
    },
    {
        id: 9,
        imageLink: "https://absortech.com/wp-content/uploads/2021/12/absortech_container-rain_inside-container.jpg",
        article: "Các Tính Năng Quan Trọng Của Sản phẩm Hút Ẩm Mới",
        date: "2024-05-15",
        description: "Khám phá các tính năng mới và tiên tiến của sản phẩm hút ẩm hiện đại và cách chúng cải thiện hiệu quả sử dụng.",
        author: "Vũ Thị Linh"
    }
]

const KnowledgePage = () => {
    return (
        <div className="max-w-[1200px] min-h-[650px] mx-auto pt-5 max-[768px]:p-5">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Kiến thức</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="grid md:grid-cols-[2fr_1fr] my-5 max-[768px]:grid-cols-1">
                {/*<div>*/}
                    <div className="inline-block">
                        {/*<h2>MỚI NHẤT</h2>*/}
                        {/*<div className="h-1 bg-black"></div>*/}
                    </div>
                    <div className="italic">Hiện chưa có bài viết nào. Vui lòng quay lại sau.</div>
                    {/*<BlogMainArticle id={mockArticles[1].id} imageLink={mockArticles[1].imageLink}*/}
                    {/*                 article={mockArticles[1].article} date={mockArticles[1].date}*/}
                    {/*                 description={mockArticles[1].description} author={mockArticles[1].author}/>*/}
                {/*    <div className="inline-block my-3">*/}
                {/*        <h3>Mẹo vặt</h3>*/}
                {/*        <div className="h-1 bg-black"></div>*/}
                {/*    </div>*/}
                {/*    <BlogSecondaryArticle id={mockArticles[2].id} imageLink={mockArticles[2].imageLink}*/}
                {/*                          article={mockArticles[2].article} date={mockArticles[2].date}*/}
                {/*                          description={mockArticles[2].description}*/}
                {/*                          author={mockArticles[2].author}/>*/}
                {/*    <BlogSecondaryArticle id={mockArticles[5].id} imageLink={mockArticles[5].imageLink}*/}
                {/*                          article={mockArticles[5].article} date={mockArticles[5].date}*/}
                {/*                          description={mockArticles[5].description}*/}
                {/*                          author={mockArticles[5].author}/>*/}
                {/*    <BlogSecondaryArticle id={mockArticles[6].id} imageLink={mockArticles[6].imageLink}*/}
                {/*                          article={mockArticles[6].article} date={mockArticles[6].date}*/}
                {/*                          description={mockArticles[6].description}*/}
                {/*                          author={mockArticles[6].author}/>*/}
                {/*    <div className="inline-block my-3">*/}
                {/*        <h3>Kinh nghiệm</h3>*/}
                {/*        <div className="h-1 bg-black"></div>*/}
                {/*    </div>*/}
                {/*    <BlogSecondaryArticle id={mockArticles[7].id} imageLink={mockArticles[7].imageLink}*/}
                {/*                          article={mockArticles[7].article} date={mockArticles[7].date}*/}
                {/*                          description={mockArticles[7].description}*/}
                {/*                          author={mockArticles[7].author}/>*/}
                {/*    <BlogSecondaryArticle id={mockArticles[8].id} imageLink={mockArticles[8].imageLink}*/}
                {/*                          article={mockArticles[8].article} date={mockArticles[8].date}*/}
                {/*                          description={mockArticles[8].description}*/}
                {/*                          author={mockArticles[8].author}/>*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    <div className="inline-block max-[768px]:py-3">*/}
                {/*        <h3>Bài viết nổi bật</h3>*/}
                {/*        <div className="h-1 bg-black"></div>*/}
                {/*    </div>*/}
                {/*    <BlogSmallArticle id={mockArticles[0].id} imageLink={mockArticles[0].imageLink}*/}
                {/*                      article={mockArticles[0].article} date={mockArticles[0].date}*/}
                {/*                      description={mockArticles[0].description} author={mockArticles[0].author}/>*/}
                {/*    <BlogSmallArticle id={mockArticles[3].id} imageLink={mockArticles[3].imageLink}*/}
                {/*                      article={mockArticles[3].article} date={mockArticles[3].date}*/}
                {/*                      description={mockArticles[3].description} author={mockArticles[3].author}/>*/}
                {/*    <BlogSmallArticle id={mockArticles[4].id} imageLink={mockArticles[4].imageLink}*/}
                {/*                      article={mockArticles[4].article} date={mockArticles[4].date}*/}
                {/*                      description={mockArticles[4].description} author={mockArticles[4].author}/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default KnowledgePage