VILLA DEWA REGISTER — UPDATED ANDROID WEB APP (PWA)

WHAT IS INCLUDED
- Villa entry and saved-record search/edit/delete.
- DEWA Sr. No. and MAC Number fields with automatic photo OCR, manual re-scan buttons, visible progress, and recognised-text diagnostics.
- Automatic Developer Plot No. and GAID lookup for all 251 villas in Cluster 1 Phase 3A and all 145 villas in Cluster 2 Phase 3B (396 lookup records total).
- Two photo slots per villa, with photos stored in the app's local browser database.
- Excel export with both photos embedded in the matching villa row.
- JSON backup and restore.

HOW THE AUTOMATIC LOOKUP WORKS
1. Select Cluster 1 – Phase 3A or Cluster 2 – Phase 3B.
2. Enter the villa number (for example, 01 or 78).
3. Developer Plot No. and GAID Number are filled from the supplied cluster Excel schedules.
4. If a villa number is not in the selected cluster schedule, the lookup fields remain blank. Check the cluster and villa number.

HOW PHOTO READING WORKS
1. Enter the villa number and select the cluster first.
2. Capture a clear, close-up photo of the meter label in Photo 1 or Photo 2. Keep the label upright, well-lit and free from glare.
3. The app automatically starts OCR after the photo is selected. Keep the app open and connected to the internet while the engine downloads and scans.
4. A **Read Photo 1** or **Read Photo 2** button is also available to retry a scan without taking the picture again.
5. Progress and any OCR error are shown on screen. Open **Show text recognised from the last photo** to see the raw text returned by OCR if it did not identify a labelled field.
6. Review the DEWA Sr. No. and MAC Number against the actual meter label and tap **Save villa record**. OCR is assistance only; it can misread characters or fail on blurred, reflective, small or unusual labels. Enter or correct any value manually.
7. OCR uses Tesseract.js 5.1.1 and English language data from public CDNs. Internet access is required for the first scan and for Excel export. Photos and register data are not uploaded by this app to a server.

PUBLISH / INSTALL
This is an installable Progressive Web App (PWA), not a native APK. It needs to be hosted over HTTPS. GitHub Pages is one free option:
1. Create a GitHub repository (Public is simplest for GitHub Pages; remember that app source files in a public repository are public).
2. Upload all files in this folder to the repository root: index.html, manifest.webmanifest, sw.js and villa-lookup.js.
3. In repository Settings > Pages, choose Deploy from a branch, select main and /(root), then Save.
4. Open the published HTTPS URL in Chrome on your Android phone.
5. Use Chrome menu > Install app / Add to Home screen.
6. Open the installed app while online. This build uses a new v3 service-worker cache name to force the fixed page to replace the earlier cached version. Close and reopen the app after it updates. If the old page still appears, open the published website in Chrome, refresh it, then relaunch the installed app.

PRIVACY AND DATA SAFETY
- Villa records and photos are stored locally in the browser's IndexedDB on that device. The app does not upload them to a server.
- Clearing the app/site storage, clearing browser data, or uninstalling/resetting the device can remove local records. Use Backup records regularly and keep the JSON backup in a safe location.
- Do not assume that a captured photo or OCR result has been saved as a completed record until you tap Save villa record. Photo capture is also locally attached to the record automatically; the final DEWA/MAC values should be reviewed and saved.
- GitHub Pages repository visibility is separate from app data: a public repository exposes the app source files and embedded villa lookup schedule, not the records stored locally on your phone.
- Excel export uses ExcelJS from a public CDN and needs an internet connection. Exported images are embedded in the workbook; large original photos can make the Excel file large.
- Camera capture behavior depends on the Android device and browser. The browser may open the camera or offer a camera/gallery chooser.

OCR TROUBLESHOOTING
- The first scan may take time because the OCR engine, WASM core and English language data must download. Do not close the app during this first scan.
- If the progress stops or an error appears, note the exact error shown below the photo area.
- If the raw OCR text is readable but the fields remain blank, the meter label may use different wording; use the displayed text to enter the value manually and share a clear label photo for further tuning.
- The app must be served over HTTPS (such as GitHub Pages). It will not run browser camera/OCR features correctly from a local file opened directly on the phone.


OCR FIX v4 – ISKRA / SILVER SPRING DEWA LABEL
This version first scans an enlarged, enhanced crop of the upper-right communications label,
where the supplied meter sample prints "DEWA SN" and "MAC". If either value is not detected,
the app scans the full photograph as a fallback. Review the extracted values against the meter
label before saving. This profile is tuned to the sample meter style supplied by the user;
other meter label layouts may need a different crop profile.


OCR FIX v5
The label parser now explicitly recognises the printed labels "DEWA SN:" and "MAC:",
extracts values on the same line or following OCR lines, normalises spaces/punctuation,
and updates the DEWA Sr. No. and MAC Number fields whenever a value is detected.
The OCR values should still be visually checked before saving.
