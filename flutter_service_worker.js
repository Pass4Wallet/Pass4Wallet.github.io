'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1b9ec095be4961832361119c17cdbbbd",
"version.json": "c38baf38f3f52451505e10dbe0e9190e",
"index.html": "20cf24a0bb8aaf11240b9e899fbaf764",
"/": "20cf24a0bb8aaf11240b9e899fbaf764",
"main.dart.js": "64d05b2687be43fe53b97a921e459b5a",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "98e6f4a70f4c3ce40a851ab0789654a0",
"icons/Icon-maskable-192.png": "d3551cb82c962d7fb1bf81c13c3e7e18",
"icons/Icon-maskable-512.png": "5023eb58dadb36b00272941e47c3bf0d",
"manifest.json": "3261697ee7af93653bbaf99e0897b7e8",
"assets/AssetManifest.json": "1322f1513a83ef6152290e1b7c0ae699",
"assets/NOTICES": "624b17d6f52e18e159e9004698d4a5d0",
"assets/FontManifest.json": "c65ad4ccf60e7a022279b16dd7d2e60d",
"assets/AssetManifest.bin.json": "bb4769ad397a79588b4e1bd9f2c4856a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bef62ce8aafc2f8da574d5a322e829e1",
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
"assets/assets/images/girappe/element-circle-yellow-medium.png": "cf51420a9356ea4542387bd4802c81ae",
"assets/assets/images/girappe/element-circle-yellow-small.png": "1ca1b4fd4afec215507cf1f97d5ac172",
"assets/assets/images/girappe/asia_signature.png": "c5e68bd17f6b5f532d053791c7b19cd4",
"assets/assets/images/girappe/team_db_half_nobgr.png": "50214e0c1d8bf8ecf8658b6843de2177",
"assets/assets/images/girappe/girappe-welcome.png": "3eb8f9fe06adb30b27bc727f6810ad84",
"assets/assets/images/girappe/whale.png": "eb03bd580e6e4b4c179b9f51179d3d2c",
"assets/assets/images/girappe/girappe-logo-text-color.png": "0e1acd3dd5c06437d72b20339910c394",
"assets/assets/images/girappe/dominik_signature.png": "16a82521dd93856f57e569cf67dac3b7",
"assets/assets/images/girappe/element-gray-quarter-circle-small.png": "17786f4e58fd9ad281c85b2abc60c7c2",
"assets/assets/images/girappe/main-girappe-image.png": "7786a45ec13009d921763c3427d041af",
"assets/assets/images/girappe/arrow-right.png": "36811d657b60e9e2cfbc79c8004c9a24",
"assets/assets/images/girappe/element-pink-stick.png": "a4244c3fe1e02763d5dcbe8df7258f6e",
"assets/assets/images/girappe/element-orange-snake.png": "e6275b50814b7c59d4905cf2f159d44e",
"assets/assets/images/girappe/element-navy-cross-small.png": "f4a75b0d6f3fea0c24b397497069c2d5",
"assets/assets/images/girappe/element-pink-square-very-small.png": "184bf369574f94d3655c4ff42683dc75",
"assets/assets/images/girappe/element-red-square-very-small.png": "0cbd7e4a2a72e9a3bd048fc4e2a94450",
"assets/assets/images/girappe/element-white-quarter-circle.png": "17786f4e58fd9ad281c85b2abc60c7c2",
"assets/assets/images/girappe/girappe-new-logo.png": "c3cba20bb786af408e9db3d93b515260",
"assets/assets/images/girappe/element-green-rect.png": "9ae93217d5b114a3938d61db13b93b37",
"assets/assets/images/girappe/team_jm_avatar.png": "b729a1d2226f2c84fb9348b0b5c13378",
"assets/assets/images/girappe/team_jm_half_nobgr.png": "3bd9fc44a83aff3aba298309f0e6670c",
"assets/assets/images/girappe/element-pink-triangle.png": "c5efcbcec9e5f31e7c0d15c2d366d3f7",
"assets/assets/images/girappe/element-navy-circle-small.png": "59b6f710eac3390501865eaea1d18cbb",
"assets/assets/images/girappe/people-dominik.png": "cc90f298d146e10ee5874492e8de4d0c",
"assets/assets/images/girappe/element-green-square-very-small.png": "6e42fb9097db589fac43439d985b1fcd",
"assets/assets/images/girappe/people-andrzej.png": "5b823ec7597a78e36eeac465f8c2a2e9",
"assets/assets/images/girappe/element-gray-triangle-small.png": "57447c74d755d209d55fedb8a3399a71",
"assets/assets/images/girappe/element-pink-circle-small.png": "570f3181855ac937f4bc0f3c5f6667a7",
"assets/assets/images/girappe/element-green-flat-circle.png": "8304a691886c3434c2ed72dd15ce6500",
"assets/assets/images/girappe/element-c-turquise-small.png": "b987145278c027d624e8c0711242a85b",
"assets/assets/images/girappe/element-yellow-square-small.png": "f56af8db0e6cc5309b42706391552afc",
"assets/assets/images/girappe/pass4wallet-draw-icon.png": "83d50383da1597c227df2846523fc5f4",
"assets/assets/images/girappe/arrow-left.png": "766aeba0313cd308bfa922587980e0f6",
"assets/assets/images/girappe/element-red-half-circle-small.png": "ecd031fe3126d9e79d8ca6f10749bb2f",
"assets/assets/images/girappe/animals/animals.png": "90abc181b266ad235d19509f3aab0c16",
"assets/assets/images/girappe/animals/elephant.png": "8cac4aeb0f85cc58e23923b89c2dbcbc",
"assets/assets/images/girappe/animals/bird.png": "909692fd8520f288a3213d1127b336ac",
"assets/assets/images/girappe/animals/cat.png": "a066c7824935e2af698c24318a315177",
"assets/assets/images/girappe/animals/giraffe.png": "5df325acc4f26918b807e3daf6f4d291",
"assets/assets/images/girappe/animals/fox.png": "ed818ab3f02a73689f0a0059c5b11c5b",
"assets/assets/images/girappe/animals/crocodile.png": "3b73898e1d861d117a2b6d71d2ca6d8d",
"assets/assets/images/girappe/element-flat-oval-orange.png": "a61560fa41a2e818dbfa2ba574278684",
"assets/assets/images/girappe/element-cross-yellow-small.png": "906cbe1bc4e9b1a791ea94a5957335ef",
"assets/assets/images/girappe/team_am_avatar.png": "4c0149f2318882ea2ce508884aa2edbd",
"assets/assets/images/girappe/sample-icon.png": "16dc767e6c3ea03c660c60bc656cd9bd",
"assets/assets/images/girappe/element-gray-dot-very-small.png": "5594e01898eb6578ba1ecdf3ffa5379c",
"assets/assets/images/girappe/element-green-stick.png": "56079f4ab29415460a9b5cbdd51f14fb",
"assets/assets/images/girappe/element-green-triangle.png": "209e53299d695ba8d5c6fbb4e8a02e89",
"assets/assets/images/girappe/people-asia.png": "ceca80d5bda0107166fce2d45aade9a6",
"assets/assets/images/girappe/element-gray-c-small.png": "48857771d2242daac4cce697941695c0",
"assets/assets/images/girappe/element-red-c-b.png": "dbb3659e1179bb5a08eb2fa7a86a4c16",
"assets/assets/images/girappe/element-white-rect-very-small.png": "2735b4bdd99a281f16d2dc0c864f60ff",
"assets/assets/images/girappe/element-navy-double-dot.png": "0d047e4586e3af6f01eee26803a7f0d9",
"assets/assets/images/girappe/andrzej_signature.png": "b30220bb9262f8b43757c2736974ee3c",
"assets/assets/images/girappe/element-pink-circle-smaller.png": "460573a0e1f03c2f3b7d207a67ba4131",
"assets/assets/images/girappe/team_db_avatar.png": "06ed5f14c495bdcbaf170dbc31126e84",
"assets/assets/images/girappe/element-red-c-br.png": "6a1f47a1f6b574c8dc00f4d0043c9b35",
"assets/assets/images/girappe/team_am_half_nobgr.png": "2e4384f1450539567276b002aca3243b",
"assets/assets/images/girappe/element-cross-blue-small.png": "f4a75b0d6f3fea0c24b397497069c2d5",
"assets/assets/images/girappe/whale-logo-dot.png": "13980709e5039fec773a98ebcc188226",
"assets/assets/images/girappe/people.png": "9d371f40b11f39ac76e184abfcab5c18",
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
"assets/assets/images/elements/footer-c-shape.png": "7058df7a53f504c169f1651d523123f2",
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
"assets/assets/images/team/amichnia/title.png": "d7ddc2a1ab6c3823a7b4989381415045",
"assets/assets/images/team/amichnia/photo.png": "9b51a2d1eea66328fb4ced434ff09eab",
"assets/assets/images/team/amichnia/logo.png": "1d36992ac0bc1839b08afac9cb37641f",
"assets/assets/images/team/jmichnia/title.png": "37bc9e2242d2ba2fe6b806bc7932e452",
"assets/assets/images/team/jmichnia/photo.png": "c59c174bc498ac8fd03e7b4652fdd6d4",
"assets/assets/images/team/jmichnia/girappe.png": "9bebeeddd3ca67b0e99516137cab1fea",
"assets/assets/images/team/icons/social-mail.png": "078eab1e6776faebd5966546eb5b45d0",
"assets/assets/images/team/icons/app-frame.png": "d57f87fb520a737e6fcd4406b8473d7e",
"assets/assets/images/team/icons/social-instagram.png": "704f5d4f7da7f492f8b21c4a685f67eb",
"assets/assets/images/team/icons/social-globus.png": "d81955e1647f6e2367451242f4f41cb3",
"assets/assets/images/team/icons/social-linkedin.png": "2051cc109a5395b1d2ca5a3b07014240",
"assets/assets/images/team/icons/social-github.png": "f5b69597769cc98b244837b4d4fb05e2",
"assets/assets/images/team/icons/social-behance.png": "8a68d69a7740921b3d608bad8bc70f2b",
"assets/assets/images/team/icons/social-dribble.png": "3f4e1fd5d4cf183b29c99b60718ff803",
"assets/assets/images/team/icons/social-medium.png": "cfe6fa0c0b128b461fac8753737be880",
"assets/assets/images/team/icons/social-tumblr.png": "0adbcbbb3de98fe5e555b1e49e80818c",
"assets/assets/images/begging-cat-dark.png": "1cce1589b7d809f4098739c71276a629",
"assets/assets/images/cat-dark.png": "ff1c7ad453297bc62e71ff637b145103",
"assets/assets/images/pass4wallet-text-dark.png": "886858b86088e71ac34bc0b79a5b90fb",
"assets/assets/images/begging-cat.png": "d45d03d50ad9bf32bcefba834bbeeb3e",
"assets/assets/images/girappe-logo-header.png": "5e7af84f514c5e91356e58cbeb46be82",
"assets/assets/images/p4w-logo-120.png": "ca9b1c77501aa558a3286dbe701c7b9d",
"assets/assets/images/media/newspaper_top.png": "ddee543a39e1d038ca627858214e97ff",
"assets/assets/images/media/Shapes_Newspaper_08.png": "70695e97927fe2618ba63c1636d98e09",
"assets/assets/images/media/Shapes_Newspaper_09.png": "d7ff815facc72663009962d60bb0ceff",
"assets/assets/images/media/newspaper_bottom.png": "1f6cad1d025d52d411ff87c257f9d4ee",
"assets/assets/images/media/logos/antyweb.JPG": "9221af09f153d4d70e6dbcff00102aa9",
"assets/assets/images/media/logos/bezprawnik.PNG": "9e8502005bdea26d16e55091ac8e451f",
"assets/assets/images/media/logos/chip.PNG": "0cd8be18b67a66beef1dcf9bf4017a56",
"assets/assets/images/media/logos/twittv_icon_small.png": "a3fe4e4e96ffc974a67bb6e2ea006aaf",
"assets/assets/images/media/logos/iphone-tricks_logo.png": "01391fbffbc73e09b2a180e5904e431c",
"assets/assets/images/media/logos/antyweb_logo_small.png": "c216d38ab57367665942f5851d7f8584",
"assets/assets/images/media/logos/iculture.PNG": "474352f4cb1981e5201c6b5aeee0fa8a",
"assets/assets/images/media/logos/iculture_logo_small.png": "5854aeeb20643e555fe4e0136603c834",
"assets/assets/images/media/logos/bezprawnik_logo.png": "560a09404d12b9ec7570a5380afd55aa",
"assets/assets/images/media/logos/PCtipp_logo.png": "4e676f2952fd4e1e57417af356a2430b",
"assets/assets/images/media/logos/chip_logo_small.png": "b524f71df66ab95134b670562732e141",
"assets/assets/images/media/logos/twittv_icon.PNG": "ccf779a117216f709443abe1d6aa1fac",
"assets/assets/images/media/Shapes_Newspaper_02.png": "583171adc29e316f91183eb858f895d0",
"assets/assets/images/media/Shapes_Newspaper_03.png": "fefb40b18f7110c187b8659c7a9bfee8",
"assets/assets/images/media/Shapes_Newspaper_01.png": "a82f52e716f09fd674abe00e0c667b2e",
"assets/assets/images/media/Shapes_Newspaper_04.png": "ca11f9966ba6098e80f8ef4eacb595ef",
"assets/assets/images/media/Shapes_Newspaper_05.png": "83486ad45e36182033b24970421a2699",
"assets/assets/images/media/Shapes_Newspaper_07.png": "35e94eecbf3da3201e36ca9f7ad6b9af",
"assets/assets/images/media/Shapes_Newspaper_06.png": "0cb4812a2dbbb3e7b7b3abfde40c15b3",
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
"assets/assets/fonts/futura-medium-bt.ttf": "ee64fb9d3f1ba2333e1b489283925bce",
"assets/assets/fonts/PlusJakartaSans-Regular.ttf": "1c53607464229476dd0241bcc71235f6",
"assets/assets/fonts/NanumBrushScript-Regular.ttf": "a0b8d8398759ba0233f32925141d1cfd",
"assets/assets/fonts/comix-pro-2.ttf": "2a0ba747900a2cb083cc06c3245662bd",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
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
