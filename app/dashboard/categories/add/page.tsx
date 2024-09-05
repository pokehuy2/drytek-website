'use client'
import {AlertCircle} from "lucide-react";
import {useState} from "react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import CategoryForm from "@/app/dashboard/categories/_components/CategoryForm";

const AddCategoryPage = () => {
    const [error, setError] = useState()

    return (
        <>
            {error && <Alert variant="destructive" className="mb-5">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    {error}
                </AlertDescription>
            </Alert>}
            <CategoryForm />
        </>
    )
}

export default AddCategoryPage;