# Deployment Guide for cPanel

This guide explains how to build and deploy your SvelteKit site to a cPanel web hosting server.

## Building the Site

To build the site for production, run:

```bash
npm run build
```

This will generate a static site in the `dist` folder with the following structure:

```
dist/
├── _app/              # Application assets (JS, CSS)
├── images/            # Static images
├── index.html         # Main HTML file
└── robots.txt         # SEO robots file
```

## Deployment to cPanel

### Option 1: Manual Upload via File Manager

1. Build the site locally:
   ```bash
   npm run build
   ```

2. Log into your cPanel account

3. Navigate to **File Manager**

4. Go to the `public_html` directory (or your domain's root directory)

5. **IMPORTANT**: Upload the **contents** of the `dist` folder, not the folder itself:
   - Upload `_app` folder
   - Upload `images` folder
   - Upload `index.html`
   - Upload `robots.txt`

6. Your site should now be live!

### Option 2: Manual Upload via FTP

1. Build the site locally:
   ```bash
   npm run build
   ```

2. Connect to your hosting via FTP using:
   - Host: Your domain or server IP
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21 (or 22 for SFTP)

3. Navigate to `public_html` (or your domain's root directory)

4. Upload the **contents** of the `dist` folder

5. Your site should now be live!

### Important Notes

- **Always upload the contents of the `dist` folder**, not the folder itself
- The `index.html` file must be in the root of `public_html`
- Make sure to clear your browser cache after deployment to see changes
- For custom domains, ensure your domain is pointed to your cPanel server

## .htaccess Configuration

cPanel servers typically use Apache. You may want to add an `.htaccess` file in your `public_html` directory for:

- HTTPS redirect
- Caching rules
- URL rewriting

Example `.htaccess`:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

## Rebuilding and Redeploying

Whenever you make changes to your site:

1. Run `npm run build` to rebuild the site
2. Upload the new contents of the `dist` folder to your cPanel server
3. Clear your browser cache to see the changes

## Troubleshooting

- **Site not loading**: Check that `index.html` is in the correct directory
- **Images not showing**: Verify the `images` folder was uploaded correctly
- **Styles not working**: Ensure the `_app` folder with CSS files was uploaded
- **404 errors**: Check file permissions (should be 644 for files, 755 for folders)
