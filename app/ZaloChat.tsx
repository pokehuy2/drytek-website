import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";

const ZaloChat = () => {
    return <Link href="https://zalo.me/185880307247885075" className="fixed bottom-8 right-8 cursor-pointer">
        <Image src="/images/zalo-logo.png" width={50} height={50} alt={"zalo"} className="relative rounded-2xl border-2"/>
        <Badge variant="destructive" className="absolute -top-2 -right-2">1</Badge>
    </Link>
}

export default ZaloChat;