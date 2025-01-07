import React from "react";
interface WhiteButtonProps {
    buttonText: string;
}

const PinkButton: React.FC<WhiteButtonProps> = ({ buttonText }) => {
    return (
        <div>
            <div className="bg-white rounded-lg w-full">
                <button
                    className="hover:bg-gradient-to-br  text-backgroundBlackOG  font-bold hover:from-roseMain hover:to-grayText   bg-roseMain hover:text-backgroundBlackOG opacity-100  w-72 font-medium py-2 px-6 sm:px-10 rounded-lg "
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default PinkButton;
