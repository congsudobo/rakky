'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6a93b6bcca2b9081bb0f3c8f67ddf140",
"index.html": "d1d72b92eb9ca3a0a6bd96bc58a120bb",
"/": "d1d72b92eb9ca3a0a6bd96bc58a120bb",
"main.dart.js": "24029fd0f4aa1cfc16be60aa167e01ba",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7583b070b82cdef4ce7b3c11c97531da",
".git/ORIG_HEAD": "80e52168eaa92e98c3f6cc22f3242d97",
".git/config": "4a336be6def21d1365fcbd8ef3b77c4d",
".git/objects/57/4b4588044681be38c820698414b8ae592480dd": "0565c019d82354e4966c7b40f8ebeb1d",
".git/objects/9b/a207ce0116e0ae48044deaf7f499bcafbc522d": "f645cd1a7d61689e618c3932be13e34e",
".git/objects/b2/1e34adbcd128252d29cf7a5d08ea997c59e9fa": "74d7006eabe5ba0b0c1f21b4b1809af0",
".git/objects/a2/fb7b32bdac4c5c67c150d35938c7d79a3544e2": "9f7c3e319dd9b53d44ab677fe7b1d5d3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/03c95cdd0a20d081ea1e39302647428a909e7e": "759647a98f031b80f781d042c52fdfa3",
".git/objects/ae/d65d64281ef416ba9537afc3d41d8c68b08b33": "a22bc683b81db67d3ada8e5dc944a381",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/bb873a6c8d91def550b40b0a4503f0a2823639": "470bdf91ee899fdf3ed207c18d8f5359",
".git/objects/cf/89d67bc9ac100d7293aa6e9dee154a4015328e": "8c986c28920b86f02ecfb59c737b09cb",
".git/objects/e4/ec6c9446063e32defc50b7a158ad74059b6511": "36b6cd5dbe787b4cc0e80fff24e97878",
".git/objects/c1/7a167952daff1584135713b19bc17f4b1616fe": "acd894e6d28eb8366a3f231005780181",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/28/a0c567f488180f62f1fbd0a59b301c87271cfc": "d492cc3200805a369740a74e23ccdc2e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/998fa1f2ba861ad058979827d56c393adeeea8": "ae8e050308c54a04c522d42270f59e5d",
".git/objects/72/bbe50d648477f7b2b30a24cd69b32991667d8b": "ce350182b4346b6e9a3a6b1775b2775d",
".git/objects/43/9c4d3c68d7b8a19218333cccf72457e4709e85": "32ca21980827bd12f597be5eeb59ec88",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/62/05a9c1b0f2f902179d8c26735d50b62e7e0ce9": "a5c449c63727aed56854d75743e0aabf",
".git/objects/53/698bfd760b7fba3c6977fb897ab72bcb28dbb5": "07252841b9b89406c80984da997ba1e9",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/5e/a9ecd745c303d9a2c920476f592210482ab3c7": "7d75acc05f349aefdbfc2eb18c08da4d",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/d4/24e85f39faeed3f1bad5e03b1d8c8ff9c884f1": "bc785fcc1f16ac2856edb26ca92e21e1",
".git/objects/ba/84435b6afcc65dbd2dba7a0b175333ee7744b6": "4adfbbbf9b5a47eb529c484add477d63",
".git/objects/ba/3180691676b2ff3416b741739acb80f0db1bae": "168d65b8811521b5fa77302d74595038",
".git/objects/a0/9c61002b8abb492702afb4074ab284457305ed": "f092967f72801dd098b813a3e2e84328",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/5606634f006bb0195078279c04f8b68b20d2a8": "2d585b0fb0ec143df59f45cd3ad257a0",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/1a0431016187bd63fe7ab6ac43d26e80a7fcdc": "e7429d90cf0fee0ea65ad5d23afc41d1",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f0/2d289ffa163e5ce3860f6bab85dc0fae816227": "5575eb85f6732ebce03226a8c926dba4",
".git/objects/ff/7278a786d53827166c9ce2895a43aed2aee111": "f2d2c248d5a2008515013200644767f4",
".git/objects/f6/05cd26b81f4d2ae264a0f4cc91367d5d483254": "2625d1a3ad216e94076bbf3f278a35ad",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/9fb5713b6dd54cdc8dab80d0a71a2682d78e86": "2f8435a6b491dbaa09981c8c189a4b83",
".git/objects/1b/b160288af28e0e6bed2b00a0078fe27a6d3381": "3b37c828eb9b7969018f640904903920",
".git/objects/4f/af80efe29aba06ca91e5b2d2dd618168e8c2e8": "71099c7afcf7ccd352f2845a5e8999c5",
".git/objects/85/274816019b58027050beaa2aefcf8b07816183": "a52c241eb87a79383a432a8e809d6a73",
".git/objects/71/2e439afc801b1d5afbdb0f1c87f184ee50618c": "9b3b1e9bb647d3759694bb54f5294ed7",
".git/objects/82/9c2dcc8fe76ed7af601915def87e68e7b3f15c": "1c4bc32d9d9a68a33c4f5bba3b5242af",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/HEAD": "ef53ff3db0f6645529e56ee3cf9d8826",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "34496a47d66dcb443f53df54ef03b9db",
".git/logs/refs/heads/release/28122022-2": "0964cd3e1fc5c225fc5facefa0c7c057",
".git/logs/refs/heads/release/28122022": "1d34c574eb09d025d35617bdec1c9eb6",
".git/logs/refs/heads/master": "200fac6a1af0e53f62fe8f7bc9333166",
".git/logs/refs/remotes/origin/release/28122022-2": "965d3c1839ca80776aad76a2025d8e5b",
".git/logs/refs/remotes/origin/release/28122022": "9b0d65660042e60367d1bf69b65972e6",
".git/logs/refs/remotes/origin/master": "759ab66aab1c851b2a07472feeb99b98",
".git/logs/refs/stash": "e20a6296ce0be14e1ad98cb4211a102f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/release/28122022-2": "d7ad43297667ac37c411dcbd85520363",
".git/refs/heads/release/28122022": "83965a2365fb39a7a54729e918911a1a",
".git/refs/heads/master": "de2adc36d25215777b7277b657827b65",
".git/refs/remotes/origin/release/28122022-2": "d7ad43297667ac37c411dcbd85520363",
".git/refs/remotes/origin/release/28122022": "83965a2365fb39a7a54729e918911a1a",
".git/refs/remotes/origin/master": "de2adc36d25215777b7277b657827b65",
".git/refs/stash": "04c5cae2ab79e9ad376b4218a5b60f88",
".git/index": "13757403b7bbce4836461b466ac2aa6d",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "d18782f2ce7e5fcd39e10a660ae2c69f",
".git/FETCH_HEAD": "39346690d65d9d9a008a12a5f06d07a8",
"assets/AssetManifest.json": "bdc7d5c7f38a5f336a79a90abe882be6",
"assets/loading.gif": "41b86d94614461dbf0126f0d63580ea7",
"assets/NOTICES": "486e542b63f36056c2a0da3faef1859b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "e04227dc4b5042d4e2f116f83a5af19d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/fortune_wheel_frame.png": "29467d70346adfea1a04b4aac6268710",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
