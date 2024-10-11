"use client"
import {useBackButton} from "@telegram-apps/sdk-react";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function Page() {
    const bb = useBackButton();
    const router = useRouter();

    useEffect(() => {
        bb.show();
        if(bb.isVisible) {
            console.log("Кнопка видна");
        }
        const handleButtonClick = () => {
            console.log("click");
            router.push("/");
        }
        bb.on("click", handleButtonClick)
        return () => {
            bb.off("click", handleButtonClick)
            bb.hide();
        }
    }, [bb, router]);

    return (
        <div><h1>Test</h1></div>
    )
}