import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const WhyMeCard = () => {
    return (
        <Card className="my-5">
            <CardHeader className="p-4">
                <CardTitle className="text-md">Câu hỏi về sản phẩm Absorpole</CardTitle>
                <Separator />
                <Accordion type="single" collapsible className="w-full text-sm">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Thiết kế của sản phẩm như thế nào?</AccordionTrigger>
                        <AccordionContent>
                            Thiết kế của sản phẩm rất chắc chắn.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Sản phẩm được làm từ gì?</AccordionTrigger>
                        <AccordionContent>
                            Được làm bằng 100% nhựa tái chế
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Chất làm khô hộp có hại cho môi trường không?</AccordionTrigger>
                        <AccordionContent>
                            Chất làm khô hộp hấp thụ là chất trung tính CO2.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Lượng CO2?</AccordionTrigger>
                        <AccordionContent>
                            Lượng CO2 thấp trước khi bù trừ
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Sản phẩm có dễ dàng tái chế không?</AccordionTrigger>
                        <AccordionContent>
                            Dễ dàng tái chế và/hoặc tái sử dụng với chương trình R-to-R
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardHeader>
        </Card>
    )
}

export default WhyMeCard