export type ProductItem = {
    productId: string;
    productName: string;
}

export type CategoryItem = {
    categoryId: string;
    categoryName: string;
    children?: ProductItem[];
}