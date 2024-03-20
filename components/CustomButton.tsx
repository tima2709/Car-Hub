'use client'

import {CustomButtonProps} from "@/types";
import Image from "next/image";

const CustomButton = ({
                          title,
                          containerStyles,
                          handleClick,
                          btnType,
                          rightIcon,
                      }: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 text-white text-[14px] leading-[17px] font-bold`}>
              {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="right icon"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    );
};

export default CustomButton;