import {ReactNode} from "react";
import WebsiteLayout from "@/app/WebsiteLayout";

const KnowledgeLayout = ({children}: Readonly<{ children: ReactNode }>) => {
    return <WebsiteLayout>{children}</WebsiteLayout>;
}

export default KnowledgeLayout