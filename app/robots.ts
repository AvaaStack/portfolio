export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://avastack.dev/sitemap.xml",
    };
}