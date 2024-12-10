export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private",
        },
        sitemap: `${ProcessingInstruction.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
    };
}