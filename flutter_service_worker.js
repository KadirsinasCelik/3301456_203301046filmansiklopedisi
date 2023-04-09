'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "dab7c70e6d9645b10b4f06a4112c5e97",
"assets/assets/12yearsAslave.PNG": "186171e25596b226ad0460c8b6d040ab",
"assets/assets/anthony.jpg": "a7705007c924557eec1a4a6348ea8150",
"assets/assets/ariana.jpg": "cf011e01fa6fe199b5f1f109a01a0469",
"assets/assets/avatar.jpg": "d5387efa72fdcb26aeea03b2b8b636de",
"assets/assets/brad.jpg": "39214e10e101b93bef0e08291e71e8b3",
"assets/assets/codaa.jpg": "c2c5a4835c0c704edee0e8949b0fb6f3",
"assets/assets/daniel.jpeg": "28f4f3e46d7eff26f75982662ce6bc5b",
"assets/assets/darkinight.jpg": "b4ae965bea011c1148a16730ce490769",
"assets/assets/endgame.jpg": "c55db1bb1a2c1b83bd8bd345b26f615d",
"assets/assets/esaretinbedeli.jpg": "7cd2f6ca5e336accf2a29725a5cf6052",
"assets/assets/fonts/Lobster-Regular.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/assets/frances.jpg": "d8479447edf8fe65f7b1ec432db456f2",
"assets/assets/g%25C3%25BCcuyan%25C4%25B1yor.jpg": "43cdb7085462ac711e44898ff9841da7",
"assets/assets/ggravity.jpg": "f05dd64fdd7e16d84be9408f5711009f",
"assets/assets/godfather.png": "3abb6884bbc28b4e8f1f96cfb4955b61",
"assets/assets/godfather2.jpg": "fe0af48a6cfed6e0735b0a6fc2121f0b",
"assets/assets/green.jpg": "27b0a0884429fd9022b0eb891c6b33b7",
"assets/assets/ilkfilmciler.jpg": "37d5dfa3c1d970a0744a0bfc15bd0567",
"assets/assets/jessicachastain.jpg": "ce5c9f221a2cee2e426a393a1fa0281d",
"assets/assets/joaquin.jpg": "e457cd859b01430744f938a7f4494c1b",
"assets/assets/lalaland.PNG": "48444f454e4599d79eecb311f5e67089",
"assets/assets/laura.jpg": "9d6df97555761a6856ff089a8c155eea",
"assets/assets/madmaxfury.PNG": "2ea2204b972a03bca95a74f9717ab536",
"assets/assets/maher.jpg": "260374b9b4e22644fde0f2b2dd167ea4",
"assets/assets/mahershala.jpg": "acf3f7b405b31a994ddf82c1324181a8",
"assets/assets/moonlight.PNG": "faae5faea19b4100d47deb8e50c67468",
"assets/assets/nomaland.jpg": "553f1f5fdfc37ffd318c2f04d9e882c4",
"assets/assets/olivia.jpg": "12d70c6f06e17a00f1a8ea5ecfdea392",
"assets/assets/parazit.jpg": "05016ebf22d8afa96a2a71c64bf14bfc",
"assets/assets/ramimalek.jpg": "c0904d9d32fe8aab9c6caf178fbae2e7",
"assets/assets/regina.jpg": "430ad2b1f8e025b6b7c1784ab56baf60",
"assets/assets/renee.jpg": "2a804ce555f6bc5de20a7a028e4db057",
"assets/assets/schindler's.jpg": "c5a5a70af0ca6d5be1da18cb6d55b51b",
"assets/assets/suyunsesi.jpg": "c6dda35ca6e73eebd857c22f3e8d5969",
"assets/assets/suyunyolu.jpg": "9627b863311d5b5c475ca3c6de0c38f6",
"assets/assets/titanik.jpg": "407d82eea3b0888ed4dc8aa34d9ad5ed",
"assets/assets/troy.jpg": "bda21ba1b06546824c4f565b0b0e6d3f",
"assets/assets/willsmith.jpg": "b462ef73d8869332d273659f22b5d583",
"assets/assets/yoon.jpg": "10f5f72aaff94163cd8edbaa18bdbb49",
"assets/FontManifest.json": "45d8b9be390676fe1c0850b9cdf3948b",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "d61069f65cd9798f233f546433725e4b",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ca7ebb5d51ea25bd7ebbdbafc0ddb06e",
"/": "ca7ebb5d51ea25bd7ebbdbafc0ddb06e",
"main.dart.js": "bdfabbb55fc23594975b80443d1a545e",
"manifest.json": "1c5fd603809cc1557a783b61ef51a666",
"version.json": "e12d16673f638ed170a5f83edf27c036"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
