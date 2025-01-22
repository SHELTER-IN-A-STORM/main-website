import { defineMiddleware } from 'astro:middleware';
import { maintenanceConfig } from './config/maintenance';

export const onRequest = defineMiddleware(async (context, next) => {
    const url = new URL(context.request.url);
    
    console.log('Middleware running:', {
        path: url.pathname,
        maintenanceEnabled: maintenanceConfig.enabled
    });

    // Skip maintenance check for maintenance page itself
    if (url.pathname === '/maintenance') {
        return next();
    }

    // Check if maintenance mode is enabled
    if (maintenanceConfig.enabled) {
        // Check if path is allowed
        const isAllowedPath = maintenanceConfig.allowedPaths.some(path => {
            if (path.endsWith('*')) {
                return url.pathname.startsWith(path.slice(0, -1));
            }
            return url.pathname === path;
        });

        if (!isAllowedPath) {
            return context.redirect('/maintenance');
        }
    }

    return next();
}); 
