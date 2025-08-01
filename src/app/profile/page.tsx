import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockUser, userListings } from '@/lib/mock-data';
import { PhoneCard } from '@/components/phone-card';
import { Edit, Mail, Calendar } from 'lucide-react';

export default function ProfilePage() {
  const user = mockUser;
  const listings = userListings;

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <Image
              src={user.avatarUrl}
              alt={user.name}
              width={128}
              height={128}
              className="rounded-full border-4 border-primary"
              data-ai-hint="person"
            />
            <Button size="icon" className="absolute bottom-1 right-1 h-8 w-8 rounded-full">
              <Edit className="h-4 w-4" />
              <span className="sr-only">Edit profile picture</span>
            </Button>
          </div>
          <div className="flex-grow text-center md:text-left">
            <h1 className="font-headline text-3xl font-bold">{user.name}</h1>
            <div className="flex items-center justify-center md:justify-start gap-4 text-muted-foreground mt-2">
                <div className="flex items-center gap-1.5">
                    <Mail className="h-4 w-4" />
                    <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {new Date(user.joinedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                </div>
            </div>
          </div>
          <Button variant="outline">Edit Profile</Button>
        </CardContent>
      </Card>

      <Tabs defaultValue="listings" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="listings">My Listings</TabsTrigger>
          <TabsTrigger value="settings">Account Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="listings">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Your Active Listings</CardTitle>
                </CardHeader>
                <CardContent>
                    {listings.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {listings.map((listing) => (
                                <PhoneCard key={listing.id} listing={listing} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 border-2 border-dashed rounded-lg">
                            <p className="text-muted-foreground">You have no active listings.</p>
                            <Button asChild className="mt-4">
                                <a href="/sell">List a Phone</a>
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Account settings form would go here...</p>
              {/* Example:
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue={user.name} />
              */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
