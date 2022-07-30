import React, { useEffect } from "react";

interface AlertProps {
    /** The text to show in the component.*/
    text: string;
    /** Whether show the component. */
    show: boolean;
    /** Callback to call to hide the component. */
    hideAlert: () => void;
}

/**
 * A component that render an Alert at the screen bottom.
 */
export function Alert({ text, show, hideAlert }: AlertProps) {
    useEffect(() => {
        const timeout = window.setTimeout(() => {
            show && hideAlert();
        }, 10000);
        return () => window.clearTimeout(timeout);
    });

    return (
        <button
            style={{ appearance: "none" }}
            className={
                (show ? "" : "hidden") +
                " fixed left-0 bottom-0 w-full py-2 bg-green-200 z-40"
            }
            onClick={() => hideAlert()}
        >
            <div className="container flex px-5 mx-auto max-w-8xl md:px-10 xl:px-20">
                <p>
                    <span className="px-2 py-1 mr-2 font-medium text-white uppercase bg-green-400 rounded-sm">
                        Info
                    </span>
                    {text}
                </p>
            </div>
        </button>
    );
}
