const fs = require('fs');

const heroPath = '/Users/reedfisch/Documents/Sumac Website/sumac-systems/src/components/layout/Hero.tsx';
let hero = fs.readFileSync(heroPath, 'utf-8');
// Fix Hero uniqueness
// Top-left: image2 (bulky) -> keep image2, w-[280px]
// Bottom-right: image4 (bulky) -> keep image4, w-[260px]
// Top-right: image7 (foliage) -> w-[400px] h-[400px] md:w-[500px] md:h-[500px] right-[-100px]
hero = hero.replace('w-[180px] h-[180px] md:w-[220px] md:h-[220px]', 'w-[300px] h-[300px] md:w-[450px] md:h-[450px] md:-right-20');
hero = hero.replace('sizes="220px"', 'sizes="450px"');

// Mid-left: currently image7, change to image8 (foliage) -> w-[450px] h-[450px]
hero = hero.replace('src="/images/sumac/image7.webp" alt="" fill sizes="240px" className="object-contain rotate-90"', 'src="/images/sumac/image8.webp" alt="" fill sizes="450px" className="object-contain rotate-45"');
hero = hero.replace('w-[240px] h-[240px]', 'w-[450px] h-[450px] md:-left-20');

// Bottom-left: currently image8, change to image9 (foliage) -> w-[350px] h-[350px]
hero = hero.replace('src="/images/sumac/image8.webp" alt="" fill sizes="180px" className="object-contain scale-x-[-1]"', 'src="/images/sumac/image9.webp" alt="" fill sizes="350px" className="object-contain scale-x-[-1]"');
hero = hero.replace('w-[120px] h-[120px] md:w-[180px] md:h-[180px]', 'w-[250px] h-[250px] md:w-[350px] md:h-[350px] md:left-[10%]');

fs.writeFileSync(heroPath, hero);


const pagePath = '/Users/reedfisch/Documents/Sumac Website/sumac-systems/src/app/page.tsx';
let page = fs.readFileSync(pagePath, 'utf-8');

// Line 131: image2
page = page.replace('src="/images/sumac/image2.webp" alt="" fill sizes="288px"', 'src="/images/sumac/image6.webp" alt="" fill sizes="288px"');
// Line 136: image7 -> make bigger w-96 h-96
page = page.replace('sizes="224px" className="object-contain opacity-30 animate-[float_8s_ease-in-out_infinite] scale-x-[-1]"', 'sizes="500px" className="object-contain opacity-30 animate-[float_8s_ease-in-out_infinite] scale-x-[-1]"');
page = page.replace('w-56 h-56 md:w-80 md:h-80', 'w-[400px] h-[400px] md:w-[600px] md:h-[600px] md:-right-32');

// Line 211: image8 -> make bigger
page = page.replace('sizes="192px" className="object-contain opacity-10 animate-[float_10s_ease-in-out_infinite]"', 'sizes="400px" className="object-contain opacity-10 animate-[float_10s_ease-in-out_infinite]"');
page = page.replace('w-48 h-48', 'w-[400px] h-[400px]');

// Line 241: image9 -> make bigger
page = page.replace('src="/images/sumac/image9.webp"', 'src="/images/sumac/image7.webp"'); // Switch to 7
page = page.replace('className="absolute bottom-20 -left-32 w-80 h-80 opacity-20 pointer-events-none"', 'className="absolute bottom-20 -left-32 w-[500px] h-[500px] opacity-20 pointer-events-none"');

// Line 253: image4
page = page.replace('src="/images/sumac/image4.webp"', 'src="/images/sumac/image2.webp"');

// Line 310: image6
page = page.replace('src="/images/sumac/image6.webp" alt="" fill sizes="350px"', 'src="/images/sumac/image4.webp" alt="" fill sizes="350px"');

// Line 315: image7 -> change to image9 and make bigger
page = page.replace('src="/images/sumac/image7.webp" alt="" fill sizes="192px"', 'src="/images/sumac/image9.webp" alt="" fill sizes="450px"');
page = page.replace('w-48 h-48 md:w-72 md:h-72', 'w-[350px] h-[350px] md:w-[500px] md:h-[500px] md:-right-20');

fs.writeFileSync(pagePath, page);


const footerPath = '/Users/reedfisch/Documents/Sumac Website/sumac-systems/src/components/layout/Footer.tsx';
let footer = fs.readFileSync(footerPath, 'utf-8');
footer = footer.replace('w-[150px] md:w-[300px] lg:w-[500px]', 'w-[300px] md:w-[500px] lg:w-[700px] md:translate-x-1/3 md:translate-y-1/3');
fs.writeFileSync(footerPath, footer);

const tyPath = '/Users/reedfisch/Documents/Sumac Website/sumac-systems/src/app/thank-you/page.tsx';
let ty = fs.readFileSync(tyPath, 'utf-8');
ty = ty.replace('w-[500px] h-[500px]', 'w-[600px] h-[600px]');
ty = ty.replace('w-[320px] h-[320px]', 'w-[450px] h-[450px]');
fs.writeFileSync(tyPath, ty);

console.log("Floating assets adjusted!");
