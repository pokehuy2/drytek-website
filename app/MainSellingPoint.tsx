import {Card} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";

const MainSellingPoint = () => {
    return (
        <section className="md:h-[950px] md:p-[50px] p-6">
            <div className="flex max-w-[1200px] mx-auto items-center text-sm md:h-[800px] max-[768px]:flex-col">
                <div className="md:w-1/3">
                    <div className="mx-8 my-8">
                        <h1 className="text-[30px] leading-10 font-bold">
                            <div>Nhà cung cấp</div>
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">hàng đầu</span>
                            <div>các sản phẩm hút ẩm</div>
                        </h1>
                        <p className="leading-6 mt-4 md:text-base text-sm">Với cam kết về chất lượng vượt trội, dịch vụ chuyên nghiệp và giá cả cạnh tranh, chúng tôi
                            không chỉ bảo vệ sản phẩm của bạn khỏi độ ẩm mà còn giúp bạn yên tâm trong suốt quá trình
                            sản xuất và lưu trữ. Hãy chọn chúng tôi để đảm bảo chất lượng sản phẩm và tối đa hóa hiệu
                            quả kinh doanh của bạn</p>
                        <Button className="rounded-3xl mt-4">Liên hệ ngay với chúng tôi</Button>
                    </div>
                </div>
                <Separator orientation="vertical" className="bg-gradient-to-b from-cyan-200 to-blue-200 max-[768px]:hidden"/>
                <div className="flex items-center h-[800px] md:w-2/3 max-[768px]:gap-x-3">
                    <div className="w-1/2">
                        <Card className="md:m-8 md:h-[150px] p-5 flex items-center gap-y-3 flex-col max-[768px]:mb-3">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                     fill="none" stroke="#2f2cdd" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-shield-check">
                                    <path
                                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                                    <path d="m9 12 2 2 4-4"/>
                                </svg>
                            </figure>
                            <h3 className="text-lg font-bold leading-6 text-center">Chất Lượng Vượt Trội & Hiệu Quả Tối Ưu</h3>
                        </Card>
                        <Separator orientation="horizontal" className="bg-gradient-to-r from-sky-200 to-fuchsia-200 max-[768px]:hidden"/>
                        <Card className="md:m-8 md:h-[150px] p-5 flex items-center gap-y-3 flex-col max-[768px]:mb-3">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                     fill="none" stroke="#dd2c2c" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-split">
                                    <path d="M16 3h5v5"/>
                                    <path d="M8 3H3v5"/>
                                    <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/>
                                    <path d="m15 9 6-6"/>
                                </svg>
                            </figure>
                            <h3 className="text-lg font-bold leading-6 text-center">Giải Pháp Toàn Diện Cho Mọi Lĩnh Vực</h3>
                        </Card>
                        <Separator orientation="horizontal" className="bg-gradient-to-r from-sky-200 to-fuchsia-200 max-[768px]:hidden"/>
                        <Card className="md:m-8 md:h-[150px] p-5 flex items-center gap-y-3 flex-col max-[768px]:mb-3">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                     fill="none" stroke="#2cdd90" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-leaf">
                                    <path
                                        d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                                </svg>
                            </figure>
                            <h3 className="text-lg font-bold leading-6 text-center">Thân Thiện Với Môi Trường & An Toàn
                                Cho Sức Khỏe</h3>
                        </Card>
                    </div>
                    <Separator orientation="vertical" className="bg-gradient-to-b from-purple-200 to-pink-200 max-[768px]:hidden"/>
                    <div className="w-1/2">
                        <Card className="md:m-8 md:h-[150px] p-5 flex items-center gap-y-3 flex-col max-[768px]:mb-3">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                     fill="none" stroke="#8e2adf" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-headset">
                                    <path
                                        d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/>
                                    <path d="M21 16v2a4 4 0 0 1-4 4h-5"/>
                                </svg>
                            </figure>
                            <h3 className="text-lg font-bold leading-6 text-center">Dịch Vụ Tư Vấn Chuyên Nghiệp Hỗ Trợ 24/7</h3>
                        </Card>
                        <Separator orientation="horizontal" className="bg-gradient-to-r from-purple-200 to-pink-200 max-[768px]:hidden"/>
                        <Card className="md:m-8 md:h-[150px] p-5 flex items-center gap-y-3 flex-col max-[768px]:mb-3">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                     fill="none" stroke="#ceb63b" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-piggy-bank">
                                    <path
                                        d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"/>
                                    <path d="M2 9v1c0 1.1.9 2 2 2h1"/>
                                    <path d="M16 11h.01"/>
                                </svg>
                            </figure>
                            <h3 className="text-lg font-bold leading-6 text-center">Giá Cả Cạnh Tranh & Linh Hoạt Cho Mọi Ngân Sách</h3>
                        </Card>
                        <Separator orientation="horizontal" className="bg-gradient-to-r from-purple-200 to-pink-200 max-[768px]:hidden"/>
                        <Card className="md:m-8 md:h-[150px] p-5 flex items-center gap-y-3 flex-col max-[768px]:mb-3">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                     fill="none" stroke="#3bc4ce" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-microscope">
                                    <path d="M6 18h8"/>
                                    <path d="M3 22h18"/>
                                    <path d="M14 22a7 7 0 1 0 0-14h-1"/>
                                    <path d="M9 14h2"/>
                                    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/>
                                    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
                                </svg>
                            </figure>
                            <h3 className="text-lg font-bold leading-6 text-center">Công Nghệ Hiện Đại, Tiên Phong Trong Ngành</h3>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSellingPoint;