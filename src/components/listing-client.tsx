"use client";

import { useState, useMemo } from 'react';
import { listings as allListings } from '@/lib/mock-data';
import type { Listing } from '@/lib/types';
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
import { Search, X } from 'lucide-react';

type ListingClientProps = {
    listings: Listing[];
};

export function ListingClient({ listings }: ListingClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState('newest');

  const brands = [...new Set(listings.map(l => l.brand))];
  const conditions = [...new Set(listings.map(l => l.condition))];
  
  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleConditionChange = (condition: string) => {
    setSelectedConditions(prev => 
      prev.includes(condition)
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedBrands([]);
    setPriceRange([0, 2000]);
    setSelectedConditions([]);
    setSortOrder('newest');
  };

  const filteredListings = useMemo(() => {
    let filtered = listings
      .filter(listing => 
        listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.model.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(listing => 
        selectedBrands.length === 0 || selectedBrands.includes(listing.brand)
      )
      .filter(listing => 
        listing.price >= priceRange[0] && listing.price <= priceRange[1]
      )
      .filter(listing => 
        selectedConditions.length === 0 || selectedConditions.includes(listing.condition)
      );
      
    switch (sortOrder) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
        default:
            filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            break;
    }

    return filtered;
  }, [listings, searchTerm, selectedBrands, priceRange, selectedConditions, sortOrder]);


  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <aside className="lg:col-span-1">
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex justify-between items-center">
                <span>Filters</span>
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm font-normal">
                    <X className="w-4 h-4 mr-1" />
                    Clear
                </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Input id="search" placeholder="e.g. iPhone 14 Pro" className="pl-10" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Brand</Label>
              {brands.map(brand => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`brand-${brand}`} 
                    checked={selectedBrands.includes(brand)} 
                    onCheckedChange={() => handleBrandChange(brand)}
                  />
                  <Label htmlFor={`brand-${brand}`} className="font-normal cursor-pointer">{brand}</Label>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <Label>Price Range</Label>
              <Slider 
                defaultValue={[0, 2000]} 
                max={2000} 
                step={50} 
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}{priceRange[1] === 2000 ? '+' : ''}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Condition</Label>
              {conditions.map(condition => (
                <div key={condition} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`condition-${condition}`}
                    checked={selectedConditions.includes(condition)}
                    onCheckedChange={() => handleConditionChange(condition)}
                   />
                  <Label htmlFor={`condition-${condition}`} className="font-normal cursor-pointer">{condition}</Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </aside>

      <main className="lg:col-span-3">
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">{filteredListings.length} listings found</p>
          <Select value={sortOrder} onValueChange={setSortOrder}>
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
          {filteredListings.map((listing) => (
            <PhoneCard key={listing.id} listing={listing} />
          ))}
        </div>
        {filteredListings.length === 0 && (
            <Card className="flex items-center justify-center h-96 border-dashed">
                <div className="text-center text-muted-foreground">
                    <p className="font-headline text-xl">No Listings Found</p>
                    <p>Try adjusting your filters to find what you're looking for.</p>
                </div>
            </Card>
        )}
      </main>
    </div>
  );
}
