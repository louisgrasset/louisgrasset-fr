/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

export default function HTML(props: {
    htmlAttributes: JSX.IntrinsicAttributes &
        React.ClassAttributes<HTMLHtmlElement> &
        React.HtmlHTMLAttributes<HTMLHtmlElement>;
    headComponents:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined;
    bodyAttributes: JSX.IntrinsicAttributes &
        React.ClassAttributes<HTMLBodyElement> &
        React.HTMLAttributes<HTMLBodyElement>;
    preBodyComponents:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined;
    body: any;
    postBodyComponents:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined;
}) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
                />
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div
                    key={"body"}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
            </body>
        </html>
    );
}
