import { ComparisonClient } from '@/components/comparison-client';
import { phoneSpecs } from '@/lib/mock-data';

export default function ComparePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Compare Phone Specs</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Select two or more phones to see a detailed side-by-side comparison of their features.
        </p>
      </div>
      <ComparisonClient allPhones={phoneSpecs} />
    </div>
  );
}
