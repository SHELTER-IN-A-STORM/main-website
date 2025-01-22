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