'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "e458957a79dc18493cc991e1b0440012",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9b87eda4d11426f483cd4c092da49aa7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ba2b2529fe876bfadd7b68ef6a89a671",
".git/logs/refs/heads/master": "ba2b2529fe876bfadd7b68ef6a89a671",
".git/logs/refs/remotes/portfolio_deploy/master": "c477a4b107e27b20c158c4734f687a0f",
".git/objects/02/3e995337a13d980bfcfbe6ab05e187ca6276c4": "ad9baf192dc30b34447d11945fde5520",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "1cc6403c603e76bcc26b0586008b247e",
".git/objects/0e/25048ecf362d4fc2c0e4ec864c25638c53615d": "f6a39bc762e448ddd5b5dada77112e0a",
".git/objects/0e/64f72f2d711bc3b6dddb863288c064c01ef087": "3f145d8fb671da728f80f77a90b4b569",
".git/objects/12/6864f008a33f6ebec006c5e7c898e6bed28ac6": "5cbd5dce9976ed3bfb8af75fa9358744",
".git/objects/1d/f0c41082473dcaaeb07af6a267cf5ce022884e": "ff283cd1194739c89d6d06d8d7fff0ae",
".git/objects/1e/09e390a2399deb094b3797938ef5da3946bc47": "ef610a27ff50569ad8f5f191c9897844",
".git/objects/22/35d0adef3d4e389e8d947e07c051e4d010e4c1": "487b3e3024a5ac5c6977c0285b982371",
".git/objects/26/85cb76e91fc8d479e9d1a865234d209a9c194d": "dd259a425660dc808298c3fead64e386",
".git/objects/28/37fdd8a309e936c3e34b48f832d75ed1068c8d": "df58e91c34724497e3b6a0b7de10feb0",
".git/objects/2d/977613b5f1266e687bce77f153cb07e9e35dfe": "c71d5e2cddd85e09702fa54d4652b904",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "b786283fd4289795d6530a1cf5fa703f",
".git/objects/34/1c2bab0bae2c099235f0fb4573623657efbea8": "95fb39000863fb380df2446d89f38d7c",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "ecdf16b6e236ddf82afbc5360f5ce6bb",
".git/objects/3a/d3bb1351ad7b3578ca4062ef3cb5477eede86e": "6c607d1661d72a7075be3abfcdb4a331",
".git/objects/3c/eb9471ae74aaa35668ed585ebc5c393b13e8a1": "3620a1320a3786e0e58c0d0c7aed5c7d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "3ac7af462afd2c09154fc9d4fe3ca9ec",
".git/objects/45/3e47d2ae1a3672de2f2f24eb265564a052f287": "f866dcc2ca988701c4a4c707fa32fb1e",
".git/objects/49/dc39cb3859a5dddc0416da83e8c525fdf82c7f": "3e9018ce53220c9b246c44731521b885",
".git/objects/4b/3bd091185ab58a6b3a3283f2e20da7212e351c": "4eb55bf2b8ac535b414f82c1608e7a7f",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "bdc2f4ba1c16b2f697d776261713037a",
".git/objects/50/fc7e769e4e311624ee842ff6d7d083b9559189": "d5aa88554242d5750c312287e98b1271",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "7a2beaf557655dfe4d49f90a155f8001",
".git/objects/58/c4cc3d2e143832032755c9bb0364460c9c0358": "e63a3d0b0d30effba51e326fec608f9b",
".git/objects/59/2c7e3b9f2f367aa5728e14a458ad828b45dc3b": "b7247b88d0842ef523d57b5ae5da0a35",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "bcdb121b48c166c5d22e1468320a62f2",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "bfd14d13850066655518c7b7f8c8a70b",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "c507d69554096e8cf8f581a9e3e2421e",
".git/objects/61/a75ce179b243f773186e1d73ae0b2c53a590ec": "ab00f6d5c2e4b88f1bd0189d27d2fc19",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "5e4a591c0e9b3c8ea49c825e5c65fbc0",
".git/objects/65/0445a942b1cae6d53e21d8c3b6f96845648b04": "2ff292d951957610c32ca19755f0af88",
".git/objects/68/2892f58c2df39ef0f026274470131acd638c97": "ac5d1751793175b1ca15d877c50d771a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/6f/e729e89f7d752ce34d64799b7a0e9848b9f5a8": "7517bf7a0ac9d9e2de43111ff32a8b79",
".git/objects/70/e6ebd681babd6338210ed9a0b956532c390e3e": "9fdc28d06947140e32b170a69a97b738",
".git/objects/71/e0affb099fccc4bddfe248acb00c53743416da": "471191ac0a12b44ed3b73cba572ab46c",
".git/objects/74/4396a3a27dd42905c90052bcba36027ebd93d0": "68a1cc73d2d5f74b91d34257fed62d3d",
".git/objects/75/92a7254ae7be0231d855239ea2734175b413e1": "1f040d26820a0526bf1ad076f383722a",
".git/objects/79/08d07f90a901085920fc34b1108b51ada9d0c1": "51acaa24bcb5ac2db7669ad587034967",
".git/objects/81/711bbf60182b9dd18c41f5facc961ffce5c643": "ec2c75764c46dca161bc5283ac339cf0",
".git/objects/88/af387318ecccca45ae10ab86894948ce6e49d8": "302499520d67f1cc378ab99c413bc77d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/89/c5d6757b906260f94aab5b2fd30e51d25e595b": "82dd7f711c1e8fe886fb5d8611e7e276",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "0e7fbd1f8845cbeb2cdbf944a84ebaee",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8f/bf50e1ba67180a0ab34ed176941f7fb89beedd": "ee635fdb6b43ec7e7c414a979301004a",
".git/objects/8f/cbb67455d8364906d9013888e95f05bae2d0e0": "954c3982b21b95a757211cb157874c31",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "bff9d14adbb36657694ef0fc6d5e6f7f",
".git/objects/99/f0899c94a7dbbd39856c1c97e54d23bf5dc8ad": "5694c2db7ea6a04fc76b18bdf295ae89",
".git/objects/a2/bcd24117800d37c25a1318cd142461d96bc66e": "187cb03c3dc0755bd0610e094ea28fd7",
".git/objects/a5/577338ddd3004f9d4e702e0f6c51eddfa57f66": "c658d95c24d0f9d39abc254d2450cc5a",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "5bea32f46d8e9e33e1e2bbb5c1523ffa",
".git/objects/a8/5386f7a763c104d43ffc96c7f70f4323544729": "8bd709ef4284ce7f85ee144b5a37f1e5",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "936bdc921e2d2af84e1b88a53c8fc956",
".git/objects/a8/d98f976f27bebba51e51cda11b0de1c5ed08f5": "5f97ab85af827ee778cb9427383d6bca",
".git/objects/ab/a80784a490b133d6d11b6f545a25a6eddad019": "6ed2d9fc7130f8832c81b1144995f603",
".git/objects/ac/9c49d01f74211c401a78f8b3ffa5e81403e688": "f334709821c2359cf29a3297eada724b",
".git/objects/b5/5dda4335f5361564487ac9d48167030b2b74e7": "708100e64ba85f49d8b740dbdb7e08e3",
".git/objects/b6/7e2be197985305f8a2771454caf19fa453ffca": "2791ac1d3140cb95326e75c3d9ff1602",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/c1/ae31b0f415b568dd2c804800ee8e4c8fa3ab7f": "cd7e6e277ff79e188db29cc46a626b0c",
".git/objects/c2/5da039e81e2f41ced993e50d3a54a2019c15f6": "0e346ac1b529a3593bdd1c3da096f990",
".git/objects/c7/e9aa077e9b695d6eb4ede768748912ee3276ac": "53122416a456f57fc8ba39409ba01ce5",
".git/objects/cd/37c25e6fb6d298071ecca2e3ecdd79d6425c3d": "3c5f349cfd03607d1e05fdc381349f38",
".git/objects/cf/f763b3e5f1f6cd6066e0054efe1527a7dffb40": "c90617e9706f12686488d07c4f6971c4",
".git/objects/d0/3b5d487aee481113da06c28fdea0d4bd6e713b": "e373c0cd57b4388c0780450c1d229cf1",
".git/objects/d2/5445f86bc8106101946474060d2269344cdd4f": "6c714c1e257a68c82ee4d9208131f98c",
".git/objects/d3/f95cf1ed44864d4fc6c910e7e3e4118c0199b2": "90417974dbd18f8ff99239c4b07463b9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d5/15fcda361b554e4bb0d6f6f466fb20aaf2f2b8": "7feca0861e8e9dadf3c6c0d0c5cbd918",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d7/05c190d300362793393cbfae3c43d618150131": "2e7ddf9a6538942208e68f4b694fd00e",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "819a1bee2d98b54140582e489dcbb8ba",
".git/objects/de/8b7d0cda405b0e7f4f121fad6a875c954b1530": "458a050b31e3377bc92a390e75263b47",
".git/objects/e3/7cd361fac719b9e5da0d71d71882db19c2653a": "dc5fa6db8918aa534974e021b1627ac9",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "06319d1126433915a2b82321cb327d7f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f3/4a4bc09a8e1936fc9460afeedc46b1a4aebdf4": "9c888aaa43c3a6541bc4dbda8e21ae25",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "28153710279c4ac512d78eab4ff360c9",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/f7/d9023a6ca76b8e7a353959b064f0e32e30a292": "5fdb41379609061a9aa1203e39e9623d",
".git/objects/f9/70362010d2d6600b5d12fd64709dd41fce7373": "1b859d1e299ac21db7b2178a82460974",
".git/objects/fb/238d31307aef7afcad68b56048295613a1740b": "c5886a543da79fece35e6ca5b70d0b64",
".git/objects/fd/6b887f2befa1395700807af56e561077f09944": "ea12119cf774668b830fef644ec07b17",
".git/refs/heads/master": "e3c6d8e4f728b44b0aed7d2a7ac5a098",
".git/refs/remotes/portfolio_deploy/master": "e3c6d8e4f728b44b0aed7d2a7ac5a098",
"assets/AssetManifest.bin": "907d66aeeca9374835b7c38db546ce8e",
"assets/AssetManifest.bin.json": "232c0398dd2d904c10d0d7c382ad3e0d",
"assets/AssetManifest.json": "16dd77fae31d1f1aa326a55938efa5d4",
"assets/assets/Bitcount_Prop_Single.zip": "e7500cb608b2cd9a52bf61ef2522fbbe",
"assets/assets/montage1.jpg": "1a34caca7ef9b4a56953268431ee1f8f",
"assets/assets/montage2.jpg": "d63d918a566855fb032a03042902589a",
"assets/assets/montage3.jpg": "985bc2f90b2111842458b1680191273a",
"assets/assets/montage3.webp": "3b23b2c3446ebfafe93b1e779cf2a0fd",
"assets/assets/montage4.png": "822f6542f3535e0ef9f531ff63167682",
"assets/assets/montage5.jpg": "bf4296b49587bc2304b7793099cea083",
"assets/assets/montage6.png": "94d2037bdbfa96e1bdfbebb421e32225",
"assets/assets/profile.jpg": "e7b1852f3ce19ec923b18c3e26bfb07c",
"assets/assets/profile2.png": "a26c2233069207fb7f5693fd9bfd7367",
"assets/FontManifest.json": "b9e500a0cd00014c87780837c4520834",
"assets/fonts/Bitcount_Prop_Single/BitcountPropSingle.ttf": "ea5bd91829c05bf43d10a0f669ced657",
"assets/fonts/MaterialIcons-Regular.otf": "9dac2a014edb030eea0d83db933ac0b8",
"assets/NOTICES": "3b82891efa947339b243de26c44251e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "30f5a2d7df6b7cb5e1efbcd322ac5496",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2cf228ad22382539471211b8e41f99b6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "d961fe4a69940aec414d2132bbbe5f50",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon.jpg": "e7b1852f3ce19ec923b18c3e26bfb07c",
"index.html": "7038b76d797aca8dcbda23dffaaa0e54",
"/": "7038b76d797aca8dcbda23dffaaa0e54",
"main.dart.js": "0b064d0a5b8bea5f7798cc306ce379c3",
"manifest.json": "fcfcc1ff6260d400cdbcdaf71379d89a",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
