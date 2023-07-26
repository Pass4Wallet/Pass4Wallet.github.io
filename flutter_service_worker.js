'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c38baf38f3f52451505e10dbe0e9190e",
"index.html": "06a86ecc776bb4f9a24752ddc9cd8ca2",
"/": "06a86ecc776bb4f9a24752ddc9cd8ca2",
"main.dart.js": "9cbd963271cc5e10cdc2f30d7c331698",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"README.md": "d659dcaf522d70c5e7f32bc50ed0e26c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "00b4c8f3ef2f7c689609c216df7f1ea8",
".git/ORIG_HEAD": "276dcafc15e5c6bb5fd3f14e6623212a",
".git/config": "96b435eef837994dbd7a2ec892752975",
".git/objects/59/68d00a7df1c7cbf609f267cd88ca13eaee77e1": "b380731566c92b41a81fcde5285c8400",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/57285428984d25e39d78ae977c518670d89bae": "1a21a8b79f9337af4d156107c2136833",
".git/objects/03/04c330cffb6633458222a8d21f290607a8bbe3": "bc685fbc7b94c489cda0fa7cfbcdf5c5",
".git/objects/9e/5afb2e43d69777b66f9e4abffeb96b87843eb2": "0aa4de2ebaf8b13294b3e3315a3858c9",
".git/objects/04/2c7c0c15eeb09b228fcc874262c31c55bfc2af": "8b001657249f059c99650c2227f7be46",
".git/objects/6a/e08d360af041359cfb9947832d683738ec9f8d": "187f1c29380da98d3d2a9aa841e4f1b7",
".git/objects/32/ff4fb6a8a8ef655c89e6687f58a4c309844b72": "342260c11d57c9cbcfd0888ef0015544",
".git/objects/3d/0168705f4e04b5fda01dc7896d3fc9044affb8": "0e8be9c3b8318613dbaaae2904da645c",
".git/objects/58/93197dec7611261fbc352d342ca976ef1865f9": "c3fc7c7b785b5739534e9bdd73776339",
".git/objects/67/69dd60bdf536a83c9353272157893043e9f7d0": "6fc3aa77041a80385395e7e98abfa9a0",
".git/objects/93/cd832870e4db5ee44e514c7f4093e387051208": "16427968b48c047effcc95a2ded79887",
".git/objects/94/84453b1789c659eec3e76e8f47890b22e0e7ad": "351a9fa2141eb50d0432d9a500c7dd1b",
".git/objects/a4/c8cd694543591fab4c383d99c67e6b57f71bc2": "1336451d3bc69e63c216bc7a3638b076",
".git/objects/a3/d1f4dd59854ec8c7ca1f304649f9c3c2dff4a0": "178eddaeee213005dc5f92177509106b",
".git/objects/b5/ccbb607c8c5ca72544df1c3ab73b06cbce1e30": "c8b96c259c5a4343b88881d9a12a9edb",
".git/objects/b3/8f15ae5e9f34f327451dcdbaa3fa7014e7a4c1": "55ef922adf313ef6668766a20cb61869",
".git/objects/a5/861ed04091ff907cd29dd89c086edb48a5facb": "7f264c23ca8b6c4abc6e0764b48c074a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/ad2e8a3465d161936fb92b15e306ffe4a097f0": "cac139811959c8ad77c5594a2fb19ece",
".git/objects/ab/421a19b0c0963f6b53680ec53ff72a7ccf15f2": "504adb362e0c7caca338c251038747c5",
".git/objects/ab/86aa86f034676a3bcd70c2b0ee2f9fa82b25df": "ae81ced7e00ade23a935801446321ad4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/85ae7df94ca87076d9e72d67b89631546b977a": "3f1ae85e35df7a2ff2efd8b2f61f7e63",
".git/objects/e2/3edb780a8cb683f45f100449d573d36c833ec9": "54a87d78236c8d7fdeea005df8f003d7",
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
".git/objects/8f/05b4bfc71a9e42d322e2e3194eb08f67137453": "c2e6e8ba78550c5006f065b532c9772e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/bd445ba0b952531e1c2beb24e00b01c2b0fe8e": "5e1c701c9afc2bb7662d20a30db4eed5",
".git/objects/26/ed0ce57167cf831fefec0b6f5b91ccfbe6be81": "1d1ac074a856e271dab296a8b64fea3c",
".git/objects/2f/acc2ee08123ab15009a9b0e7d6272a0528e13f": "fa831ee6e58020849111c0cb16f70af9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/f6b3bbcb26c3a272942bb47e20f35319466edd": "8811e1ead833f8b42fe1d649e14cc052",
".git/objects/36/2a987ff843e23254e99bb0705de65a840396ac": "15c2177c812d3ffd79533f00fef7c893",
".git/objects/36/cf04bd9a844ac5266eab5d44e9badd464b7b86": "2efe85c2d0f4bc531015d5fb830b36f4",
".git/objects/5d/bbabe6d28c672025ed5bfacc83b4770cc1202e": "46e5ee75fc31c1577b0a8ce6ee5a71c0",
".git/objects/91/c321cf0b602fbbdf63351930c8118a68e909ad": "7620b1aa158fcefe63b0596461df396f",
".git/objects/65/6f7d48c56321dbe2b4f7de0c8a6446585400ad": "a689778ef54d5ab1027e73dfdbbb5627",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/19ca331adf8b7f481eae94b3aa7f295ee7d666": "8c8a43fa6840dd067c2e1c80d8c91b05",
".git/objects/08/140df170ea4f6640b0d55f38b30838ce8ed685": "1ee2dab817ceafb15c626d688e788624",
".git/objects/97/eeabeb1b0e7ed5262e46654a3712e4ad100fea": "a05f7ca33f3a1b9a44cbcb6ee6772b78",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/64/c8ae69515be9d02d19df7f2a5b91f5aaec84d0": "0791798f5dc266633962e87fb2107b57",
".git/objects/64/4e5962d35ea53720a68dbccf3c9d0bb4e103f4": "b112caf90b3538e6ab90c5878c64478e",
".git/objects/d3/3f905dfbff162cebdaba2857866fbf3dae2973": "b5429515cecce2b2c98a17f6f6591ef2",
".git/objects/d4/0619d6b83dad5957b0025b7b8b01d76ac8255b": "9be0adfd22edd45b3074902e9d6904bb",
".git/objects/a0/50a6f30a8dc50e5a9e823b68b3bb4112b0df3d": "2d4617bc963f9fde71e49c0408d2e737",
".git/objects/a7/91e81e9848fec3e562a08d4b06ac12785e94ba": "1b9460d4f67381c0fe312e2371674f1d",
".git/objects/dd/1e7b44aad649c0760d7cecaa1a18180bb89093": "976b97de2617d07bfa2eb12d715578c9",
".git/objects/a9/76f071c8c8a17ce7298cfe81f963c8ad5fe292": "b08a204f493870a7c1291c276b82c54c",
".git/objects/d5/6ee4caa7e14120dfd956c4a7014a437332855b": "58fa76f27955ea92703b772cddc75f6f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/07679afb6e2bd7788307cb8fb7c3594b3a377d": "1ef8d96127092aeb239c9f360e378db0",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a6/f567ec9b0b65791333e865074a77e30290ce30": "0c39e44fe4fedc7b8574b8412141e923",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/8cefd069db855c0af26b3c06552c6bfe29787b": "2dc6abe93d14d7cd7462db3a5296192f",
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
".git/objects/e7/250db91a0731f2ceaf97b02ea8c27853c8725b": "a3596bc9dfcf983d73ccc6779cd64bf2",
".git/objects/e0/d398e486da5fd09022a8cc8389951906bebe80": "31fad7d6c5714d4f74d979a875335941",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/2f8a5e01ef2220b67e49bb9423f9ad7f319784": "5ab16e6f15e92deb2bb3c6ad3abad864",
".git/objects/83/46a54738e7b49054e93a23b777280fd6224134": "ab60421f3183a00e55535aaa72248256",
".git/objects/84/11515cb1ede2df48ad088e92c104b2e1f6948c": "875081203497c98129d2e7c6ae6f3914",
".git/objects/4a/60080f7c053a3a7654bf478a0e220aa175154b": "b9088214dd08afe72a6585be13b73405",
".git/objects/4f/e4e1122b97b138b60aa1c1b67819a6dcaccb1b": "714c6524bb494838cc69337385e91b20",
".git/objects/4f/7e929d39cd86f67500031d6eaa109391ad1b75": "709ab24cb7b685da985a3755ea11522e",
".git/objects/4f/4e57363eb607b7b8075d44b7926c324cc17917": "46ee360142a93562f76bb2ffa8a7cb11",
".git/objects/8d/c1066890b19ba8c260a169063043607aa42142": "aca7c8a5d98391b3e39aa5fd5dcd0980",
".git/objects/85/4cc47ff601104531fcf4548c7ca976a4e28e78": "303a516e1a0c4206c92df2cff5b0e489",
".git/objects/1d/8cbd3a693303a3b912a2c36592c17e5b7d9ae0": "b51ac5fa6118922e95c5191ede7bdd9c",
".git/objects/71/e645f60b9a02abe52ae84dda01864d8d93f656": "925f6019f2901a9aa7bb728ac99ffdf6",
".git/objects/76/bb51939efcdf7499b9db4faae4dc963afc266b": "6dbb7e0b7cc8305d2a1f33e5395deaa7",
".git/objects/1c/79bc81964a279310bbd3ebf7bb7bc5376802a1": "cc108845fc15e5481d59f7949db456ef",
".git/objects/2e/ecacf599541e1e67659248a6333c238ce6d104": "2fe1d90e96ceef90cfa34eb6bacc3b77",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/7f/1ee24020b8d4203c1661a5cf5cd90a7e78a2aa": "d3374de90bd9404dfdba8c49ec34149c",
".git/objects/7a/c9d368a67a15bc57a6e75c379ad63eb4b6a905": "5ab615769f8984b1d2eb1ed018d39c13",
".git/objects/25/8163e4e8b4041907df5d4314cf68d9f3bf0fce": "c0774075f04115f09ee797b0f3406ff9",
".git/HEAD": "7f575092335ad4183ecbc7f2a9b315e1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/fork-settings": "b97deaec437c04a118ed3912597cfd23",
".git/logs/HEAD": "f7f4089e6d6367c76e46aecb5ce1e10c",
".git/logs/refs/heads/gh_page": "9b4d4bb95569e2e79546abdc054c93a4",
".git/logs/refs/heads/main": "164e1f294ebe5d0e5d5c8fe270a7bf0e",
".git/logs/refs/remotes/origin/gh_page": "723abdd04ba9d4873df4b3ce9bd058d7",
".git/logs/refs/remotes/origin/main": "1e11f365dff09b35eb7fa8fce4444a8c",
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
".git/refs/heads/gh_page": "d8f22b1b812aa16931cde32526b12a02",
".git/refs/heads/main": "d8f22b1b812aa16931cde32526b12a02",
".git/refs/remotes/origin/gh_page": "d8f22b1b812aa16931cde32526b12a02",
".git/refs/remotes/origin/main": "d8f22b1b812aa16931cde32526b12a02",
".git/index": "8ef58e7b9f6049f544bae145b8a957a7",
".git/COMMIT_EDITMSG": "847d10120485fbee4e31337c5027cc4b",
".git/FETCH_HEAD": "79ea88f7404b41816801169450901665",
"assets/images/buttons/bunq.png": "1cfff7d716daecd31eadcbf9607c096b",
"assets/images/buttons/buy-me-a-coffee.png": "ae5e49bb7111f5dd38b287826f2d7714",
"assets/images/buttons/paypal.png": "c7b2f3765a1163cc4901ff7bdfed9b2b",
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
"assets/images/cat.png": "d45d03d50ad9bf32bcefba834bbeeb3e",
"assets/images/begging-cat.png": "d45d03d50ad9bf32bcefba834bbeeb3e",
"assets/images/girappe-logo-header.png": "e41a582c904545d44bf2f8d2dcf2b858",
"assets/AssetManifest.json": "8a49fd44998debb61f3014f34a1aedf1",
"assets/NOTICES": "079dfa0b4267a27cf4dcebddc8cd6f98",
"assets/FontManifest.json": "96489ba810ebe01595fef737b550621e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "312986535f1e1be434aba17eaf5a93f3",
"assets/fonts/MaterialIcons-Regular.otf": "21962771b9cb8fad056b33004193e88d",
"assets/assets/images/buttons/appstore-white_pl.png": "532f2397f854bc4f539fb07e0255c314",
"assets/assets/images/buttons/appstore-white_en.png": "532f2397f854bc4f539fb07e0255c314",
"assets/assets/images/buttons/appstore-white_nl.png": "532f2397f854bc4f539fb07e0255c314",
"assets/assets/images/buttons/appstore_de.png": "598dffa1c4e82c62a15e34643543b00a",
"assets/assets/images/buttons/bunq.png": "1cfff7d716daecd31eadcbf9607c096b",
"assets/assets/images/buttons/appstore_en.png": "598dffa1c4e82c62a15e34643543b00a",
"assets/assets/images/buttons/appstore_pl.png": "598dffa1c4e82c62a15e34643543b00a",
"assets/assets/images/buttons/buy-me-a-coffee.png": "ae5e49bb7111f5dd38b287826f2d7714",
"assets/assets/images/buttons/appstore-white_de.png": "532f2397f854bc4f539fb07e0255c314",
"assets/assets/images/buttons/paypal.png": "c7b2f3765a1163cc4901ff7bdfed9b2b",
"assets/assets/images/buttons/appstore_nl.png": "598dffa1c4e82c62a15e34643543b00a",
"assets/assets/images/girappe-logo-header-dark.png": "7267a2faaba986ba6932628179c0be58",
"assets/assets/images/footer-medium-dot.png": "399f59697309fd4c60608f671e64fb7e",
"assets/assets/images/elements/qr-code-question-dark.png": "5cae2921b76391014f924952600e3728",
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
"assets/assets/images/elements/scr-data-matrix-dark.png": "15e7c92322782b0276f605e3023b43a4",
"assets/assets/images/elements/review-background-dark.png": "53ec872591c1a93fca973c113e708633",
"assets/assets/images/elements/qr-code-scan.png": "4bdbecc4aa7e877d6ee1b35c396e4bc8",
"assets/assets/images/elements/pixel-heart-dark.png": "6948f2646e103483cf34ff022b1ab9a7",
"assets/assets/images/elements/qr-code-free.png": "b15985e7013b3097c68892d28be9b6d7",
"assets/assets/images/elements/qr-code-data-usage.png": "43826d690fd20bd7e1884f6b60de8915",
"assets/assets/images/elements/cloud-small-l-dark.png": "be1ba0238c2d440cc912bc517afe9c01",
"assets/assets/images/elements/scr-store-card-light-dark.png": "d797cadc88c06aab1374974af1e5d678",
"assets/assets/images/elements/scr-map-light-dark.png": "2498a0e305dd09ca0afc037ef5f0933f",
"assets/assets/images/elements/scr-qr.png": "51986d2ecd7866a51f38e0e11e821126",
"assets/assets/images/elements/qr-code-question.png": "b616b2b09d9b7e4b19044d817c65992b",
"assets/assets/images/elements/cards-left.png": "2cc1ddc198f91657472de90109212d18",
"assets/assets/images/elements/box-yellow-dark.png": "e35caf1c642ec78e76d9885c24365639",
"assets/assets/images/elements/footer-medium-dot.png": "399f59697309fd4c60608f671e64fb7e",
"assets/assets/images/elements/cards-left-dark.png": "bddb73b604aa6a83bcac95b1a8a531af",
"assets/assets/images/elements/scr-aztec.png": "87d0eea60afa11a10460a2018ed66d52",
"assets/assets/images/elements/qr-code-safe-dark.png": "c6dbd14a0f975e7ca5f8c9e219f223da",
"assets/assets/images/elements/footer-dot.png": "6cea298f13c10cef0929607575ef8e66",
"assets/assets/images/elements/footer-triangle.png": "70795c002f628b969613cf4afadfce8d",
"assets/assets/images/elements/scr-widget-dark.png": "e8fb51937cee17a7cfd3ac5b6b721a24",
"assets/assets/images/elements/msg-cloud-3-dark.png": "1fef87fd3260e6760c8617fc1f2b7b6e",
"assets/assets/images/elements/msg-cloud-2-dark.png": "1832f577915def7cfe01ab1c25592bd8",
"assets/assets/images/elements/msg-cloud-3.png": "0f4e48e4f4f8f671b1216e0fbaf3a544",
"assets/assets/images/elements/pixel-heart-active-dark.png": "a663ad32cd765211d7676d03c1962f14",
"assets/assets/images/elements/qr-code-scan-dark.png": "f1cfc9b94805a17080cb89cd784f0903",
"assets/assets/images/elements/scr-map-dark.png": "d65a09a04f276099bfd3fa9816f36b0b",
"assets/assets/images/elements/footer-triangle-gray.png": "4b05cb39ed9631f4de948eaa93ef4767",
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
"assets/assets/images/begging-cat.png": "d45d03d50ad9bf32bcefba834bbeeb3e",
"assets/assets/images/girappe-logo-header.png": "5e7af84f514c5e91356e58cbeb46be82",
"assets/assets/icons/hamburger.png": "e62e81cbf74c42f6cba5b1450057079a",
"assets/assets/icons/icon-lights-change.png": "fb2002a46b2782e886301583623ee416",
"assets/assets/icons/icon-lights-change-dark.png": "6a406ef985e74aaff637d33cc4af74e2",
"assets/assets/fonts/PlusJakartaSans-Light.ttf": "7269d597a1420ab80a2da6d56a164e35",
"assets/assets/fonts/PlusJakartaSans-Medium.ttf": "86c690cf3c5fa19ac4d644e3179d726e",
"assets/assets/fonts/PlusJakartaSans-SemiBold.ttf": "888a09fc349fd86b358f8bf1d343c69f",
"assets/assets/fonts/PlusJakartaSans-Regular.ttf": "1c53607464229476dd0241bcc71235f6",
"assets/assets/fonts/Athelas-Regular.ttf": "203ca707d5875159f71d2aff42401749",
"assets/assets/fonts/Athelas-Bold.ttf": "a77779f001a1944ec7ca5be4be3c34db",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
