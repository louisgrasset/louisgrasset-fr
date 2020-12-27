import * as React from "react";

const Alert = ({ text, show }) => {
    return (
        <div className={(show ? "" : "hidden") + " w-full px-3 py-2 bg-green-200"}>
            <div className="container mx-auto max-w-8xl xl:px-20">
                <p>
                    <span className="px-2 py-1 mr-2 font-medium text-white uppercase bg-green-400 rounded-sm">
                        Info
                    </span>
                    {text}
                </p>
            </div>
        </div >
    );
};

export default Alert;