// Create a new utility file for analytics
export function trackEvent(category: string, action: string, label?: string) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', action, {
            event_category: category,
            event_label: label
        });
        
        // Also log the event to console
        console.log('Analytics Event:', {
            action,
            category,
            label
        });
    }
}

export function initializeGoogleAnalytics() {
    // Create script elements
    const scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-1E5V15NW2N';
    
    const inlineScript = document.createElement('script');
    inlineScript.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1E5V15NW2N');
    `;

    // Append to document head
    document.head.appendChild(scriptTag);
    document.head.appendChild(inlineScript);
    
    console.log('Google Analytics initialized');
}

export function loadAnalytics() {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'accepted' || consent === 'dismissed') {
        initializeGoogleAnalytics();
    }
}

export function handleCookieConsent(action: 'accept' | 'reject' | 'dismiss') {
    localStorage.setItem('cookie-consent', action);
    if (action === 'accept' || action === 'dismiss') {
        initializeGoogleAnalytics();
    }
} 