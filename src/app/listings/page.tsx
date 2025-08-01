import { listings } from '@/lib/mock-data';
import { ListingClient } from '@/components/listing-client';

export default function ListingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Browse All Listings</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Find your next phone from our wide selection of new and used devices.
        </p>
      </div>
      <ListingClient listings={listings} />
    </div>
  );
}
