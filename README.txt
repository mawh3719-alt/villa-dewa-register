VILLA DEWA REGISTER — VERSION 8 (THREE PHOTOS / PHOTO 3 OCR)

WHAT IS INCLUDED
- Villa entry and saved-record search/edit/delete.
- Three photograph slots per villa.
- OCR is triggered only by Photo 3, which is intended for a clear close-up of the DEWA identification label.
- Photo 1 and Photo 2 are stored as ordinary photographs and are never sent to OCR.
- OCR reads only the two narrow DEWA SN and MAC text strips from Photo 3. The full photo is not scanned.
- DEWA Sr. No. and MAC Number remain editable. OCR will not overwrite a value manually entered by the user.
- Automatic Developer Plot No. and GAID lookup for all 251 villas in Cluster 1 Phase 3A and all 145 villas in Cluster 2 Phase 3B (396 lookup records total).
- Excel export embeds all three photographs in the matching villa row.
- JSON backup and restore includes all three photographs.
- Existing records created with earlier two-photo versions remain readable. Their existing Photo 1 and Photo 2 are retained; Photo 3 is initially empty.

HOW TO ENTER A VILLA
1. Select the cluster and enter the villa number.
2. Capture Photo 1 and Photo 2 for the general meter/site views. These photos are saved but not scanned.
3. Capture Photo 3 as a close, upright, well-lit image of the DEWA identification label. This is the only photo that starts OCR.
4. Review the DEWA Sr. No. and MAC Number fields. Correct either field manually if needed; both are editable.
5. Tap Save villa record. Photos are also attached to the local record as each is captured.

PHOTO 3 OCR DETAILS
- The app prepares two narrow crops from the upper-right DEWA label area: one for the DEWA SN line and one for the MAC line.
- Only those two crops from Photo 3 are sent to Tesseract OCR. Photo 1 and Photo 2 are not scanned, and there is no full-photo fallback.
- Use the on-screen crop preview to check the scanned area and the recognised-text panel to inspect OCR output.
- OCR may misread faint, blurred, reflective or unusual labels. Always compare the extracted values with the physical label before saving.
- The OCR engine and English language data are loaded from public CDNs. Internet access is required for the first scan and for Excel export.

EXCEL AND BACKUP
- Excel export includes S.No, Villa Number, Cluster, DEWA Sr. No., MAC Number, Developer Plot No., GAID Number, Photo 1, Photo 2 and Photo 3.
- All available photos are embedded in their corresponding row.
- JSON backup and restore preserves all three photos. Back up regularly and keep a copy in a safe location.

PUBLISH / INSTALL
This is an installable Progressive Web App (PWA), not a native APK. It must be hosted over HTTPS.
1. Extract this ZIP.
2. Replace the files in the root of your existing hosting repository with all files from this package: index.html, manifest.webmanifest, sw.js and villa-lookup.js (README.txt is for guidance).
3. Commit/publish the changes. If using GitHub Pages, allow deployment to complete.
4. Open the published HTTPS URL in Chrome on Android, refresh, then close and reopen the installed app.
5. The v8 service-worker cache name is changed so the browser can replace the older cached application files. If the old screen remains, refresh the website in Chrome and relaunch the installed app.

DATA STORAGE AND PRIVACY
- Villa records and photographs are stored locally in the browser's IndexedDB on that device. The app does not upload the register or photographs to a server.
- Clearing app/site storage, clearing browser data, or uninstalling/resetting the device can remove local records. Use Backup records regularly.
- Excel export uses ExcelJS from a public CDN and requires internet access.
- A public source-code repository exposes the app files and embedded villa lookup schedule, not the records stored locally on the phone. Follow your project data-sharing policy when choosing repository visibility.

TROUBLESHOOTING
- If OCR does not start, ensure Photo 3 is captured and the device is online. Keep the app open while the OCR engine loads.
- If OCR returns incorrect or incomplete values, inspect the Photo 3 crop preview and raw recognised text. Enter or correct the values manually.
- Camera capture behavior depends on Android and Chrome; the browser may open the camera or show a camera/gallery chooser.
- Use the installed HTTPS app, not an index.html file opened directly from local phone storage.
