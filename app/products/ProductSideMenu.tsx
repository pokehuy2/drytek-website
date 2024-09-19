import Link from "next/link";
import {CategoryItem, ProductItem} from "@/components/navigationbar/types";
import {products} from "@/app/data/products";
import {categories} from "@/app/data/categories";
const ProductSideMenu = () => {
    const productMap: { [key: string]: ProductItem[] } = {};

    products.forEach(product => {
        const productItem: ProductItem = {
            productId: product.id,
            productName: product.title,
        };

        if (!productMap[product.categoryId]) {
            productMap[product.categoryId] = [];
        }

        productMap[product.categoryId].push(productItem);
    });

    const items: CategoryItem[] = categories.map(category => ({
        categoryId: category.id,
        categoryName: category.title,
        children: productMap[category.id] || [],
    }));

    return (
        <div className="hidden md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex-1">
                    <aside className="grid items-start p-2 text-sm font-medium lg:px-4 border-[1px] rounded-lg mt-3">
                        <Link
                            href="/products"
                            className="flex items-center font-bold gap-3 rounded-lg hover:bg-muted hover:cursor-pointer px-1 py-2 transition-all hover:text-primary"
                        >
                            Tất cả sản phẩm
                        </Link>
                        {items?.map(category => (<div key={category.categoryId}><h3 className="font-bold py-2 px-1">{category.categoryName}</h3>{category.children?.map(product =>
                            <Link
                                key={product.productId}
                                href={`/products/${product.productId}`}
                                className="flex items-center gap-3 rounded-lg hover:bg-muted hover:cursor-pointer px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                {product.productName}
                            </Link>
                        )}</div>))}

                        {/*<div>*/}
                        {/*    <h3 className="font-bold py-2 px-1">Hút ẩm Container</h3>*/}
                        {/*    <Link*/}
                        {/*        href="/products/1"*/}
                        {/*        className="flex items-center gap-3 rounded-lg hover:bg-muted hover:cursor-pointer px-3 py-2 text-muted-foreground transition-all hover:text-primary"*/}
                        {/*    >*/}
                        {/*        Absorpole*/}
                        {/*    </Link>*/}
                        {/*    <Link*/}
                        {/*        href="/products/1"*/}
                        {/*        className="flex items-center gap-3 rounded-lg hover:bg-muted hover:cursor-pointer px-3 py-2 text-muted-foreground transition-all hover:text-primary"*/}
                        {/*    >*/}
                        {/*        Absorbag*/}
                        {/*    </Link>*/}
                        {/*    <Link*/}
                        {/*        href="/products/1"*/}
                        {/*        className="flex items-center gap-3 rounded-lg hover:bg-muted hover:cursor-pointer px-3 py-2 text-muted-foreground transition-all hover:text-primary"*/}
                        {/*    >*/}
                        {/*        absorgelhanging*/}
                        {/*    </Link>*/}
                        {/*    <Link*/}
                        {/*        href="/products/1"*/}
                        {/*        className="flex items-center gap-3 rounded-lg hover:bg-muted hover:cursor-pointer px-3 py-2 text-muted-foreground transition-all hover:text-primary"*/}
                        {/*    >*/}
                        {/*        absorgelblanket*/}
                        {/*    </Link>*/}
{/*    <Link*/}
{/*        href="/products/1"*/}
{/*        className="flex items-center gap-3 rounded-lg hover:bg-muted hover:cursor-pointer px-3 py-2 text-muted-foreground transition-all hover:text-primary"*/}
{/*    >*/}
{/*        absorgelmax&Compact*/}
{/*    </Link>*/}
{/*    <Link*/}
{/*        href="/products/1"*/}
{/*        className="flex items-center gap-3 rounded-lg hover:bg-muted hover:cursor-pointer px-3 py-2 text-muted-foreground transition-all hover:text-primary"*/}
{/*    >*/}
{/*        Absorgel Sheet*/}
{/*    </Link>*/}
{/*</div>*/}
{/*<div>*/}
{/*    <h3 className="font-bold py-2 px-1">Hút ẩm Box</h3>*/}
{/*    <Link*/}
{/*        href="/products/1"*/}
{/*        className="flex items-center gap-3 rounded-lg hover:bg-muted hover:cursor-pointer px-3 py-2 text-muted-foreground transition-all hover:text-primary"*/}
{/*    >*/}
{/*        Absorgel Pouches*/}
{/*    </Link>*/}
{/*    <Link*/}
{/*        href="/products/1"*/}
{/*        className="flex items-center gap-3 rounded-lg hover:bg-muted hover:cursor-pointer px-3 py-2 text-muted-foreground transition-all hover:text-primary"*/}
{/*    >*/}
{/*        Absorgel Sheet*/}
{/*    </Link>*/}
{/*</div>*/}
{/*<div>*/}
{/*    <h3 className="font-bold py-2 px-1">Nilon / Túi</h3>*/}
{/*</div>*/}
</aside>
</div>
</div>
</div>
)
}

export default ProductSideMenu;