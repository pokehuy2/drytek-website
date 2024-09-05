import ProductCard from "@/app/products/ProductCard";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {Input} from "@/components/ui/input";

const mockProducts = [
    {
        id: 1,
        imageLink: 'https://absortech.com/wp-content/uploads/2021/11/absorgel-hanging_container-desiccant.jpg',
        mainBadget: 'NEW',
        productName: 'Absorpole',
        productDescription: 'Absorpole® was the first carbon-neutral container desiccant in the market. It is made with low CO2-footprint calcium chloride, non-woven and recycled plastic. Absorpole can be used for any type of cargo and is designed to occupy minimal space with full functionality.',
        tags: ['Hút ẩm', 'gel', 'container']
    },
    {
        id: 2,
        imageLink: 'https://absortech.com/wp-content/uploads/2021/11/AbsorBag.jpg',
        productName: 'Absorbag',
        productDescription: 'Absorbag® is a very cost-effective container desiccant. It is made with low CO2-footprint calcium chloride, non-woven and PE plastic.',
        tags: ['Hút ẩm', 'gel', 'container']
    },
    {
        id: 3,
        imageLink: 'https://absortech.com/wp-content/uploads/2021/11/absorgel-hanging_co2-neutral.jpg',
        productName: 'Absorgel Hanging',
        productDescription: 'The two versions of AbsorGel® Hanging, C and X, are versatile products as they can either be installed vertically (fitting into the container wall) or horizontally (close to the container roof). AbsorGel Hanging is a suitable product if you have alternating loading configurations, sometimes loading high and sometimes loading wide.',
        tags: ['Hút ẩm', 'gel', 'container']
    },
    {
        id: 4,
        imageLink: 'https://absortech.com/wp-content/uploads/2021/11/absorgel-blanket_co2-neutral.jpg',
        productName: 'Absorgel Blanket',
        productDescription: 'AbsorGel® Blanket is a desiccant blanket to be placed on top of the cargo, so there is no loss of space for cargo. It is very easy to install on top of pallets before those are loaded into the container or on top of the bags or sacks while loading your products. AbsorGel Blanket only needs a 25 mm space to the container ceiling. Thanks to the ease of installation and its high capacity, this desiccant blanket will allow you to save installation time.',
        tags: ['Hút ẩm', 'gel', 'container']
    },
    {
        id: 5,
        imageLink: 'https://absortech.com/wp-content/uploads/2021/11/absorgel-max_co2-neutral.jpg',
        productName: 'Absorgel Max&Compact',
        productDescription: 'AbsorGel® Max and Compact are desiccants that fit into highly loaded containers as, when installed, they are very close to the container ceiling. The AbsorHanger™ used for Max and Compact can easily be uninstalled upon arrival.',
        tags: ['Hút ẩm', 'gel', 'container']
    },
    {
        id: 6,
        imageLink: 'https://absortech.com/wp-content/uploads/2021/11/absorgel-sheet_in-box-container-desiccant.jpg',
        productName: 'Absorgel Sheet',
        productDescription: 'AbsorGel® Sheet is suitable for absorbing moisture inside crates, cartons and other types of packaging. AbsorGel Sheet is a modular sheet, available in different square combinations. It can be also used as a container desiccant, as a smaller version than AbsorGel Blanket.',
        tags: ['Hút ẩm', 'gel', 'container']
    }
]

const ProductPage = () => {
    return <>
        <div className='flex p-5 md:items-center justify-between max-[768px]:flex-col max-[768px]:gap-y-3'>
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/">Trang chủ</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/products">Sản phẩm</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        <Input className="max-w-[250px]" placeholder="Tìm sản phẩm"/>
    </div>
    <div className='md:flex max-w-screen flex-wrap gap-10'>
        {mockProducts.map(product => <ProductCard key={product.id} id={product.id} imageLink={product.imageLink}
                                                  mainBadget={product.mainBadget}
                                                  productName={product.productName}
                                                  productDescription={product.productDescription}
                                                  tags={product.tags}/>)}
    </div>
</>

}

export default ProductPage;