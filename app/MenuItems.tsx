import Link from "next/link";

const MenuItems = () => {
    return (
    <>
        <li><Link href='/about' className='font-bold color-primary rounded-3xl'>Về chúng tôi</Link></li>
        <li>
            <details>
                <summary className='font-bold rounded-3xl'>Sản phẩm</summary>
                <ul className="menu xl:menu-horizontal bg-white rounded-box lg:min-w-max">
                    <li><Link href='/products'>Tất cả sản phẩm</Link></li>
                    <li><h2 className='menu-title'>Hút ẩm Container</h2>
                        <ul>
                            <li><Link href='/products/1'>Absorpole</Link></li>
                            <li><Link href='/products/1'>Absorbag</Link></li>
                            <li><Link href='/products/1'>Absorgel Hanging</Link></li>
                            <li><Link href='/products/1'>Absorgel Blanket</Link></li>
                            <li><Link href='/products/1'>Absorgel Max&Compact</Link></li>
                            <li><Link href='/products/1'>Absorgel Sheet</Link></li>
                        </ul>
                    </li>
                    <li>
                        <h2 className='menu-title'>Hút ẩm box</h2>
                        <ul>
                            <li><Link href='/products/1'>Absorgel Pouches</Link></li>
                            <li><Link href='/products/1'>Absorgel Sheet</Link></li>
                        </ul>
                    </li>
                </ul>
            </details>
        </li>
        <li><Link href='/knowledge' className='font-bold rounded-3xl'>Kiến thức</Link></li>
    </>
    )
}

export default MenuItems;