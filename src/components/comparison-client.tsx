"use client";

import { useState } from 'react';
import type { PhoneSpec } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from './ui/button';
import { X, Check } from 'lucide-react';

type ComparisonClientProps = {
  allPhones: PhoneSpec[];
};

export function ComparisonClient({ allPhones }: ComparisonClientProps) {
  const [selectedPhones, setSelectedPhones] = useState<PhoneSpec[]>([]);

  const handleSelectPhone = (phone: PhoneSpec) => {
    setSelectedPhones((prev) =>
      prev.find((p) => p.id === phone.id)
        ? prev.filter((p) => p.id !== phone.id)
        : [...prev, phone]
    );
  };

  const allSpecKeys = Array.from(new Set(selectedPhones.flatMap(p => Object.keys(p.specs))));

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-1">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-headline text-lg font-semibold mb-4">Select Phones</h3>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {allPhones.map((phone) => (
                <div
                  key={phone.id}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-muted cursor-pointer"
                  onClick={() => handleSelectPhone(phone)}
                >
                  <Checkbox
                    id={phone.id}
                    checked={selectedPhones.some((p) => p.id === phone.id)}
                    onCheckedChange={() => handleSelectPhone(phone)}
                  />
                  <label htmlFor={phone.id} className="flex-grow flex items-center gap-2 cursor-pointer">
                    <Image src={phone.image} alt={phone.model} width={40} height={40} className="rounded-md" data-ai-hint={`${phone.brand} ${phone.model}`} />
                    <div>
                      <p className="font-medium text-sm">{phone.model}</p>
                      <p className="text-xs text-muted-foreground">{phone.brand}</p>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="md:col-span-3">
        {selectedPhones.length > 0 ? (
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px] font-headline text-base">Feature</TableHead>
                      {selectedPhones.map((phone) => (
                        <TableHead key={phone.id} className="text-center">
                            <div className='flex flex-col items-center gap-2'>
                                <Image src={phone.image} alt={phone.model} width={80} height={80} className="rounded-lg" data-ai-hint={`${phone.brand} ${phone.model}`} />
                                <span className="font-headline text-base font-semibold">{phone.model}</span>
                                <Button variant="ghost" size="sm" onClick={() => handleSelectPhone(phone)}>
                                    <X className="h-4 w-4 mr-1"/> Remove
                                </Button>
                            </div>
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allSpecKeys.map((key) => (
                      <TableRow key={key}>
                        <TableCell className="font-semibold">{key}</TableCell>
                        {selectedPhones.map((phone) => (
                          <TableCell key={phone.id} className="text-center">
                            {phone.specs[key] || 'N/A'}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="flex items-center justify-center h-96 border-dashed">
            <div className="text-center text-muted-foreground">
              <p className="font-headline text-xl">Select phones to compare</p>
              <p>Choose from the list on the left to get started.</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
