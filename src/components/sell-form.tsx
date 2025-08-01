"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { createListing } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"
import { UploadCloud } from "lucide-react"

const formSchema = z.object({
  title: z.string().min(10, "Title must be at least 10 characters.").max(100),
  brand: z.string().min(2, "Brand is required."),
  model: z.string().min(1, "Model is required."),
  condition: z.string({ required_error: "Please select a condition." }),
  price: z.coerce.number().min(1, "Price must be at least $1."),
  location: z.string().min(2, "Location is required."),
  description: z.string().min(20, "Description must be at least 20 characters.").max(1000),
  ram: z.string().min(1, "RAM is required."),
  storage: z.string().min(1, "Storage is required."),
  battery: z.string().min(1, "Battery info is required."),
  screenSize: z.string().min(1, "Screen size is required."),
});

export function SellForm() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            brand: "",
            model: "",
            price: 0,
            location: "",
            description: "",
            ram: "",
            storage: "",
            battery: "",
            screenSize: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const result = await createListing(values);
        if (result.success) {
            toast({
                title: "Listing Created!",
                description: "Your phone has been successfully listed for sale.",
            });
            form.reset();
        } else {
            toast({
                title: "Error",
                description: result.message || "Could not create listing.",
                variant: "destructive",
            })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Listing Title</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. iPhone 14 Pro, 256GB, Space Black" {...field} />
                            </FormControl>
                            <FormDescription>A catchy and descriptive title.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField control={form.control} name="brand" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Brand</FormLabel>
                            <FormControl><Input placeholder="e.g. Apple" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="model" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Model</FormLabel>
                            <FormControl><Input placeholder="e.g. iPhone 14 Pro" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField control={form.control} name="condition" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Condition</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger><SelectValue placeholder="Select condition" /></SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="New">New</SelectItem>
                                    <SelectItem value="Used - Like New">Used - Like New</SelectItem>
                                    <SelectItem value="Used - Good">Used - Good</SelectItem>
                                    <SelectItem value="Used - Fair">Used - Fair</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )} />
                     <FormField control={form.control} name="price" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Price ($)</FormLabel>
                            <FormControl><Input type="number" placeholder="e.g. 950" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                </div>

                <fieldset className="space-y-4 rounded-lg border p-4">
                    <legend className="-ml-1 px-1 text-sm font-medium">Specifications</legend>
                    <div className="grid grid-cols-2 gap-4">
                         <FormField control={form.control} name="ram" render={({ field }) => (
                            <FormItem>
                                <FormLabel>RAM</FormLabel>
                                <FormControl><Input placeholder="e.g. 6GB" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                         <FormField control={form.control} name="storage" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Storage</FormLabel>
                                <FormControl><Input placeholder="e.g. 256GB" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                         <FormField control={form.control} name="battery" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Battery</FormLabel>
                                <FormControl><Input placeholder="e.g. 98% health" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="screenSize" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Screen Size</FormLabel>
                                <FormControl><Input placeholder="e.g. 6.1 inches" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                </fieldset>

                 <FormField control={form.control} name="location" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl><Input placeholder="e.g. San Francisco, CA" {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <FormItem>
                    <FormLabel>Images</FormLabel>
                    <FormControl>
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <UploadCloud className="w-8 h-8 mb-4 text-muted-foreground" />
                                    <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" multiple />
                            </label>
                        </div> 
                    </FormControl>
                    <FormDescription>Upload up to 5 images of your phone.</FormDescription>
                </FormItem>

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell buyers about your phone. Include details about its condition, any accessories, etc."
                                    className="resize-none"
                                    rows={5}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Creating Listing..." : "Create Listing"}
                </Button>
            </form>
        </Form>
    )
}
