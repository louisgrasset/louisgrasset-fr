import * as React from "react";
interface ToastProps {
    /* The title to display */
    title: string;
    /* The toast message */
    message: string;
    /* The onClick callback */
    handleClick: () => void;
    /* The callback to call when Toast is closed */
    handleClose: () => void;
}

export function Toast({
    title,
    message,
    handleClick,
    handleClose,
}: ToastProps) {
    return (
        <div
            className="z-50 fixed bottom-4 right-3 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert"
        >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-pink-500 bg-pink-100 rounded-xl dark:bg-gray-600 opacity-80 dark:text-white">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 1200 1200"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M259 408h48c3 78 33 154 86 212-28 10-57 16-86 16h-12a48 48 0 0 0 0 96h12c59 0 117-16 168-45 50 29 107 44 164 45l-74 186a48 48 0 1 0 89 36l36-90h170l36 90a48 48 0 1 0 89-36L849 578a80 80 0 0 0-148 0l-23 58h-35c-29 0-58-6-85-16 52-59 82-134 85-212h48a48 48 0 1 0 0-96H523v-48a48 48 0 1 0-96 0v48H259a48 48 0 1 0 0 96zm563 360h-93l46-117zM475 567c-43-42-69-99-72-159h143c-3 60-28 117-71 159z"
                        fill="currentColor"
                    />
                </svg>
            </div>
            <div
                className="ml-3 text-sm font-normal cursor-pointer"
                onClick={handleClick}
            >
                <span className="font-semibold">{title} </span>
                {message}
            </div>
            <button
                type="button"
                className="z-40 ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                aria-label="Close"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleClose}
            >
                <span className="sr-only">Close</span>
                <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </button>
        </div>
    );
}
