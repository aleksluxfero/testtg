"use client"
import {useBackButton} from "@telegram-apps/sdk-react";
import {useEffect} from "react";

export default function Page() {
    const bb = useBackButton();

    useEffect(() => {
        bb.show();
        return () => {
            bb.hide();
        }
    }, [bb]);

    return (
        <div><h1>Test</h1></div>
    )
}