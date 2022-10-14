import React, { useCallback, useEffect, useState } from "react";
import { Translation } from "../../data/translations";
interface CarbonProps {
    /** Language string to get translations. */
    lang: Translation;
}
export function Carbon({ lang }: CarbonProps) {
    const url = "https://louisgrasset.fr";
    const [data, setData] = useState({ co2: "", percentage: "" });

    const truc = useCallback(async (url: string) => {
        if (!url) {
            throw Error("Website carbon: url is null");
        }

        try {
            const res = await fetch(
                `https://api.websitecarbon.com/b?url=${encodeURIComponent(url)}`
            );

            if (!res.ok) throw Error(JSON.stringify(await res.json()));
            const data = {
                ...(await res.json()),
                timestamp: Date.now(),
            };

            localStorage.setItem(`wcb_${url}`, JSON.stringify(data));

            setData({ co2: data.c, percentage: data.p });
        } catch (e) {
            console.error(e);
            localStorage.removeItem(`wcb_${url}`);
        }
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            const data = localStorage.getItem(`wcb_${url}`);
            if (data) {
                const parsed = JSON.parse(data);
                if (parsed?.timestamp + 86400000 > Date.now()) {
                    setData({ co2: parsed.c, percentage: parsed.p });
                } else {
                    await truc(url);
                }
            } else {
                await truc(url);
            }
        };

        fetchData().catch(console.error);
    }, []);
    return (
        <div
            className={`p-6 "border-gray-200 text-gray-900 dark:border-gray-800 dark:text-gray-500 border-[1px] shadow-lg sm:w-9/12 max-w-md mx-auto rounded-lg text-center sm:text-left`}
        >
            <div
                className={
                    "flex flex-col sm:flex-row justify-between flex-wrap max-w-10 sm:max-w-none "
                }
            >
                <span className={"font-semibold uppercase text-gray-400"}>
                    {lang["carbon_title"]}
                </span>
                <div>
                    <div className="my-4 sm:my-1 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:bg-opacity-30 text-green-800 dark:text-green-600">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 649 745"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-green-500"
                        >
                            <g transform="matrix(1,0,0,1,-275.903,-228.001)">
                                <path
                                    d="M312,970.56C324.348,973.767 337.469,971.923 348.453,965.439C359.441,958.954 367.398,948.361 370.558,936.001C380.851,895.29 396.464,856.11 416.999,819.481C482.218,864.118 561.499,883.379 639.939,873.641C718.369,863.899 790.529,825.825 842.849,766.591C895.165,707.357 924.029,631.041 924.001,552.001L924.001,348.001C924.001,316.177 911.356,285.653 888.853,263.149C866.349,240.645 835.826,228.001 804.001,228.001L600.001,228.001C518.634,228.071 440.271,258.751 380.491,313.942C320.706,369.137 283.878,444.802 277.331,525.902C270.776,607 294.979,687.602 345.124,751.672C314.616,801.399 291.8,855.452 277.444,911.992C274.237,924.34 276.081,937.461 282.565,948.445C289.05,959.433 299.643,967.39 312.003,970.55L312,970.56ZM600,324L804,324C810.363,324 816.469,326.527 820.969,331.031C825.473,335.531 828,341.636 828,348L828,552C828,612.469 803.98,670.46 761.219,713.22C718.461,755.982 660.469,780.001 599.999,780.001C553.874,780.044 508.831,766.021 470.879,739.802C513.734,686.888 565.266,641.646 623.279,606.002C638.283,597.686 647.713,581.994 648.009,564.842C648.31,547.686 639.435,531.678 624.732,522.842C610.025,514.006 591.724,513.686 576.716,522.002C511.607,561.178 453.456,610.893 404.636,669.122C376.902,622.802 366.507,568.142 375.296,514.872C384.089,461.606 411.499,413.182 452.644,378.232C493.792,343.279 546.007,324.064 599.994,324.002L600,324Z"
                                    fill="currentColor"
                                />
                            </g>
                        </svg>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://www.websitecarbon.com/website/${url}`}
                        >
                            {data.co2 ? data.co2 : "-"}g {lang["carbon_of"]} CO
                            <span>2</span>/{lang["carbon_view"]}
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-1">
                <span className="text-base font-normal">
                    {data.percentage
                        ? parseInt(data.percentage) > 50
                            ? `${lang["carbon_cleaner_than"]}`
                            : `${lang["carbon_dirtier_than"]}`
                        : ""}
                </span>
                <div className="items-baseline text-2xl font-semibold text-pink-500 sm:flex">
                    {data.percentage}%
                    <span className="ml-2 text-sm font-medium text-gray-500">
                        {lang["carbon_of_tested_pages"]}
                    </span>
                </div>

                <hr className="relative -left-6 w-[calc(100%+48px)] mt-5 mb-1 h-px bg-black dark:bg-white opacity-10 border-0 " />
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.websitecarbon.com/"
                    className="hover:underline underline-offset-2 text-gray-400 text-xs opacity-50"
                >
                    {lang["carbon_attribution"]} websitecarbon.com
                </a>
            </div>
        </div>
    );
}
