import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ProductNavBarItems from "@/components/navigationbar/ProductNavBarItems";
import SearchSectionButton from "@/components/navigationbar/SearchSectionButton";
import NavBarSheet from "@/components/navigationbar/NavBarSheet";
import prisma from "@/prisma/client";
import {CategoryItem, ProductItem} from "@/components/navigationbar/types";

export async function NavBar() {

    const categories = await prisma.category.findMany();
    const products = await prisma.product.findMany();

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

    console.log('nav')

    return (
        <>
        <div className='fixed top-0 w-full border-b-[1px] backdrop-blur-md z-10 max-[768px]:p-3'>
            <div className='flex flex-row items-center max-w-[1440px] justify-between gap-x-3 mx-auto'>
                <div className="flex flex-row items-center gap-x-3">
                    <NavBarSheet items={items} />
                    <Link href='/'><Image src='/logo/logo.png' width={150} height={30} alt="logo"/></Link>
                </div>
                <NavigationMenu className='hidden md:flex p-3 items-center'>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Trang chủ
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/about" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Về chúng tôi
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Sản phẩm</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[550px] lg:grid-cols-[143px_191px_191px_191px] overflow-x-scroll">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 p-6 no-underline outline-none focus:shadow-md"
                                                href="/products"
                                            >
                                                <div className="mb-2 mt-4 text-lg font-medium text-white">
                                                    Tất cả sản phẩm
                                                </div>
                                                <p className="text-sm leading-tight text-white">
                                                    Bấm để vào trang sản phẩm
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ProductNavBarItems items={items}/>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/knowledge" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Kiến thức
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <SearchSectionButton />
            </div>
        </div>
        </>
    )
}
