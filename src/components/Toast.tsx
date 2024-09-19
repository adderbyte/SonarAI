import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from "./ui/toaster";
import { cn } from "@/lib/utils";

interface ToastProps {
    title: string;
    description?: string;
    variant: "default" | "destructive" | null | undefined;
}

const Toast: React.FC<ToastProps> = ({ title, variant, description }) => {
    const {toast} = useToast();

    useEffect(() => {
        toast({
            variant: variant,
            title: title,
            description: description,
            className: cn('top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'),
        });
    }, [toast, title, variant, description]);

    return <Toaster />;
};

export default Toast;