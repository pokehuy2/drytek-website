export type ProductItem = {
    productId: string;
    productName: string;
}

export type CategoryItem = {
    categoryId: number;
    categoryName: string;
    children?: ProductItem[];
}