import { listings } from '@/lib/mock-data';
import { PhoneCard } from '@/components/phone-card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Search } from 'lucide-react';

export default function ListingsPage() {
  const brands = [...new Set(listings.map(l => l.brand))];
  const conditions = [...new Set(listings.map(l => l.condition))];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Browse All Listings</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Find your next phone from our wide selection of new and used devices.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <div className="relative">
                  <Input id="search" placeholder="e.g. iPhone 14 Pro" className="pl-10" />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Brand</Label>
                {brands.map(brand => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox id={`brand-${brand}`} />
                    <Label htmlFor={`brand-${brand}`} className="font-normal">{brand}</Label>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Label>Price Range</Label>
                <Slider defaultValue={[0, 1500]} max={2000} step={50} />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>$0</span>
                  <span>$2000+</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Condition</Label>
                {conditions.map(condition => (
                  <div key={condition} className="flex items-center space-x-2">
                    <Checkbox id={`condition-${condition}`} />
                    <Label htmlFor={`condition-${condition}`} className="font-normal">{condition}</Label>
                  </div>
                ))}
              </div>

              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>
        </aside>

        <main className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">{listings.length} listings found</p>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <PhoneCard key={listing.id} listing={listing} />
            ))}
          </div>
          {/* Pagination could go here */}
        </main>
      </div>
    </div>
  );
}
