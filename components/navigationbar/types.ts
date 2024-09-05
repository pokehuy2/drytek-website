export type ProductItem = {
    productId: number;
    productName: string;
}

export type CategoryItem = {
    categoryId: number;
    categoryName: string;
    children?: ProductItem[];
}