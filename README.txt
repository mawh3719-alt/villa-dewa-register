VILLA DEWA REGISTER — ANDROID WEB APP

WHAT IT DOES
- Add/edit villa number, cluster, DEWA Sr. No. and MAC Number.
- Two photo slots per villa. On Android Chrome, tapping Capture Photo uses the device camera/file capture flow.
- Selected/captured photos are stored in the browser's IndexedDB on that device.
- Export an Excel .xlsx workbook with the photos embedded in the corresponding villa rows.
- Backup/restore records as a JSON file.

IMPORTANT SETUP
This is a small installable web app (PWA), not a native APK. For camera capture and Add to Home Screen, host the folder on an HTTPS website.
A simple option is GitHub Pages:
1. Create a private or public GitHub repository (depending on your privacy needs).
2. Upload index.html, manifest.webmanifest and sw.js to the repository root.
3. Enable Settings > Pages and publish from the main branch/root.
4. Open the published HTTPS address in Chrome on your Android phone.
5. Use Chrome menu > Add to Home screen / Install app.
6. Open the installed app and create records.

USAGE
1. Enter the villa details.
2. Tap Capture Photo 1, allow camera permission, take the photo and confirm.
3. Repeat for Photo 2.
4. Tap Save villa record. Photos and fields are saved together on the phone.
5. Tap Export Excel to create Villa_DEWA_MAC_Register.xlsx.

LIMITATIONS / DATA SAFETY
- A webpage cannot silently force-open the camera in every Android browser; the capture control requests the camera and Android may show a camera/gallery chooser depending on device/browser settings.
- Records are stored locally in the browser on that device. Clearing browser/site data or uninstalling/resetting the device may erase them. Use Backup records regularly and keep the backup somewhere safe.
- Excel export loads ExcelJS from a public CDN, so an internet connection is required at export time. The capture and local saving features work after the app shell has been loaded.
- Image files are embedded without intentional resizing/compression by this app. Excel controls display size in the worksheet; the original image data is embedded.
- This app does not upload photos to a server or share them automatically.
