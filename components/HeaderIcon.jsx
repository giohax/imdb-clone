import React from "react";

const HeaderIcon = ({ Icon, title }) => {
    return (
        <div className="mx-4 flex flex-col hover:text-white active:text-red-400 cursor-pointer lg:mx-6">
            <Icon className="h-5" />
            <p className="my-0 text-sm">{title}</p>
        </div>
    );
};

export default HeaderIcon;
