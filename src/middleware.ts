import { defineMiddleware } from 'astro:middleware';
import { maintenanceConfig } from './config/maintenance';

export const onRequest = defineMiddleware(async (context, next) => {
    const url = new URL(context.request.url);
    const path = url.pathname.replace(/\/$/, ''); // Remove trailing slash
    
    // Skip middleware for static assets and maintenance page
    if (path === '/maintenance' || 
        path.startsWith('/assets/') || 
        path.startsWith('/_astro/') ||
        path.startsWith('/favicon')) {
        return next();
    }

    // Check if maintenance mode is enabled
    if (maintenanceConfig.enabled) {
        // Check if path is allowed
        const isAllowedPath = maintenanceConfig.allowedPaths.some(allowedPath => {
            const normalizedAllowedPath = allowedPath.replace(/\/$/, '');
            if (normalizedAllowedPath.endsWith('*')) {
                return path.startsWith(normalizedAllowedPath.slice(0, -1));
            }
            return path === normalizedAllowedPath;
        });

        if (!isAllowedPath) {
            return Response.redirect(new URL('/maintenance', url), 307);
        }
    }

    return next();
}); 
