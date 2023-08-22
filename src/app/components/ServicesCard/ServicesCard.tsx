import { type } from "os";
import React from "react";

type Service = {
    item: {
        icon: string;
        alttext: string;
        title: string;
        description: string;
    }
};

const ServicesCard = (props: Service) => {
    return (
        <div className="border border-light-gray relative">
            <div className="p-12">
                <img src={props.item.icon} alt={props.item.alttext} />
                <h3 className="py-5">{props.item.title}</h3>
                <p className="pb-8">{props.item.description}</p>
            </div>
            <div className="absolute right-0 bottom-0">
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 72 72"
                    className="fill-primary"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="72" height="72" fill="#E31E30" />
                    <path
                        d="M38.3703 46.6203C37.6543 47.3363 37.6543 48.4971 38.3703 49.213C39.0863 49.929 40.2471 49.929 40.963 49.213L51.5833 38.5927C53.0153 37.1608 53.0153 34.8392 51.5833 33.4073L40.963 22.787C40.2471 22.071 39.0863 22.071 38.3703 22.787C37.6543 23.5029 37.6543 24.6637 38.3703 25.3797L47.1573 34.1667H21.3333C20.3208 34.1667 19.5 34.9875 19.5 36C19.5 37.0125 20.3208 37.8333 21.3333 37.8333H47.1573L38.3703 46.6203Z"
                        fill="white"
                    />
                </svg>
            </div>
        </div>
    );
};

export default ServicesCard;
