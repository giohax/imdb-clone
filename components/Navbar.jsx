import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    return (
        <div className="flex justify-center space-x-6 bg-gray-600 text-gray-200 select-none text-l p-3">
            {Object.entries(requests).map(([key, { title, url }]) => (
                <h1
                    className="cursor-pointer hover:text-white active:text-red-400"
                    key={key}
                    onClick={() => router.push(`?genre=${key}`)}
                >
                    {title}
                </h1>
            ))}
        </div>
    );
};

export default Navbar;
