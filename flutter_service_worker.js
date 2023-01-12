'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c38baf38f3f52451505e10dbe0e9190e",
"index.html": "8b5f5c46b5e16c86cf7ff1c144403e38",
"/": "8b5f5c46b5e16c86cf7ff1c144403e38",
"main.dart.js": "09d35f2456e628bb3b8f0c17e2201537",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"README.md": "d659dcaf522d70c5e7f32bc50ed0e26c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "00b4c8f3ef2f7c689609c216df7f1ea8",
".git/ORIG_HEAD": "8b69b190b192b71031d71b8c3cb43850",
".git/config": "96b435eef837994dbd7a2ec892752975",
".git/objects/59/68d00a7df1c7cbf609f267cd88ca13eaee77e1": "b380731566c92b41a81fcde5285c8400",
".git/objects/68/57285428984d25e39d78ae977c518670d89bae": "1a21a8b79f9337af4d156107c2136833",
".git/objects/03/04c330cffb6633458222a8d21f290607a8bbe3": "bc685fbc7b94c489cda0fa7cfbcdf5c5",
".git/objects/9e/5afb2e43d69777b66f9e4abffeb96b87843eb2": "0aa4de2ebaf8b13294b3e3315a3858c9",
".git/objects/04/2c7c0c15eeb09b228fcc874262c31c55bfc2af": "8b001657249f059c99650c2227f7be46",
".git/objects/6a/e08d360af041359cfb9947832d683738ec9f8d": "187f1c29380da98d3d2a9aa841e4f1b7",
".git/objects/32/ff4fb6a8a8ef655c89e6687f58a4c309844b72": "342260c11d57c9cbcfd0888ef0015544",
".git/objects/67/69dd60bdf536a83c9353272157893043e9f7d0": "6fc3aa77041a80385395e7e98abfa9a0",
".git/objects/93/cd832870e4db5ee44e514c7f4093e387051208": "16427968b48c047effcc95a2ded79887",
".git/objects/94/84453b1789c659eec3e76e8f47890b22e0e7ad": "351a9fa2141eb50d0432d9a500c7dd1b",
".git/objects/a4/c8cd694543591fab4c383d99c67e6b57f71bc2": "1336451d3bc69e63c216bc7a3638b076",
".git/objects/a3/d1f4dd59854ec8c7ca1f304649f9c3c2dff4a0": "178eddaeee213005dc5f92177509106b",
".git/objects/b3/8f15ae5e9f34f327451dcdbaa3fa7014e7a4c1": "55ef922adf313ef6668766a20cb61869",
".git/objects/a5/861ed04091ff907cd29dd89c086edb48a5facb": "7f264c23ca8b6c4abc6e0764b48c074a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/421a19b0c0963f6b53680ec53ff72a7ccf15f2": "504adb362e0c7caca338c251038747c5",
".git/objects/ab/86aa86f034676a3bcd70c2b0ee2f9fa82b25df": "ae81ced7e00ade23a935801446321ad4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/85ae7df94ca87076d9e72d67b89631546b977a": "3f1ae85e35df7a2ff2efd8b2f61f7e63",
".git/objects/f4/d7eb18d2f8f1af68466a043d49c79fd771097f": "c4b12a024da3aa2678ed56f3393bcfeb",
".git/objects/f4/d71f98e6f0337f590d1418c1f3157c2e314641": "8cbdc35f19ca8b2c52ed893b06afee9b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/b4aca4f1acd936ea1abfa6c296af4783c68ccd": "8b4f560c49e4749f97abd187d6966762",
".git/objects/ee/4de8e0442df10c02a383db7ae8dfd1724f9de0": "f8ca628d752d59498e1bfcd3bc1432a4",
".git/objects/fd/ddb29aa445bf3d6a5d843d6dd77e10a9f99657": "73530efb8befa67dd90392f5763fe9c3",
".git/objects/f5/b711c5bb987848951aa73b5a374120afc7d4ea": "a1a088725954a20716ed7038eea88b79",
".git/objects/e4/a674ca59e0b7d74f7500d985455755bcc3373d": "0358930a3402146577ecc098eefb55ad",
".git/objects/c8/5af201146a493a0f23993d113fb6e343f203bb": "c6a8fe6d83ddb2afd73cf060e8aec947",
".git/objects/fb/e647908042e57da638811bff3e2b90c712718a": "eadb22daf085e9e5495d2d5bb7aa0a28",
".git/objects/20/6bc3652d8cb504f477370418eee9c343f8dbc7": "ee43069e4789bbe5653cc9da24d4b11a",
".git/objects/7d/0fb505bd3a8b5672ea1d5c326bdc5a298add9d": "a790ef2dcd89a74a7d30dd461744a9cc",
".git/objects/7d/bb9afdfb42ca09076387e56ae968d9fb05b927": "bbfb8407563d291440d0bcdab31ca00b",
".git/objects/7c/04f2e03032e75c263e22328d62569106013861": "ce579aa25fcf3d47c2ed0a22268b077d",
".git/objects/7c/4c1ceddbb87569bd392793f8b20bcd4a4019df": "e84088bfdb0bc3ad6ec3f91527cf3bff",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/87/bdb6fa81b3c262db640e850e0c38957d807cdd": "b50d1b163b7ef15d0663e64f2c2d571b",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/b2ff0af9e25e65cbab8afb39d0966b8833728a": "6acfa480c30351fce13fff1bdf5b842d",
".git/objects/1a/1b5bff3d32e0424a8f8d69beea960d339d5276": "88ac3f724e12f0748fe39049ef6208df",
".git/objects/7b/f08cbdaaf6ff1d6c2db6de3b90396a55032421": "20a09ef249a4edd5841e56cb183b14f2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/bd445ba0b952531e1c2beb24e00b01c2b0fe8e": "5e1c701c9afc2bb7662d20a30db4eed5",
".git/objects/26/ed0ce57167cf831fefec0b6f5b91ccfbe6be81": "1d1ac074a856e271dab296a8b64fea3c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/f6b3bbcb26c3a272942bb47e20f35319466edd": "8811e1ead833f8b42fe1d649e14cc052",
".git/objects/36/2a987ff843e23254e99bb0705de65a840396ac": "15c2177c812d3ffd79533f00fef7c893",
".git/objects/36/cf04bd9a844ac5266eab5d44e9badd464b7b86": "2efe85c2d0f4bc531015d5fb830b36f4",
".git/objects/91/c321cf0b602fbbdf63351930c8118a68e909ad": "7620b1aa158fcefe63b0596461df396f",
".git/objects/65/6f7d48c56321dbe2b4f7de0c8a6446585400ad": "a689778ef54d5ab1027e73dfdbbb5627",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/08/140df170ea4f6640b0d55f38b30838ce8ed685": "1ee2dab817ceafb15c626d688e788624",
".git/objects/97/eeabeb1b0e7ed5262e46654a3712e4ad100fea": "a05f7ca33f3a1b9a44cbcb6ee6772b78",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/64/c8ae69515be9d02d19df7f2a5b91f5aaec84d0": "0791798f5dc266633962e87fb2107b57",
".git/objects/64/4e5962d35ea53720a68dbccf3c9d0bb4e103f4": "b112caf90b3538e6ab90c5878c64478e",
".git/objects/a9/76f071c8c8a17ce7298cfe81f963c8ad5fe292": "b08a204f493870a7c1291c276b82c54c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/07679afb6e2bd7788307cb8fb7c3594b3a377d": "1ef8d96127092aeb239c9f360e378db0",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a6/f567ec9b0b65791333e865074a77e30290ce30": "0c39e44fe4fedc7b8574b8412141e923",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/43165e27c83189892c92d651d1580779e1b3f1": "6bf02533d3ce75c72557b0a66fe48524",
".git/objects/ef/b66d5c200787594e196a9a7f55e0b3df5fa045": "f963020490c91125e16d689827c75b7a",
".git/objects/c3/1ccfa4fda2a74e0ef5f34ec4e33bb6d9cc2cdd": "4ba58b2d9bc101713c2acdfe48034858",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/1636cf22f20a061f6cd9105721a353bd04c8e3": "dc1fd34cf6cd76e309597f853162b145",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f9/12d21f24674c20a1bda9146473eac60bc0da71": "33863bd9222225e636e310489cb8a0a1",
".git/objects/f6/7448dd91331a34a0125e9b0a61aa24a4aaddaa": "4f3ab395605a9a21091e2d9938d38955",
".git/objects/e9/f959298aae64e3fbe47162e842fbff275fcd22": "f5186ceb7b5cae19dca5ad2ef7c5b3b8",
".git/objects/e9/ec314f3c445e084f8c21ff145c14337185c228": "41ec5e4db28e0c91901d6c839aa40e92",
".git/objects/e9/e233c4d9bea5b24e1c8971f927b2eaca865f1b": "b57a6fb4e5a203825379dcabd96b4205",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/2f8a5e01ef2220b67e49bb9423f9ad7f319784": "5ab16e6f15e92deb2bb3c6ad3abad864",
".git/objects/83/46a54738e7b49054e93a23b777280fd6224134": "ab60421f3183a00e55535aaa72248256",
".git/objects/84/11515cb1ede2df48ad088e92c104b2e1f6948c": "875081203497c98129d2e7c6ae6f3914",
".git/objects/4f/e4e1122b97b138b60aa1c1b67819a6dcaccb1b": "714c6524bb494838cc69337385e91b20",
".git/objects/4f/7e929d39cd86f67500031d6eaa109391ad1b75": "709ab24cb7b685da985a3755ea11522e",
".git/objects/4f/4e57363eb607b7b8075d44b7926c324cc17917": "46ee360142a93562f76bb2ffa8a7cb11",
".git/objects/8d/c1066890b19ba8c260a169063043607aa42142": "aca7c8a5d98391b3e39aa5fd5dcd0980",
".git/objects/85/4cc47ff601104531fcf4548c7ca976a4e28e78": "303a516e1a0c4206c92df2cff5b0e489",
".git/objects/1d/8cbd3a693303a3b912a2c36592c17e5b7d9ae0": "b51ac5fa6118922e95c5191ede7bdd9c",
".git/objects/1c/79bc81964a279310bbd3ebf7bb7bc5376802a1": "cc108845fc15e5481d59f7949db456ef",
".git/objects/2e/ecacf599541e1e67659248a6333c238ce6d104": "2fe1d90e96ceef90cfa34eb6bacc3b77",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/7a/c9d368a67a15bc57a6e75c379ad63eb4b6a905": "5ab615769f8984b1d2eb1ed018d39c13",
".git/objects/25/8163e4e8b4041907df5d4314cf68d9f3bf0fce": "c0774075f04115f09ee797b0f3406ff9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/fork-settings": "cd96b9ea2194fe021b66b5a084efff3f",
".git/logs/HEAD": "894fcd70e0869855bfda11688ebfa780",
".git/logs/refs/heads/gh_page": "a1166129789470c24f3f1935fcd76229",
".git/logs/refs/heads/main": "585f126ae15c5225e3e0cdfd9400d9aa",
".git/logs/refs/remotes/origin/gh_page": "f5ab8756a4807356a008a690540b9bc7",
".git/logs/refs/remotes/origin/main": "d40ba9ef9053f1920b7199d9a35fa538",
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
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/gh_page": "276dcafc15e5c6bb5fd3f14e6623212a",
".git/refs/heads/main": "085c9338a542b27a452af1b440a4a5a7",
".git/refs/remotes/origin/gh_page": "276dcafc15e5c6bb5fd3f14e6623212a",
".git/refs/remotes/origin/main": "085c9338a542b27a452af1b440a4a5a7",
".git/index": "efe14fb40c7b7b1dc7ed91497a987899",
".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/FETCH_HEAD": "994bd62312cedf8e04c53b6c9472793f",
"assets/images/elements/main-square-small.png": "0d6e984930ff22260602b06cd0640d18",
"assets/images/elements/main-cross-big.png": "512e12bb926554d901f918a21e4d3014",
"assets/images/elements/main-square-big.png": "e56e83f41d69383e971941d731a3004a",
"assets/images/elements/header-dot-2.png": "19a7bd266b7f7e2f651d9ec1627f73c9",
"assets/images/elements/pixel-shapes.png": "b575d36fb6c5544c86043eced54dd89b",
"assets/images/elements/header-square.png": "ee257ef8d2febfd599790e797eb8645c",
"assets/images/elements/main-half-circle.png": "fdf0820aa419804a40a804ce8a55028b",
"assets/images/elements/footer-c-shape.png": "0fae6ab7a24dde25ed5f4d2347b5bd34",
"assets/images/elements/pixel-heart.png": "f78525530769db5d332f5b6bff2d4e92",
"assets/images/elements/main-text-back.png": "1a932f248ebf50dc3fe0790410b3edf8",
"assets/images/elements/header-dot.png": "5e4d72380668cdbfcba8f2e6b7da6897",
"assets/images/elements/footer-dot.png": "6cea298f13c10cef0929607575ef8e66",
"assets/images/elements/footer-triangle.png": "70795c002f628b969613cf4afadfce8d",
"assets/images/elements/footer-triangle-gray.png": "4b05cb39ed9631f4de948eaa93ef4767",
"assets/images/elements/footer-circle-yellow.png": "0f703ad1a96c6b1a4b44973e994ab870",
"assets/images/elements/header-triangle.png": "d94375006550493160bbee1ce8097758",
"assets/images/elements/footer-small-square.png": "fafce04ef954e4271da8c4ded219dcb0",
"assets/images/elements/main-cross.png": "1e10743ea9c56e3db48a49f94a3645b5",
"assets/images/elements/header-circle.png": "3dfdd5eb00a23701083f0c39a3c89ca9",
"assets/images/elements/footer-dot-big.png": "1ca30724415eaeaa5e5f360b6153a406",
"assets/images/elements/footer-semi-circle.png": "b52d12ac99aa2fa0504ee34eb166fcb7",
"assets/images/girappe-logo-header.png": "e41a582c904545d44bf2f8d2dcf2b858",
"assets/AssetManifest.json": "815408ed0dbf570bb94aae628cf854a7",
"assets/NOTICES": "363e0d7b7af23b314e3849866e136190",
"assets/FontManifest.json": "bb03365cef01cfac5821e59244a0c1a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "a31d6bbe7226cebbe63104134562aab1",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/elements/main-square-small.png": "0d6e984930ff22260602b06cd0640d18",
"assets/assets/images/elements/main-cross-big.png": "512e12bb926554d901f918a21e4d3014",
"assets/assets/images/elements/main-square-big.png": "e56e83f41d69383e971941d731a3004a",
"assets/assets/images/elements/header-dot-2.png": "19a7bd266b7f7e2f651d9ec1627f73c9",
"assets/assets/images/elements/pixel-shapes.png": "b575d36fb6c5544c86043eced54dd89b",
"assets/assets/images/elements/header-square.png": "ee257ef8d2febfd599790e797eb8645c",
"assets/assets/images/elements/main-half-circle.png": "fdf0820aa419804a40a804ce8a55028b",
"assets/assets/images/elements/footer-c-shape.png": "0fae6ab7a24dde25ed5f4d2347b5bd34",
"assets/assets/images/elements/pixel-heart.png": "f78525530769db5d332f5b6bff2d4e92",
"assets/assets/images/elements/main-text-back.png": "1a932f248ebf50dc3fe0790410b3edf8",
"assets/assets/images/elements/header-dot.png": "5e4d72380668cdbfcba8f2e6b7da6897",
"assets/assets/images/elements/footer-dot.png": "6cea298f13c10cef0929607575ef8e66",
"assets/assets/images/elements/footer-triangle.png": "70795c002f628b969613cf4afadfce8d",
"assets/assets/images/elements/footer-triangle-gray.png": "4b05cb39ed9631f4de948eaa93ef4767",
"assets/assets/images/elements/footer-circle-yellow.png": "0f703ad1a96c6b1a4b44973e994ab870",
"assets/assets/images/elements/header-triangle.png": "d94375006550493160bbee1ce8097758",
"assets/assets/images/elements/footer-small-square.png": "fafce04ef954e4271da8c4ded219dcb0",
"assets/assets/images/elements/main-cross.png": "1e10743ea9c56e3db48a49f94a3645b5",
"assets/assets/images/elements/header-circle.png": "3dfdd5eb00a23701083f0c39a3c89ca9",
"assets/assets/images/elements/footer-dot-big.png": "1ca30724415eaeaa5e5f360b6153a406",
"assets/assets/images/elements/footer-semi-circle.png": "b52d12ac99aa2fa0504ee34eb166fcb7",
"assets/assets/images/girappe-logo-header.png": "e41a582c904545d44bf2f8d2dcf2b858",
"assets/assets/fonts/PlusJakartaSans-Light.ttf": "7269d597a1420ab80a2da6d56a164e35",
"assets/assets/fonts/PlusJakartaSans-Medium.ttf": "86c690cf3c5fa19ac4d644e3179d726e",
"assets/assets/fonts/PlusJakartaSans-SemiBold.ttf": "888a09fc349fd86b358f8bf1d343c69f",
"assets/assets/fonts/PlusJakartaSans-Regular.ttf": "1c53607464229476dd0241bcc71235f6",
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
