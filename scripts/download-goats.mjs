import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const OUT = 'public/images/the-goats';

const images = [
  { url: 'https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/7ae13adb-53bc-4fb9-a054-b6a76421ddcc/Goats.jpg', name: 'hero-goats.jpg' },
  { url: 'https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/1748537506437-VTTWE79EY67SIF0I2JPO/unsplash-image-Vyw6jmPnW8E.jpg', name: 'goat-detail-1.jpg' },
  { url: 'https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/1748537538451-RLST7OU878KIC7CEPXA2/unsplash-image-TlFf1kJm_zU.jpg', name: 'goat-detail-2.jpg' },
  { url: 'https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/1748537523505-RX1BELTES53LWYKG269E/unsplash-image-KaK2jp8ie8s.jpg', name: 'goat-detail-3.jpg' },
  { url: 'https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/1746809129906-VI4O2FE29NOZRXOR1JNI/unsplash-image-tJsyLDYsyDA.jpg', name: 'program-how.jpg' },
  { url: 'https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/717070a9-3cbb-4398-8f3d-4761f3c9aa8b/WhatsApp+Image+2025-05-18+at+13.08.31_369e719d.jpg', name: 'accountability-family.jpg' },
  { url: 'https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/1746809076360-F4DJSX87EBG7F47IAFK4/unsplash-image-0OhNsKO4KcQ.jpg', name: 'seeding-bg.jpg' },
  { url: 'https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/4e7ccf05-dc3f-4ee0-bd90-e1b2c0e25487/WhatsApp+Image+2025-05-18+at+13.06.40_f446d9c2.jpg', name: 'lalitha.jpg' },
  { url: 'https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/de320f93-8283-4b75-a592-52e7b7ba46bb/WhatsApp+Image+2025-05-18+at+13.13.35_f1176d20.jpg', name: 'sumaitra.jpg' },
  { url: 'https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/b71e983a-72c0-48cb-9625-19a9b0e90532/WhatsApp+Image+2025-05-18+at+14.49.19_5c328370.jpg', name: 'kasturi.jpg' },
  { url: 'https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/04ebbd44-62f7-491a-9a90-4fd2bf219587/WhatsApp+Image+2025-05-19+at+00.04.55_cff1c0f7.jpg', name: 'sumitra.jpg' },
];

async function download(img) {
  try {
    const res = await fetch(img.url);
    if (!res.ok) throw new Error(`${res.status} for ${img.name}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const out = path.join(OUT, img.name);
    await writeFile(out, buf);
    console.log(`✓ ${img.name} (${(buf.length / 1024).toFixed(0)} KB)`);
  } catch (e) {
    console.error(`✗ ${img.name}: ${e.message}`);
  }
}

// Download 4 at a time
for (let i = 0; i < images.length; i += 4) {
  await Promise.all(images.slice(i, i + 4).map(download));
}
console.log('Done!');
