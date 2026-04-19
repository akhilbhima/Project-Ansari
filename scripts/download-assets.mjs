import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";

const images = [
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/f080d8fb-c711-4ef8-b971-5980a8164e1b/NMCC_Symbol.png", name: "logo.png" },
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/d5b1c6ba-c8f6-43fb-88f6-49d8c746609c/DSCF7017.JPG", name: "hero.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/b6568401-9b4e-4fb1-b229-930c17e3f534/DSCF6518.jpg", name: "beholding-beloved.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/1747957414406-0Q30PCHNDNIFZT5P9T64/unsplash-image-2dyNOXY7aF4.jpg", name: "goat-sponsorship.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/4f21b7fd-7e5e-4785-8065-9f25171c82e2/DSCF7238.JPG", name: "abode-1.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/6789e878-abb1-4f32-a459-8c9f21b48184/DSCF7326.JPG", name: "abode-2.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/997d290d-046a-4ecd-9861-f9c049eab55b/DSCF7274.JPG", name: "abode-3.jpg" },
  { url: "https://images.squarespace-cdn.com/content/v1/6355e3cbc34e1670e5f5a007/1323cc5b-5993-4f75-9f75-c2c5799fddf2/DSCF7310.JPG", name: "abode-4.jpg" },
];

const dir = "public/images";
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
