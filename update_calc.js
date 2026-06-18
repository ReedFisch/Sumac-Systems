const fs = require('fs');

const calcPath = '/Users/reedfisch/Documents/Sumac Website/sumac-systems/src/components/calculator/RevenueCalculator.tsx';
let calc = fs.readFileSync(calcPath, 'utf-8');

// Add BlurText import if not there
if (!calc.includes('import BlurText')) {
  calc = calc.replace('import { motion, AnimatePresence } from "motion/react";', 'import { motion, AnimatePresence } from "motion/react";\nimport BlurText from "@/components/ui/BlurText/BlurText";');
}

// Change default numbers
calc = calc.replace('monthlyEnquiries: 60', 'monthlyEnquiries: 85');
calc = calc.replace('avgJobValue: 1500', 'avgJobValue: 2800');
calc = calc.replace('answerRate: 65', 'answerRate: 50');
calc = calc.replace('closeRate: 40', 'closeRate: 20');

// Change placeholder name
calc = calc.replace('placeholder="e.g. Dave"', 'placeholder="e.g. Marcus"');

// Replace Step 1 Heading with BlurText
const oldHeading = `<h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-white leading-[1.1] mb-4">
        Reveal your hidden
        <br />
        revenue{" "}
        <span className="relative inline-block">
          <span className="relative z-10">leaks</span>
          <span className="absolute bottom-1 left-0 right-0 h-[0.35em] bg-sumac-brandy/40 rounded-sm z-0" />
        </span>
        .
      </h2>`;

const newHeading = `<div className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-white leading-[1.1] mb-4">
        <BlurText text="Reveal your hidden revenue leaks." delay={40} animateBy="words" direction="bottom" />
      </div>`;

calc = calc.replace(oldHeading, newHeading);

fs.writeFileSync(calcPath, calc);
console.log('Update successful');
