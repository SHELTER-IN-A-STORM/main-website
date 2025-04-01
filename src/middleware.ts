import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(({ request, cookies }, next) => {
    const url = new URL(request.url);

    // List of all possible UTM parameters
    const utmParams = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "ref",  // Adding a custom referral parameter
    ];

    utmParams.forEach((param) => {
        const paramValue = url.searchParams.get(param);
        if (paramValue) {
            cookies.set(param, paramValue, {
                path: "/",
                httpOnly: false,  // Allowing JavaScript to access (if needed)
                secure: true,
                maxAge: 60 * 60 * 24 * 30, // 30 days
            });
        }
    });

    return next();
});
