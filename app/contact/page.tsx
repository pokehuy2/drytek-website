import WebsiteLayout from "@/app/WebsiteLayout";

const ContactPage = () => {
    return (
    <WebsiteLayout>
        <div className="hero min-h-screen" style={{
            backgroundImage: "url(https://absortech.com/wp-content/uploads/2021/12/absortech_about_sweden_v2.jpg)",
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-white">Liên hệ ngay với chúng tôi</h1>
                    <p className="py-6 text-white">
                        Drytek là nhà phân phối chính hãng sản phẩm hút ẩm Absortech, gửi thông tin để chúng tôi có thể liên hệ lại với bạn sớm nhất
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tên bạn/ công ty</span>
                            </label>
                            <input type="text" placeholder="" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Số điện thoại</span>
                            </label>
                            <input type="tel" placeholder="" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Nội dung</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder=""></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Gửi thông tin</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </WebsiteLayout>
    )
}

export default ContactPage;