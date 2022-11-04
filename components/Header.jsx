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
        <div>
            <div>
                <HeaderIcon Icon={HomeIcon} title="HOME" />
                <HeaderIcon Icon={UserIcon} title="CONTACT" />
                <HeaderIcon Icon={PhoneIcon} title="ACCOUNT" />
                <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />
            </div>

            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/440px-IMDB_Logo_2016.svg.png"
                width={100}
                height={100}
            />
        </div>
    );
};

export default Header;
