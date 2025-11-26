# Deployment Guide - Dhaba Indian Kitchen Website

## 🚀 Quick Deployment Checklist

### Before Deployment:
1. ✅ Test all changes locally
2. ✅ Update version number in `includes/version.php`
3. ✅ Clear your browser cache and test
4. ✅ Check responsive design on different screen sizes
5. ✅ Verify all images load correctly
6. ✅ Test JavaScript functionality

### Deployment Steps:

#### Step 1: Update Version Number
Edit `includes/version.php` and increment the version:

```php
// Change from:
define('ASSETS_VERSION', '2.0.1');

// To (for example):
define('ASSETS_VERSION', '2.0.2');
```

**Version Numbering Convention:**
- **MAJOR.MINOR.PATCH** (e.g., 2.0.1)
- Increment **MAJOR** (e.g., 2.0.1 → 3.0.0): Complete redesign
- Increment **MINOR** (e.g., 2.0.1 → 2.1.0): New features or significant changes
- Increment **PATCH** (e.g., 2.0.1 → 2.0.2): Bug fixes or small tweaks

#### Step 2: Upload Files
Upload these files to your production server:

**Required Files:**
- `includes/header.php` (contains cache-busting code)
- `includes/footer.php` (contains cache-busting code)
- `includes/version.php` (version configuration)
- `.htaccess` (cache control and optimization)
- `assets/css/style.css` (main stylesheet)
- `assets/css/responsive.css` (responsive styles)
- `assets/css/menu-simple.css` (menu styles)
- `assets/js/script.js` (JavaScript)
- `index.php` (main page)

**Upload Method Options:**
- FTP/SFTP client (FileZilla, Cyberduck)
- cPanel File Manager
- Git deployment (recommended)
- SSH/SCP command line

#### Step 3: Verify Deployment
1. Visit your production site
2. Open browser DevTools (F12)
3. Go to Network tab
4. Refresh the page (Ctrl+Shift+R / Cmd+Shift+R)
5. Check that CSS/JS files have the new version number in the URL:
   - `style.css?v=2.0.2` ✅
   - `script.js?v=2.0.2` ✅

#### Step 4: Force User Browser Refresh
Users will automatically get the new version on their next visit because:
- Query string version parameter forces new download
- `.htaccess` prevents caching of HTML/PHP files
- Static assets are cached but version parameter bypasses cache

---

## 📋 Cache Busting Explained

### How It Works:
When you change the version from `2.0.1` to `2.0.2`:

**Before (cached):**
```html
<link rel="stylesheet" href="assets/css/style.css?v=2.0.1">
```

**After (new file downloaded):**
```html
<link rel="stylesheet" href="assets/css/style.css?v=2.0.2">
```

The browser sees this as a completely different file and downloads it fresh!

---

## 🔧 Alternative Versioning Methods

### Method 1: Manual Version (Current - Recommended)
**File:** `includes/version.php`
```php
define('ASSETS_VERSION', '2.0.1');
```
✅ Full control over versions
✅ Clear changelog tracking
❌ Must remember to update

### Method 2: Automatic Timestamp
**File:** `includes/version.php`
```php
define('ASSETS_VERSION', time());
```
✅ Always fresh on every page load
❌ Defeats caching benefit
❌ Unnecessary server load

### Method 3: File Modification Time
**File:** `includes/version.php`
```php
define('ASSETS_VERSION', filemtime(__DIR__ . '/../assets/css/style.css'));
```
✅ Automatic version based on file change
✅ Efficient caching
❌ Requires file system access

---

## 🎯 Best Practices

### When to Update Version:

**Always Update Version When:**
- ✅ Changing CSS styles
- ✅ Modifying JavaScript functionality
- ✅ Updating responsive breakpoints
- ✅ Changing animations or transitions
- ✅ Fixing visual bugs

**No Need to Update Version When:**
- ❌ Updating PHP logic only
- ❌ Changing database content
- ❌ Updating text content in PHP files
- ❌ Modifying .htaccess (unless affecting assets)

### Version Update Examples:

**Bug Fix:**
```
2.0.1 → 2.0.2
```

**New Feature (Hero Redesign):**
```
2.0.2 → 2.1.0
```

**Major Redesign:**
```
2.1.0 → 3.0.0
```

---

## 📝 Deployment Log Template

Keep track of your deployments:

```
Date: October 13, 2025
Version: 2.0.1 → 2.0.2
Changes:
- Hero section height reduced
- Enhanced slider transitions
- Improved responsive design for large screens
- Faster slideshow speed (3.8s)
Tested: ✅ Chrome, ✅ Firefox, ✅ Safari, ✅ Mobile
Deployed by: [Your Name]
```

---

## 🆘 Troubleshooting

### Users Still See Old Version:

**Solution 1:** Double-check version number was updated
```bash
# View current version
grep "ASSETS_VERSION" includes/version.php
```

**Solution 2:** Hard refresh browser
- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

**Solution 3:** Clear browser cache completely
- Chrome: Settings → Privacy → Clear browsing data
- Firefox: Settings → Privacy → Clear Data
- Safari: Develop → Empty Caches

**Solution 4:** Verify .htaccess is working
Check that HTML/PHP files have no-cache headers:
```bash
curl -I https://yoursite.com/index.php
# Should see: Cache-Control: no-cache, no-store, must-revalidate
```

### Version Not Appearing in URL:

**Check:**
1. `includes/version.php` exists and is readable
2. PHP has permission to include files
3. No PHP errors (check error logs)
4. Server supports PHP includes

---

## 🔒 Security Notes

The `.htaccess` file includes:
- ✅ Prevents directory browsing
- ✅ Security headers (XSS protection, clickjacking prevention)
- ✅ UTF-8 encoding
- ✅ Compression for faster loading
- ✅ Proper cache headers

---

## 📞 Quick Commands

### Check file permissions:
```bash
ls -la includes/version.php
# Should be readable (644 or 755)
```

### Update version via SSH:
```bash
sed -i "s/'2.0.1'/'2.0.2'/g" includes/version.php
```

### View version in production:
```bash
curl https://yoursite.com/index.php | grep "style.css?v="
```

---

## ✅ Post-Deployment Verification

After deployment, verify:
- [ ] Homepage loads without errors
- [ ] All CSS styles are applied correctly
- [ ] JavaScript slider works
- [ ] Menu toggle functions properly
- [ ] Responsive design works on mobile
- [ ] Images load correctly
- [ ] No console errors (F12 → Console)
- [ ] Version number appears in Network tab

---

**Last Updated:** October 13, 2025
**Current Version:** 2.0.1
**Next Deployment:** Update version to 2.0.2 before next release
