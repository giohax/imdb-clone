import React from "react";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
    HomeIcon,
    UserIcon,
    PhoneIcon,
    InformationCircleIcon,
} from "@heroicons/react/solid";

const Header = () => {
    return (
        <div className="bg-gray-700 text-gray-200 flex flex-col sm:flex-row items-center sm:justify-between p-3 select-none">
            <div className="flex mb-5 sm:mb-0">
                <HeaderIcon Icon={HomeIcon} title="Home" />
                <HeaderIcon Icon={UserIcon} title="Contact" />
                <HeaderIcon Icon={PhoneIcon} title="Account" />
                <HeaderIcon Icon={InformationCircleIcon} title="About" />
            </div>

            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/440px-IMDB_Logo_2016.svg.png"
                width={100}
                height={100}
                className="cursor-pointer active:brightness-110"
            />
        </div>
    );
};

export default Header;
