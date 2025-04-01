export function checkAndSetReferral() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // List of all possible UTM parameters matching middleware.ts
    const utmParams = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "ref"
    ];

    // Check for each parameter and set cookie if present
    utmParams.forEach((param) => {
        const paramValue = urlParams.get(param);
        if (paramValue) {
            // Special case for ref parameter
            if (param === "ref") {
                document.cookie = `utm_campaign=referral_program; path=/; max-age=2592000; secure;`;
                document.cookie = `referral=${paramValue}; path=/; max-age=2592000; secure;`;
                            } else {
                document.cookie = `${param}=${paramValue}; path=/; max-age=2592000; secure;`;
            }
        }
    });
}