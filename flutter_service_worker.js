'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c1936df7053b59eab978be9da2a504a0",
"version.json": "c38baf38f3f52451505e10dbe0e9190e",
"index.html": "20cf24a0bb8aaf11240b9e899fbaf764",
"/": "20cf24a0bb8aaf11240b9e899fbaf764",
"main.dart.js": "be9f133436bcd799903787a7ef1e0d4d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "b8f312fce7bcaffb72bac57207b0f295",
"icons/Icon-192.png": "81ccf8dab2a13d1dfce21ee180bd54a2",
"icons/Icon-maskable-192.png": "81ccf8dab2a13d1dfce21ee180bd54a2",
"icons/Icon-maskable-512.png": "3c1b7c5b445c8f889124cd5b161ed302",
"icons/Icon-512.png": "3c1b7c5b445c8f889124cd5b161ed302",
"manifest.json": "228f14ceab33098a5a03dffb674f1f60",
"assets/AssetManifest.json": "25cfa365e27eff4027cf0f771ba64ead",
"assets/NOTICES": "1821a5c94c54aae3f8b456422d623284",
"assets/FontManifest.json": "96489ba810ebe01595fef737b550621e",
"assets/AssetManifest.bin.json": "93f0078335f42fc10d1b2577a2373ea6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "943023496c1e38c361104b155f5ce084",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/buttons/appstore-white_pl.png": "532f2397f854bc4f539fb07e0255c314",
"assets/assets/images/buttons/appstore-white_en.png": "532f2397f854bc4f539fb07e0255c314",
"assets/assets/images/buttons/buy-me-a-coffee-dark.png": "1a9404c45c895db63db5e139cf23556e",
"assets/assets/images/buttons/appstore-white_nl.png": "532f2397f854bc4f539fb07e0255c314",
"assets/assets/images/buttons/appstore_de.png": "598dffa1c4e82c62a15e34643543b00a",
"assets/assets/images/buttons/bunq.png": "1cfff7d716daecd31eadcbf9607c096b",
"assets/assets/images/buttons/appstore_en.png": "598dffa1c4e82c62a15e34643543b00a",
"assets/assets/images/buttons/appstore_pl.png": "598dffa1c4e82c62a15e34643543b00a",
"assets/assets/images/buttons/buy-me-a-coffee.png": "ae5e49bb7111f5dd38b287826f2d7714",
"assets/assets/images/buttons/paypal-dark.png": "d86ffcad6d9d0796639cc0ff92e9bbb3",
"assets/assets/images/buttons/appstore-white_de.png": "532f2397f854bc4f539fb07e0255c314",
"assets/assets/images/buttons/paypal.png": "21558b991d96f18c5e84b1869faf694c",
"assets/assets/images/buttons/appstore_nl.png": "598dffa1c4e82c62a15e34643543b00a",
"assets/assets/images/p4w-logo-120-dark.png": "27b90b60fe535470ccafb54bda553662",
"assets/assets/images/girappe-logo-header-dark.png": "7267a2faaba986ba6932628179c0be58",
"assets/assets/images/pass4wallet-text.png": "ae52beba23a5e173d1c881f63acd21cb",
"assets/assets/images/elements/qr-code-question-dark.png": "854a6d7b678f6d2848422b13a3195368",
"assets/assets/images/elements/main-square-small.png": "0d6e984930ff22260602b06cd0640d18",
"assets/assets/images/elements/scr-barcode.png": "1db91699519d3580df16aa653317fd88",
"assets/assets/images/elements/dot-dark.png": "323c7b732669b7dd0c2b2bbb89fb3c06",
"assets/assets/images/elements/scr-data-matrix.png": "b5bf3949b0496ed1af7412239a674678",
"assets/assets/images/elements/main-cross-big.png": "512e12bb926554d901f918a21e4d3014",
"assets/assets/images/elements/cloud-big-r.png": "f299146ec5283f7ca4ee1695f944275b",
"assets/assets/images/elements/box-red.png": "3ffe89c7b2ca50bb92d252dddde2c7c7",
"assets/assets/images/elements/cards-right-dark.png": "d555eb8d6443aa3ce6f1a4ab1db4a662",
"assets/assets/images/elements/box-blue-dark.png": "e1f398494330c0ea73759be4b37ff5d7",
"assets/assets/images/elements/main-square-big.png": "e56e83f41d69383e971941d731a3004a",
"assets/assets/images/elements/scr-store-card-dark.png": "01caca727743bf1ae74dc4c7824b24b6",
"assets/assets/images/elements/plants-right-dark.png": "b9d9a42bcfed02091183abc96e6ea7ed",
"assets/assets/images/elements/scr-store-card-light.png": "5e213f6b1ae1dafc549f34d73b35d925",
"assets/assets/images/elements/cloud-small-l.png": "75a2b1b7456a9f6f096d07235924d61f",
"assets/assets/images/elements/qr-code-free-dark.png": "1c8369dac1a4488f6524ccb6d0d9245b",
"assets/assets/images/elements/scr-widget-light.png": "afc4b34334d679113f65ab61f89b64a4",
"assets/assets/images/elements/msg-cloud-1-dark.png": "ad2d5663bd4ec501def236b4a6651ac2",
"assets/assets/images/elements/plants-right.png": "1a6481ff4a445ba128479bd4142dfad7",
"assets/assets/images/elements/header-dot-2.png": "19a7bd266b7f7e2f651d9ec1627f73c9",
"assets/assets/images/elements/pixel-shapes-dark.png": "59dfe857d61829cbbbd6a1f97699c24f",
"assets/assets/images/elements/globe-dark.png": "54b1db4fe7782d861f0ca76fe41caf61",
"assets/assets/images/elements/apostrof-dark.png": "c87b3e6524bc15be5c0102c4ec6e5580",
"assets/assets/images/elements/scr-barcode-dark.png": "975c0a62a8868cc45a23530977e5cd20",
"assets/assets/images/elements/dot.png": "323c7b732669b7dd0c2b2bbb89fb3c06",
"assets/assets/images/elements/qr-code-ads.png": "70c4f245ea220dc8359e5084c59858c8",
"assets/assets/images/elements/pixel-heart-active.png": "a663ad32cd765211d7676d03c1962f14",
"assets/assets/images/elements/pixel-shapes.png": "80090ca648e249e98dbc22fef52ccb04",
"assets/assets/images/elements/header-square.png": "ee257ef8d2febfd599790e797eb8645c",
"assets/assets/images/elements/main-half-circle.png": "fdf0820aa419804a40a804ce8a55028b",
"assets/assets/images/elements/qr-code-contact-dark.png": "32eb53defcd82cddc500a42c6286cffd",
"assets/assets/images/elements/cloud-small-r-dark.png": "eb1caf515f4b4907bfc307dfde04a9d9",
"assets/assets/images/elements/footer-c-shape.png": "0fae6ab7a24dde25ed5f4d2347b5bd34",
"assets/assets/images/elements/pixel-heart.png": "adde2f54c4fac0ca8f924624bd061593",
"assets/assets/images/elements/main-text-back.png": "1a932f248ebf50dc3fe0790410b3edf8",
"assets/assets/images/elements/scr-watch-light-dark.png": "0b553c841fae69a3149b62473c6978c2",
"assets/assets/images/elements/header-dot.png": "5e4d72380668cdbfcba8f2e6b7da6897",
"assets/assets/images/elements/qr-code-404.png": "1fb0d24d9ea084a8f2f4c48d469ef195",
"assets/assets/images/elements/scr-data-matrix-dark.png": "15e7c92322782b0276f605e3023b43a4",
"assets/assets/images/elements/review-background-dark.png": "53ec872591c1a93fca973c113e708633",
"assets/assets/images/elements/qr-code-scan.png": "4bdbecc4aa7e877d6ee1b35c396e4bc8",
"assets/assets/images/elements/pixel-heart-dark.png": "6948f2646e103483cf34ff022b1ab9a7",
"assets/assets/images/elements/qr-code-free.png": "b15985e7013b3097c68892d28be9b6d7",
"assets/assets/images/elements/qr-code-data-usage.png": "43826d690fd20bd7e1884f6b60de8915",
"assets/assets/images/elements/cloud-small-l-dark.png": "be1ba0238c2d440cc912bc517afe9c01",
"assets/assets/images/elements/scr-store-card-light-dark.png": "d797cadc88c06aab1374974af1e5d678",
"assets/assets/images/elements/scr-map-light-dark.png": "bd0d53ead523b58d04037e7a7968eb6d",
"assets/assets/images/elements/scr-qr.png": "51986d2ecd7866a51f38e0e11e821126",
"assets/assets/images/elements/qr-code-question.png": "988bdb59a3f0cb3b1ccade604fad4247",
"assets/assets/images/elements/cards-left.png": "2cc1ddc198f91657472de90109212d18",
"assets/assets/images/elements/box-yellow-dark.png": "e35caf1c642ec78e76d9885c24365639",
"assets/assets/images/elements/footer-medium-dot.png": "399f59697309fd4c60608f671e64fb7e",
"assets/assets/images/elements/cards-left-dark.png": "bddb73b604aa6a83bcac95b1a8a531af",
"assets/assets/images/elements/scr-aztec.png": "87d0eea60afa11a10460a2018ed66d52",
"assets/assets/images/elements/qr-code-safe-dark.png": "c6dbd14a0f975e7ca5f8c9e219f223da",
"assets/assets/images/elements/footer-dot.png": "6cea298f13c10cef0929607575ef8e66",
"assets/assets/images/elements/footer-triangle.png": "70795c002f628b969613cf4afadfce8d",
"assets/assets/images/elements/scr-widget-dark.png": "bcfad8704c1cbc4d0124d81aefa6e32e",
"assets/assets/images/elements/msg-cloud-3-dark.png": "1fef87fd3260e6760c8617fc1f2b7b6e",
"assets/assets/images/elements/msg-cloud-2-dark.png": "1832f577915def7cfe01ab1c25592bd8",
"assets/assets/images/elements/msg-cloud-3.png": "0f4e48e4f4f8f671b1216e0fbaf3a544",
"assets/assets/images/elements/pixel-heart-active-dark.png": "a663ad32cd765211d7676d03c1962f14",
"assets/assets/images/elements/qr-code-scan-dark.png": "f1cfc9b94805a17080cb89cd784f0903",
"assets/assets/images/elements/scr-map-dark.png": "d65a09a04f276099bfd3fa9816f36b0b",
"assets/assets/images/elements/qr-code-404-dark.png": "6b192893ae771b5a71e88b6073afd44d",
"assets/assets/images/elements/footer-triangle-gray.png": "4b05cb39ed9631f4de948eaa93ef4767",
"assets/assets/images/elements/globe.png": "7bf67ae4af9fc262493cda70014e0cd3",
"assets/assets/images/elements/scr-widget-light-dark.png": "e642d6addaf6c10ac1d9e2b479941704",
"assets/assets/images/elements/pass4wallet-logo-dark.png": "bae4ea815754a8a7e7426463b89659a9",
"assets/assets/images/elements/msg-cloud-2.png": "def1ce3df4b660aeeef34f623bab1ee9",
"assets/assets/images/elements/footer-circle-yellow.png": "0f703ad1a96c6b1a4b44973e994ab870",
"assets/assets/images/elements/header-triangle.png": "d94375006550493160bbee1ce8097758",
"assets/assets/images/elements/footer-small-square.png": "fafce04ef954e4271da8c4ded219dcb0",
"assets/assets/images/elements/main-cross.png": "1e10743ea9c56e3db48a49f94a3645b5",
"assets/assets/images/elements/msg-cloud-1.png": "5d6b8c2ef0319e799c168e5387ce3434",
"assets/assets/images/elements/header-circle.png": "3dfdd5eb00a23701083f0c39a3c89ca9",
"assets/assets/images/elements/footer-dot-big.png": "1ca30724415eaeaa5e5f360b6153a406",
"assets/assets/images/elements/cards-right.png": "49b2e1c8e4581a1a2eb1f46277dd9e31",
"assets/assets/images/elements/plants-left.png": "dec9f4fe0b273df00d5980190547e1f3",
"assets/assets/images/elements/box-red-dark.png": "7c86f09c8e2a9f9a4976de310987ea32",
"assets/assets/images/elements/qr-code-safe.png": "7a7ad103101435ac6e9bae267ce6665d",
"assets/assets/images/elements/cloud-big-l.png": "fdb60ad686884c8f0c38fc0d8921651a",
"assets/assets/images/elements/review-background.png": "53ec872591c1a93fca973c113e708633",
"assets/assets/images/elements/footer-semi-circle.png": "b52d12ac99aa2fa0504ee34eb166fcb7",
"assets/assets/images/elements/box-yellow.png": "2091b4ccea316da76e386e6ef8f3d132",
"assets/assets/images/elements/qr-code-ads-dark.png": "1b44473b48872648e55f9a1a6fb95c84",
"assets/assets/images/elements/scr-map-light.png": "8ae3a3d85a4e0bd69305e241e0c3c36f",
"assets/assets/images/elements/qr-code-data-usage-dark.png": "6f8b098c8dc144d5d7ee56ea79bd01b8",
"assets/assets/images/elements/box-blue.png": "c7657353f5d1d4bdbef1bdf7a273c88e",
"assets/assets/images/elements/cloud-small-r.png": "7d5d2cc8453f81d729cef3b04098279b",
"assets/assets/images/elements/cloud-big-r-dark.png": "886c26451037f4983e3f91a791f65c11",
"assets/assets/images/elements/cloud-big-l-dark.png": "38dd59a7800f92f2a06fb73f3c976f77",
"assets/assets/images/elements/scr-qr-dark.png": "f4794ae62882243c3fb8e904bbe8f1da",
"assets/assets/images/elements/pass4wallet-logo.png": "fa1770b25207b4eccf3ec606bd8cb846",
"assets/assets/images/elements/scr-aztec-dark.png": "cd192cdcc62b8883321247517c88b7e9",
"assets/assets/images/elements/scr-watch-light.png": "8713287af3d895805203a2de568b7a72",
"assets/assets/images/elements/plants-left-dark.png": "35c083a6e9f65d535c481d1307abe2da",
"assets/assets/images/elements/qr-code-contact.png": "cca7b2946b3451a6994936a2d1bbb6f2",
"assets/assets/images/elements/apostrof.png": "c87b3e6524bc15be5c0102c4ec6e5580",
"assets/assets/images/elements/scr-watch-dark.png": "a5630e074131de85333530b06f8abe51",
"assets/assets/images/cat.png": "d45d03d50ad9bf32bcefba834bbeeb3e",
"assets/assets/images/begging-cat-dark.png": "1cce1589b7d809f4098739c71276a629",
"assets/assets/images/cat-dark.png": "ff1c7ad453297bc62e71ff637b145103",
"assets/assets/images/pass4wallet-text-dark.png": "886858b86088e71ac34bc0b79a5b90fb",
"assets/assets/images/begging-cat.png": "d45d03d50ad9bf32bcefba834bbeeb3e",
"assets/assets/images/girappe-logo-header.png": "5e7af84f514c5e91356e58cbeb46be82",
"assets/assets/images/p4w-logo-120.png": "5a68057577f32c2e354e5a142954e55f",
"assets/assets/icons/icon-arrow-up-dark.png": "bb79520313c495f3f604ac8ffc31ddd9",
"assets/assets/icons/hamburger.png": "e62e81cbf74c42f6cba5b1450057079a",
"assets/assets/icons/icon-lights-change.png": "fb2002a46b2782e886301583623ee416",
"assets/assets/icons/icon-arrow-up.png": "5e2cd616146ac8844e00e550ec4626ac",
"assets/assets/icons/icon-arrow-down-dark.png": "160d982127584e8878b2d1621330002c",
"assets/assets/icons/icon-arrow-down.png": "160d982127584e8878b2d1621330002c",
"assets/assets/icons/icon-lights-change-dark.png": "6a406ef985e74aaff637d33cc4af74e2",
"assets/assets/fonts/PlusJakartaSans-Light.ttf": "7269d597a1420ab80a2da6d56a164e35",
"assets/assets/fonts/PlusJakartaSans-Medium.ttf": "86c690cf3c5fa19ac4d644e3179d726e",
"assets/assets/fonts/PlusJakartaSans-SemiBold.ttf": "888a09fc349fd86b358f8bf1d343c69f",
"assets/assets/fonts/PlusJakartaSans-Regular.ttf": "1c53607464229476dd0241bcc71235f6",
"assets/assets/fonts/Athelas-Regular.ttf": "203ca707d5875159f71d2aff42401749",
"assets/assets/fonts/Athelas-Bold.ttf": "a77779f001a1944ec7ca5be4be3c34db",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
