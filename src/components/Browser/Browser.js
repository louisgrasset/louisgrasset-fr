import * as React from 'react';
const Browser = (props) => {
    let address = props.url.substring(8, props.url.length);
    return (
        <div className="h-full rounded-xl ring-1 ring-black ring-opacity-5">
            <div className="grid items-center gap-6 px-4 py-2 rounded-tr-xl sm:rounded-t-xl bg-gradient-to-b from-gray-50 to-gray-100" style={{ gridTemplateColumns: '1fr minmax(min-content, 640px) 1fr' }}>
                <div className="flex space-x-1.5">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
                <div className="overflow-hidden border border-black rounded-md shadow-sm border-opacity-5">
                    <div className="bg-gradient-to-b from-white to-gray-50 text-sm py-1.5 text-center">{address}</div>
                </div>
            </div>
            <div className="relative pb-8 -mb-8 bg-white border-t border-gray-200 rounded-b-xl">
                <div className="overflow-auto">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Browser;