export type Listing = {
  id: string;
  title: string;
  brand: string;
  model: string;
  condition: 'New' | 'Used - Like New' | 'Used - Good' | 'Used - Fair';
  specs: {
    ram: string;
    storage: string;
    battery: string;
    screenSize: string;
  };
  price: number;
  status: 'Available' | 'Sold' | 'Pending';
  images: string[];
  location: string;
  seller: {
    name: string;
    avatarUrl: string;
  };
  description: string;
  createdAt: string;
};

export type PhoneSpec = {
  id: string;
  brand: string;
  model: string;
  image: string;
  specs: {
    [key: string]: string;
  };
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  joinedAt: string;
};
