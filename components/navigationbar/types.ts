export type ProductItem = {
    productId: string;
    productName: string;
}

export type CategoryItem = {
    categoryId: string;
    categoryName: string;
    children?: ProductItem[];
}

export type TProductImage = {
    image: string;
    alt: string;
}

export type TProduct = {
    id: string,
    thumb: string,
    badget?: string,
    description: string,
    title: string,
    categoryId: string,
    images: TProductImage[],
    advantages: string[],
    details: string[],
    dimension: string
}