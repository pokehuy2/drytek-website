import {memo} from "react";
import NavBarProductSheetItem from "../NavBarProductSheetItem";
import * as React from "react";
import { CategoryItem } from '@/components/navigationbar/types'

const NavBarProductSheetComponent = ({items} : {items : CategoryItem[]}) => {
    return items?.map((category) => {
        return <>
            <h3 key={category.categoryId} className="font-bold text-muted-foreground py-2">{category.categoryName}</h3>
            {category.children?.map((product) => <NavBarProductSheetItem key={product.productId} itemLink={`/products/${product.productId}`} itemNode={product.productName} />)}
        </>
    })
}

export default memo(NavBarProductSheetComponent);