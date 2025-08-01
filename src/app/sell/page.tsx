import { SellForm } from "@/components/sell-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HardDrive, Smartphone, Tag } from "lucide-react";

export default function SellPage() {
  return (
    <div className="container mx-auto px-4 py-8">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="md:col-span-1">
            <Card className="sticky top-24">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Tips for a Great Listing</CardTitle>
                    <CardDescription>Follow these tips to sell your phone faster.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-2 rounded-full mt-1">
                            <Tag className="h-5 w-5" />
                        </div>
                        <div>
                            <h4 className="font-semibold">Be Descriptive</h4>
                            <p className="text-sm text-muted-foreground">A good title and detailed description helps buyers find your listing.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-2 rounded-full mt-1">
                            <HardDrive className="h-5 w-5" />
                        </div>
                        <div>
                            <h4 className="font-semibold">Specify Details</h4>
                            <p className="text-sm text-muted-foreground">Include accurate specs like storage, RAM, and battery condition.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-2 rounded-full mt-1">
                            <Smartphone className="h-5 w-5" />
                        </div>
                        <div>
                            <h4 className="font-semibold">Honest Condition</h4>
                            <p className="text-sm text-muted-foreground">Be upfront about any scratches or issues. Honesty builds trust.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
        <div className="md:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">List Your Phone for Sale</CardTitle>
                    <CardDescription>Fill out the form below to create your listing.</CardDescription>
                </CardHeader>
                <CardContent>
                    <SellForm />
                </CardContent>
            </Card>
        </div>
       </div>
    </div>
  );
}
