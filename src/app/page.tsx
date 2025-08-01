import Link from 'next/link';
import { ArrowRight, BarChart, Search, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PhoneCard } from '@/components/phone-card';
import { featuredListings } from '@/lib/mock-data';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-primary">
            Find Your Perfect Smartphone.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            SpectraFind helps you compare specs, find the best deals on new and used phones, and connect with sellers.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/listings">
                Browse Listings <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/compare">
                Compare Phones
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Use SpectraFind?</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              Everything you need to make an informed decision on your next mobile device.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <BarChart className="h-8 w-8" />
                </div>
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Side-by-Side Comparison</h3>
              <p className="text-muted-foreground">
                Easily compare technical specifications of multiple phones to see which one fits your needs.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <Search className="h-8 w-8" />
                </div>
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Advanced Search & Filter</h3>
              <p className="text-muted-foreground">
                Find exactly what you're looking for with powerful filters for brand, price, condition, and more.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <Sparkles className="h-8 w-8" />
                </div>
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Buy & Sell with Ease</h3>
              <p className="text-muted-foreground">
                List your used phone in minutes or find great deals from trusted sellers in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured Listings</h2>
            <Button asChild variant="link">
              <Link href="/listings">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredListings.map((listing) => (
              <PhoneCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
