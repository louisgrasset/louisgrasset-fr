import * as React from "react";

export const Alert = ({ text, show, hideAlert }) => {
    React.useEffect(() => {
        setTimeout(() => {
            show && hideAlert();
        }, 10000);
    });

    return (
        <div className={(show ? "" : "hidden") + " fixed left-0 bottom-0 w-full py-2 bg-green-200 z-40"} onClick={() => hideAlert()}>
            <div className="container flex px-5 mx-auto max-w-8xl md:px-10 xl:px-20">
                <p>
                    <span className="px-2 py-1 mr-2 font-medium text-white uppercase bg-green-400 rounded-sm">
                        Info
                    </span>
                    {text}
                </p>
            </div>
        </div>
    );
};
