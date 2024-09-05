import {memo} from "react";
import * as React from "react";
import {NavigationMenuLink} from "@/components/ui/navigation-menu";
import {cn} from "@/lib/utils";
import {CategoryItem} from "@/components/navigationbar/types";

const ProductNavBarItems = ({items} : {items: CategoryItem[]}) => {
    return items?.map((category) => {
        return (
            <li key={category.categoryId}>
                <div className="text-sm font-medium leading-none p-2">{category.categoryName}</div>
                <ul>
                    {category?.children?.map((product) => <ListItem key={product.productId} href={`/products/${product.productId}`}>{product.productName}</ListItem>)}
                </ul>
            </li>
        )
    })
}

export default memo(ProductNavBarItems);

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"