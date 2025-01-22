import { defineMiddleware } from 'astro:middleware';
import { maintenanceConfig } from './config/maintenance';

export const onRequest = defineMiddleware(async (context, next) => {
    const url = new URL(context.request.url);
    const path = url.pathname.replace(/\/$/, ''); // Remove trailing slash
    
    console.log('Middleware running:', {
        path,
        maintenanceEnabled: maintenanceConfig.enabled
    });

    // Skip maintenance check for maintenance page itself
    if (path === '/maintenance') {
        return next();
    }

    // Check if maintenance mode is enabled
    if (maintenanceConfig.enabled) {
        // Check if path is allowed
        const isAllowedPath = maintenanceConfig.allowedPaths.some(allowedPath => {
            const normalizedAllowedPath = allowedPath.replace(/\/$/, ''); // Remove trailing slash
            if (normalizedAllowedPath.endsWith('*')) {
                return path.startsWith(normalizedAllowedPath.slice(0, -1));
            }
            return path === normalizedAllowedPath;
        });

        if (!isAllowedPath) {
            return context.redirect('/maintenance');
        }
    }

    return next();
}); 
