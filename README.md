# Remove Roblox Plus Button Extension

A simple browser extension that removes the "Roblox Plus" button from the Roblox sidebar.

## Installation Instructions

### Chrome / Brave / Edge

1. Open the extension folder in File Explorer
2. In your browser, go to `chrome://extensions/` (or `edge://extensions/` for Edge)
3. Enable **Developer mode** (toggle in top-right corner)
4. Click **Load unpacked**
5. Select this extension folder
6. Done! The extension is now active

### Firefox

1. Open the extension folder in File Explorer
2. In Firefox, go to `about:debugging#/runtime/this-firefox`
3. Click **Load Temporary Add-on**
4. Select the `manifest.json` file from this folder
5. Done! The extension is now active (temporary until Firefox closes)

**For permanent Firefox installation:**
- Package as `.xpi` file and submit to Firefox Add-ons store, or
- Use a signed version from Mozilla

### Safari

1. Open the extension folder in File Explorer
2. In Safari, go to Develop → Allow Unsigned Extensions
3. Then go to Safari → Settings → Extensions
4. Click the **+** button and select this folder
5. Done!

## How It Works

The extension runs a simple script that:
- Finds the "Roblox Plus" button in the sidebar
- Removes it from the page
- Watches for any changes and removes it if it reappears

No popups, no configuration needed - just install and use!

## Compatibility

- ✅ Chrome
- ✅ Edge
- ✅ Firefox (temporary or signed)
- ✅ Brave
- ✅ Safari
