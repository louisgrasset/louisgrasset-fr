/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefObject } from "react";

export type PageRefs = {
    top: RefObject<any> | undefined;
    companies: RefObject<any> | undefined;
    footer: RefObject<any> | undefined;
};
