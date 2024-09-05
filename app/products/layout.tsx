import {ReactNode} from "react";
import ProductSideMenu from "@/app/products/ProductSideMenu";
import WebsiteLayout from "@/app/WebsiteLayout";

const ProductsLayout = ({children}: Readonly<{ children: ReactNode }>) => {
    return(
        <WebsiteLayout>
            <div className="grid min-h-screen max-w-[1440px] md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] mx-auto gap-x-6 mb-6">
                <ProductSideMenu/>
                <main>
                    {children}
                </main>
            </div>)
        </WebsiteLayout>
    )
}

export default ProductsLayout