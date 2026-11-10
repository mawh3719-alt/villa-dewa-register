const CACHE='villa-dewa-shell-v8-three-photos-photo3-ocr';
const APP_FILES=['./','./index.html','./manifest.webmanifest','./villa-lookup.js'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP_FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('villa-dewa-shell-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 if(event.request.method==='GET'&&new URL(event.request.url).origin===location.origin){
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
   const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response;
  })));
 }
});
