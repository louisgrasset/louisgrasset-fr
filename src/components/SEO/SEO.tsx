import { PageContext } from "gatsby/internal";
import { useMemo, useState } from "react";
import { Language, Languages } from "../../types";
import translations from "../../data/translations";
import * as React from "react";

export function SEO({ pageContext }: { pageContext: PageContext }) {
    const [language] = useState<Language>(pageContext.langKey);
    const lang = useMemo(() => translations[language], [language]);
    const metaTitle = lang.meta_title;
    const metaDescription = lang.meta_description;
    const alternates = useMemo(() => {
        const availableAlternates = [...Languages.keys()]
            .filter((l) => l.code !== language)
            .map((l) => (
                <link
                    key={l.code.toLowerCase()}
                    rel="alternate"
                    hrefLang={l.code}
                    href={`https://louisgrasset.fr/${l.code}`}
                />
            ));

        return [
            ...availableAlternates,
            <link
                key="x-default"
                rel="alternate"
                hrefLang="x-default"
                href={`https://louisgrasset.fr`}
            />,
        ];
    }, []);
    const preloads = useMemo(
        () =>
            ["Regular", "SemiBold", "Bold"].map((fontWeight) => (
                <link
                    key={fontWeight.toLowerCase()}
                    rel="preload"
                    crossOrigin="anonymous"
                    href={`/fonts/source-sans-pro/SourceSansPro-${fontWeight}.woff2`}
                    as="font"
                    type="font/woff2"
                />
            )),
        []
    );
    return (
        <>
            <title>{metaTitle}</title>
            {alternates}
            {preloads}
            <meta name="charset" content="utf-8" />
            <meta name="description" content={metaDescription} />
            <meta name="author" content="Louis Grasset" />
            <meta
                name="keywords"
                content="freelance, louis, grasset, front end, louisgrasset, fullstack, vosges, lyon, développeur, dev, développement, portfolio, php, css, sass, intégration, web, vitrine, laravel, reactjs, react, javascript, sql, html, entrepreneur, software engineer"
            />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta
                name="twitter:image"
                content="https://louisgrasset.fr/tw-preview.png"
            />
            <meta name="twitter:image:alt" content="website preview" />
            <meta property="og:type" content="article" />
            <meta property="og:locale" content={lang.language_code} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta
                property="og:image"
                content="https://louisgrasset.fr/og-preview.png"
            />
        </>
    );
}
