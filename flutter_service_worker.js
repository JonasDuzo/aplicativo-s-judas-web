'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d73e994add4b2759ef86edb850fcb9cb",
"assets/assets/icons/JudasIcons.ttf": "55f950193ca9ff6dbc0df86894477be6",
"assets/assets/icons/SocialIcons.ttf": "c3308b2b3f1c9d12e9e4f261d74443b3",
"assets/assets/icons/svg/agenda.svg": "3c6e77e6a7c95134b336fd9ee6c17e44",
"assets/assets/icons/svg/aparicoes.svg": "eba70e30046ef9d399d5934b58069295",
"assets/assets/icons/svg/contato.svg": "be98703f719af102217944b77a0839eb",
"assets/assets/icons/svg/cruz.svg": "8ba2d5b8bb578db312be58976056d4fb",
"assets/assets/icons/svg/eucaristico.svg": "03bbfd0fdc4260cf048d061448dc0d04",
"assets/assets/icons/svg/formacao.svg": "fcefb658349f2d4aa903aa79d9236c86",
"assets/assets/icons/svg/liturgia.svg": "32fb705c1c6316bd3f3cd987cf85cb61",
"assets/assets/icons/svg/missa.svg": "13407f5f024e04db3a1f7ff22ce29626",
"assets/assets/icons/svg/oracoes.svg": "a44a913041dd45627648fd6ca5350032",
"assets/assets/icons/svg/patrocinio.svg": "75a180c752db59d1c728e0bcdb14f8d2",
"assets/assets/icons/svg/recomendados.svg": "30a15d9775a4bd61624a564dbcf69975",
"assets/assets/icons/svg/redes.svg": "0d6f8e5c5013f69cc3f44196b26e333c",
"assets/assets/icons/svg/rosario.svg": "d814ec3a43720c1ca7a78de94066cdf9",
"assets/assets/icons/svg/santo.svg": "52b1ae3dbb4fe59d87b88756c15246ae",
"assets/assets/icons/svg/sugestao.svg": "781d739480c33658ab5a92dd16acfb83",
"assets/assets/image/contact/capela.jpg": "23e34e8199f8bc52869fdb11d53206d3",
"assets/assets/image/contact/com_ns_aparecida.jpg": "bd6cf7c2942340a0764f85111c3e1a7e",
"assets/assets/image/contact/com_s_francisco.jpg": "334b8013d0d3b8fe11695878f9ae40d4",
"assets/assets/image/contact/pe_tadeu.png": "3f46aea32b2fe4aba9d3a020bf274a58",
"assets/assets/image/contact/pix_logo.png": "1496657ae483bde31c7716fd4eae9ab3",
"assets/assets/image/contents/aci_logo.jpg": "ea82755e519819287d7b289cd6a73566",
"assets/assets/image/contents/aleteia_logo.jpg": "4deeecb3dbb5b60bc6a4b362536925a7",
"assets/assets/image/contents/anderson_logo.jpg": "6d110bb830769d19caba01f957bb2adc",
"assets/assets/image/contents/apostolado.jpg": "86a04dc8872f83859e6646216473d47a",
"assets/assets/image/contents/apostulado_logo.jpg": "ed89019ece1ba59949887061a90d888f",
"assets/assets/image/contents/aquino_logo.jpg": "74a6540b692e04b8927fd128c1f1b61a",
"assets/assets/image/contents/arte_logo.jpg": "ea024eb0e726cb156d2c25aed4be555f",
"assets/assets/image/contents/bernardo_logo.jpg": "0d61c4f909ecfc4f7e8246e23c7fbf8b",
"assets/assets/image/contents/braulio_logo.jpg": "03e6d8ac135f30f66b8edeae66dcd4fc",
"assets/assets/image/contents/carona_logo.jpg": "c5edd22ad6cff16f9116600d2ee17453",
"assets/assets/image/contents/centro_logo.jpg": "dac82449e96197162496903cf077651f",
"assets/assets/image/contents/deia_tiba_logo.jpg": "e8912b4d59395e8dbfa2068a37fbcf31",
"assets/assets/image/contents/diocese_logo.jpg": "1d86f79410e7119d3b2e5495b340abb9",
"assets/assets/image/contents/ecclesia.jpg": "56681dd6cf84543978257f2a42c2df9b",
"assets/assets/image/contents/faus_logo.jpg": "e54df1152e224e8aa04d328acaf61fd5",
"assets/assets/image/contents/fecotidiana_logo.jpg": "7cb311fa4737b821c29cb683a545c988",
"assets/assets/image/contents/freire_logo.jpg": "55b9d790d49217dc8481c8f9ecfaccbb",
"assets/assets/image/contents/insta_logo.jpg": "f0e6976dd8fbcf86e23c35a9f7233dfa",
"assets/assets/image/contents/leonardo_logo.jpg": "93143899557678fd0125c4da2e47d8cf",
"assets/assets/image/contents/lumine_logo.jpg": "551179416ca84978ff97e489f1e18d0b",
"assets/assets/image/contents/mbc_logo.jpg": "01b24504a507bf11283f71cae9d17428",
"assets/assets/image/contents/opus_dei_logo.jpg": "e76b4d6fdf6c548f28e5cdb79d59b2de",
"assets/assets/image/contents/padre_paulo_logo.jpg": "8db26a8871038f17906e520776787b15",
"assets/assets/image/contents/parafalar_logo.jpg": "0779b9424145090146ce1410693adb8c",
"assets/assets/image/contents/paulosite_logo.jpg": "d4e8adc5ab81369029f941da8a09a6ea",
"assets/assets/image/contents/petrino_logo.jpg": "ee52430b1daddee26801a4b8977aba87",
"assets/assets/image/contents/pe_wander.jpg": "32c2de4fc9c3cf10382cc2bcb35e6198",
"assets/assets/image/contents/raul.jpg": "a064b2a7210ffb5c789c87f9063b29aa",
"assets/assets/image/contents/santidade.jpg": "2b8a6347436e36f974a341e1b80c0584",
"assets/assets/image/contents/sidney_logo.jpg": "ae3bc7a4a74812aca4f3493d5e6ecc00",
"assets/assets/image/contents/templariomaria.jpg": "5dd4f9303a8628666f41cd63f1fcaea0",
"assets/assets/image/contents/trechos.jpg": "89fe713448c25033ae20b93ac3aea8d5",
"assets/assets/image/formation/ano_liturgico.jpg": "ffa10f33c9cb86c88dd9056ed3d7a064",
"assets/assets/image/LogoSaoJudas.jpg": "faafd18ea25a83f5a4278352e0b8a65a",
"assets/assets/image/milagres/bolsena.jpg": "f16d259fbc4239694466f8e9824ec390",
"assets/assets/image/milagres/buenos.jpg": "7d1242a7a047fc462a78d7e2f52b3af9",
"assets/assets/image/milagres/cassia.jpg": "a6ea3d864e9de7c1a65b026839d1bec6",
"assets/assets/image/milagres/faverney.jpg": "ee86f961a5882ebc0769214307359d11",
"assets/assets/image/milagres/ferrara.jpg": "9e6bcac1f4a02c340842e903fcfb29b3",
"assets/assets/image/milagres/lanciano.jpg": "b003f8921d8a4fb5b4e96ff3a5385fa0",
"assets/assets/image/milagres/offida.jpg": "2c421d66fc8e1febe85d206583bd8a79",
"assets/assets/image/milagres/santarem.jpg": "a2174dbd184f3b1af244a4e7b5ad852a",
"assets/assets/image/milagres/sena.jpg": "68ffb920e68bc690d6b76c6b5ed2d67a",
"assets/assets/image/milagres/stich.jpg": "b26e1b18cb8d01a1a039d466ccba5e32",
"assets/assets/image/milagres/turim.jpg": "fbf826fae1f587567e892233476e3fd2",
"assets/assets/image/rosary/fifth_bright.jpg": "28b1af5311dd03de7f53a91dcf1d6e43",
"assets/assets/image/rosary/fifth_glorious.jpg": "4b55298a7490f82ed7b9f62f840ab694",
"assets/assets/image/rosary/fifth_joyful.jpg": "15459023e15c036c0c7193cb623690c2",
"assets/assets/image/rosary/fifth_painful.jpg": "bd9adbfcd075f3e6d0237b64b920cb75",
"assets/assets/image/rosary/first_bright.jpg": "911fb2e8f63ac480265ae2e581b5c4b8",
"assets/assets/image/rosary/first_bright1.jpg": "39b0db72bc2363d31739f4e3b6e42d47",
"assets/assets/image/rosary/first_glorious.jpg": "6b8d4986b2c8e23fec764f10a3584ab4",
"assets/assets/image/rosary/first_glorious1.jpg": "21091e9859293542dc16972376954eb7",
"assets/assets/image/rosary/first_joyful.jpg": "ff35de60ce78b1c4017a16fbf6dbe292",
"assets/assets/image/rosary/first_joyful1.jpg": "6976a97e53e174cb05de7f74e3d07661",
"assets/assets/image/rosary/first_painful.jpg": "0edaa69705ddf4334190cb875453997f",
"assets/assets/image/rosary/first_painful1.jpg": "fedc9433fe5e8bf3e286cf0e76fde2d3",
"assets/assets/image/rosary/fourth_bright.jpg": "4fe9b41b661c9a165fe92a61d4ed99a8",
"assets/assets/image/rosary/fourth_glorious.jpg": "b67be927d209f82c662313a227566ed0",
"assets/assets/image/rosary/fourth_joyful.jpg": "036a2d44c074a745180dff85fa0b4f5f",
"assets/assets/image/rosary/fourth_painful.jpg": "f4afd71673463cfcdf08608ae32ec50a",
"assets/assets/image/rosary/second_bright.jpg": "26bd4814bf5e205adb4122e68fd8e9df",
"assets/assets/image/rosary/second_glorious.jpg": "751622aca546309251de8fd792a14714",
"assets/assets/image/rosary/second_joyful.jpg": "f1f77b3f0bf7f34e062574279641a4bf",
"assets/assets/image/rosary/second_painful.jpg": "e5fbdcaa6eb4b1359a564d4e93f63211",
"assets/assets/image/rosary/third_bright.jpg": "cd96c0cbdd940842f32e9be9ed1f57d8",
"assets/assets/image/rosary/third_glorious.jpg": "4655dd60b2bd56d5d32a51d7578b0b40",
"assets/assets/image/rosary/third_joyful.jpg": "d1682aa1c7cd069ee91996823d8cdf1e",
"assets/assets/image/rosary/third_painful.jpg": "2d90f8aacf532f1ca050f556f7088fe3",
"assets/assets/image/sponsors/celso_logo.jpg": "9f3381e55b0219949434be494d860eea",
"assets/assets/image/sponsors/donatti_logo.jpg": "6e621df9666684812f5307c3301ad42c",
"assets/assets/image/sponsors/fe_logo.jpg": "38ccc156252c8404dfe0f478e4ddc359",
"assets/assets/image/sponsors/fund_logo.jpg": "d007c752059b706bd3939a5ff8d5c5de",
"assets/assets/image/sponsors/kaka_sorvetes_logo.jpg": "9407153688309052cbe68ec73101f6f6",
"assets/assets/image/sponsors/mais_logo.jpg": "7a369103d2b7dff8a4e6726fac65dddc",
"assets/assets/image/sponsors/ms_logo.jpg": "851e01772a945ed67c4c096de8babf82",
"assets/assets/image/sponsors/saude_logo.jpg": "78c6b91ba0a4df622cfcf691cb963ec7",
"assets/assets/image/sponsors/sjorge_logo.jpg": "ea3559e0e04ae7eaa1a39bea0430de23",
"assets/assets/image/sponsors/voyage_cafe_logo.jpg": "bb49be928ab181ffae09cfe7ad666ea8",
"assets/assets/image/via%2520sacra/decima.jpg": "9fbbeff3fc04ea9877142610aaa6fddf",
"assets/assets/image/via%2520sacra/decimap.jpg": "31b34e49a107e58d40393dd5867f5fca",
"assets/assets/image/via%2520sacra/decimaq.jpg": "3a9954e4ff4a6c038f3207ff86ee4d41",
"assets/assets/image/via%2520sacra/decimas.jpg": "2c61d897217f4983c8539552f8b34f8a",
"assets/assets/image/via%2520sacra/decimat.jpg": "1506f85f1fa3072b13748035fd456891",
"assets/assets/image/via%2520sacra/nona.jpg": "6ac4ead1f77fa5c09f7009fc210e5494",
"assets/assets/image/via%2520sacra/oitava.jpg": "8bbc86fbf999f3f8e98c8bcffe0f4aee",
"assets/assets/image/via%2520sacra/primeira.jpg": "3bf5867c8b0b0e09b41b47b1cf0b43be",
"assets/assets/image/via%2520sacra/quarto.jpg": "c9807298a26d2220f055c5e605889a90",
"assets/assets/image/via%2520sacra/quinta.jpg": "d7b79dbcb731fa3be7db1459b7110941",
"assets/assets/image/via%2520sacra/segunda.jpg": "870ef92b394b2041905dff71293bc918",
"assets/assets/image/via%2520sacra/setima.jpg": "46200f4e0051663110271972d205ef6b",
"assets/assets/image/via%2520sacra/sexta.jpg": "a32c3af811475cc590ea9162a7de18f0",
"assets/assets/image/via%2520sacra/terceira.jpg": "3978ff42517f592a8a75199380758d41",
"assets/assets/image/virgem/akita.jpg": "820f6684f4cd22c9ec8e1ee3360afe03",
"assets/assets/image/virgem/akita2.jpg": "280ade8ce6f2f99f766952494f2ac247",
"assets/assets/image/virgem/aparecida.jpg": "2785296f9e2cddc48966846e6afd8f2f",
"assets/assets/image/virgem/banneaux.jpg": "76a9c6779e411a353473149f53f35995",
"assets/assets/image/virgem/beauraing.jpg": "ce55dbc5c2915f4203be893a11085665",
"assets/assets/image/virgem/carmo.jpg": "1b68427914474b90d6f22d0808ce3ebd",
"assets/assets/image/virgem/fatima.jpg": "7e7dbbff2d67bf38e662454516b2aa85",
"assets/assets/image/virgem/fatima2.jpg": "6e0bd5b5f893f2faeb878d4a958ae062",
"assets/assets/image/virgem/gra%25C3%25A7as.jpg": "49b3371dd9af8253aebce235c3301ab8",
"assets/assets/image/virgem/gra%25C3%25A7as2.JPG": "917930908211e40e81925dc5552b27cc",
"assets/assets/image/virgem/guadalupe.jpg": "1c585a17fc23ad41cd6fe2f00634c2e7",
"assets/assets/image/virgem/guadalupe2.jpg": "7d9ce4963e44d459b1429c689e24e371",
"assets/assets/image/virgem/knock.jpg": "9001fd00ff18f582fe814ede9ee5c843",
"assets/assets/image/virgem/lourdes.jpg": "f1551602f305a211a651e482841cc6b0",
"assets/assets/image/virgem/pallevoisin.jpg": "5aad4732a02d2f98b874dc83bc130bfc",
"assets/assets/image/virgem/penha.jpg": "f5296627fd9133fbfd8ae3acd09a76a7",
"assets/assets/image/virgem/pensiero-bibbia.jpg": "2e78b16f046277a4a6f97732faa53fcf",
"assets/assets/image/virgem/pilar.jpg": "27f787b376beb3f935dd8c3e1e2548c4",
"assets/assets/image/virgem/revela%25C3%25A7%25C3%25A3o.jpg": "90dbcd29f777d2e1a25f01bc2a765221",
"assets/assets/image/virgem/rosa.jpg": "bf44e2fe7bba751162bb9638e4da2ae3",
"assets/assets/image/virgem/rosario.jpg": "dc663b0d894536686b4271923a4523e6",
"assets/assets/image/virgem/salette.jpg": "390adde6f005d2df068fa5ad5eccc02c",
"assets/assets/image/virgem/salette2.jpg": "62b6c6c64be9b5cc56eb630508a1623c",
"assets/assets/image/virgem/success.jpg": "69726aabab25dd0ca3db5e8d500311db",
"assets/FontManifest.json": "8e843f78cf3f10d33ac66dc20562c275",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "cc6ff1038159c6ddf453c72f0655e30e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "260cc94b3676008dad6f5ed76a8eb10f",
"/": "260cc94b3676008dad6f5ed76a8eb10f",
"main.dart.js": "8343bb6194e53c2903ee1825ae35135c",
"manifest.json": "2947b3287e2581a49fae37c23fcba39b",
"version.json": "b9762e9414632def3678f4dd53e490cf"
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
