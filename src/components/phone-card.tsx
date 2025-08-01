import type { Listing } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Tag } from 'lucide-react';

type PhoneCardProps = {
  listing: Listing;
};

export function PhoneCard({ listing }: PhoneCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <Link href={`/listings/${listing.id}`} className="block">
          <div className="aspect-square relative">
            <Image
              src={listing.images[0]}
              alt={listing.title}
              fill
              className="object-cover"
              data-ai-hint={`${listing.brand} ${listing.model}`}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start gap-2 mb-2">
            <Badge variant="secondary">{listing.condition}</Badge>
        </div>
        <Link href={`/listings/${listing.id}`} className="block">
            <h3 className="font-headline font-semibold text-lg leading-tight hover:text-primary transition-colors">
              {listing.title}
            </h3>
        </Link>
        <div className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{listing.location}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-muted/40 flex justify-between items-center">
        <div className="font-bold text-xl text-primary">
          ${listing.price}
        </div>
        <Button asChild size="sm">
          <Link href={`/listings/${listing.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
