"use server"

import * as z from "zod";

const listingSchema = z.object({
  title: z.string(),
  brand: z.string(),
  model: z.string(),
  condition: z.string(),
  price: z.number(),
  location: z.string(),
  description: z.string(),
  ram: z.string(),
  storage: z.string(),
  battery: z.string(),
  screenSize: z.string(),
});

export async function createListing(values: z.infer<typeof listingSchema>) {
  const validatedFields = listingSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid data provided.",
    };
  }
  
  // In a real application, you would save this to the database.
  // For now, we'll just log it to the console.
  console.log("Creating new listing with values:", validatedFields.data);

  // Simulate a database operation
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
  };
}
