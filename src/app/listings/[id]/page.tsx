import Image from 'next/image';
import { notFound } from 'next/navigation';
import { listings } from '@/lib/mock-data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, MessageSquare, Battery, HardDrive, MemoryStick, ScreenShare } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const listing = listings.find((l) => l.id === params.id);

  if (!listing) {
    notFound();
  }
  
  const specItems = [
      { icon: MemoryStick, label: 'RAM', value: listing.specs.ram },
      { icon: HardDrive, label: 'Storage', value: listing.specs.storage },
      { icon: Battery, label: 'Battery', value: listing.specs.battery },
      { icon: ScreenShare, label: 'Screen', value: listing.specs.screenSize },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {listing.images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video relative overflow-hidden rounded-lg">
                        <Image src={src} alt={`${listing.title} image ${index + 1}`} fill className="object-cover" data-ai-hint={`${listing.brand} ${listing.model}`} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                 {listing.images.length > 1 && (
                    <>
                        <CarouselPrevious className="absolute left-4" />
                        <CarouselNext className="absolute right-4" />
                    </>
                 )}
              </Carousel>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{listing.description}</p>
            </CardContent>
          </Card>
          
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {specItems.map(spec => (
                     <div key={spec.label} className="bg-muted p-4 rounded-lg flex flex-col items-center justify-center">
                        <spec.icon className="w-8 h-8 text-primary mb-2" />
                        <p className="text-sm text-muted-foreground">{spec.label}</p>
                        <p className="font-semibold">{spec.value}</p>
                     </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <h1 className="font-headline text-3xl font-bold">{listing.title}</h1>
              <div className="flex items-center gap-2 pt-2">
                <Badge>{listing.condition}</Badge>
                <span className="text-muted-foreground text-sm flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {listing.location}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-primary mb-6">
                ${listing.price}
              </div>
              <Separator />
              <div className="py-6">
                <h3 className="font-semibold mb-4">Seller Information</h3>
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={listing.seller.avatarUrl} alt={listing.seller.name} data-ai-hint="person" />
                    <AvatarFallback>{listing.seller.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{listing.seller.name}</p>
                    <p className="text-sm text-muted-foreground">Member since 2023</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full">
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact Seller
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
