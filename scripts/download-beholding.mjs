import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";

const images = [
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/9a5ff346-b246-48a4-8b8c-1aa00dbd1c4a/DSCF5436.jpg", name: "hero.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/83813be2-495e-443e-8e1f-d07583dfe5f0/65ee51e2-2d36-4aa7-9c8f-efdd97479eac.JPG", name: "shape-element.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/8e5228c1-52e5-4005-a00a-9455d266bc49/20250220_142317.jpg", name: "seema-success.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/daa03710-b80d-4f81-8665-32f88186b6c2/Yasoda.png", name: "yasoda.png" },
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/8baa4426-06ae-4a07-a618-5d2509ce74b4/20250220_165210.jpg", name: "daisy.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/a418a8a8-08cb-4e6e-8059-d72d09e7e2fb/20250220_164207.jpg", name: "kavitha.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/ad3015f2-02f6-4b10-87c5-5e3fd037df89/20250220_165734.jpg", name: "mala.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/df949f59-3164-4416-b58c-5c1634b03a45/20250220_164147.jpg", name: "renuka.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/f2bc1e32-eaa0-420d-b8a3-da27776e8168/20250220_165940.jpg", name: "savetri.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/e6ba9887-7433-4965-b4a0-b9b2f004fed0/20250220_164126.jpg", name: "shoba.jpg" },
];

const dir = "public/images/beholding-beloved";
if (!existsSync(dir)) await mkdir(dir, { recursive: true });

for (const img of images) {
  try {
    const res = await fetch(img.url);
    if (!res.ok) { console.log(`SKIP ${img.name}: ${res.status}`); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(`${dir}/${img.name}`, buf);
    console.log(`OK ${img.name} (${(buf.length / 1024).toFixed(0)}KB)`);
  } catch (e) { console.log(`FAIL ${img.name}: ${e.message}`); }
}
console.log("\nDone!");
