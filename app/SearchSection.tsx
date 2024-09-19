import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from "@/components/ui/command";
import Link from "next/link";
import {products} from "@/app/data/products";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const SearchSection = ({open, setOpen} : Props) => {
    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Gõ tên sản phẩm hoặc bài viết để tìm kiếm..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Sản phẩm" onClick={() => setOpen(false)}>
                    {products.map(product => <CommandItem key={product.id}><Link href={`/products/${product.id}`}>{product.title}</Link></CommandItem>)}
                    {/*<CommandItem><Link href="/products/1">Absorpole</Link></CommandItem>*/}
                    {/*<CommandItem><Link href="/products/1">Absorbag</Link></CommandItem>*/}
                    {/*<CommandItem><Link href="/products/1">Absorgel Hanging</Link></CommandItem>*/}
                    {/*<CommandItem><Link href="/products/1">Absorgel Blanket</Link></CommandItem>*/}
                    {/*<CommandItem><Link href="/products/1">Absorgel Max&Compact</Link></CommandItem>*/}
                    {/*<CommandItem><Link href="/products/1">Absorgel Sheet</Link></CommandItem>*/}
                    {/*<CommandItem><Link href="/products/1">Absorgel Pouches</Link></CommandItem>*/}
                    {/*<CommandItem><Link href="/products/1">Túi</Link></CommandItem>*/}
                    {/*<CommandItem><Link href="/products/1">Nilon</Link></CommandItem>*/}
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Bài viết" onClick={() => setOpen(false)}>
                    <span className='italic pt-3 pl-3 text-xs'>Chưa có bài viết nào</span>
                    {/*<CommandItem><Link href="/knowledge/1">Lợi ích của Sản phẩm Hút Ẩm trong Cuộc Sống Hàng Ngày</Link></CommandItem>*/}
                    {/*<CommandItem><Link href="/knowledge/1">Hướng Dẫn Chọn Mua Sản phẩm Hút Ẩm Phù Hợp</Link></CommandItem>*/}
                    {/*<CommandItem><Link href="/knowledge/1">Cách Bảo Quản và Vệ Sinh Sản phẩm Hút Ẩm</Link></CommandItem>*/}
                    {/*<CommandItem><Link href="/knowledge/1">Top 5 Sản phẩm Hút Ẩm Tốt Nhất Năm 2024</Link></CommandItem>*/}
                    {/*<CommandItem><Link href="/knowledge/1">So Sánh Các Loại Sản phẩm Hút Ẩm: Hơi Nước và Hấp Thụ</Link></CommandItem>*/}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}

export default SearchSection;