import type { Listing, PhoneSpec, User } from './types';

export const listings: Listing[] = [
  {
    id: '1',
    title: 'iPhone 14 Pro, 256GB, Space Black',
    brand: 'Apple',
    model: 'iPhone 14 Pro',
    condition: 'Used - Like New',
    specs: { ram: '6GB', storage: '256GB', battery: '3200mAh', screenSize: '6.1"' },
    price: 950,
    status: 'Available',
    images: ['https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16pro__erw9alves2qa_xlarge.png', 'https://placehold.co/600x600.png'],
    location: 'San Francisco, CA',
    seller: { name: 'Jane Doe', avatarUrl: 'https://placehold.co/100x100.png' },
    description: 'Pristine condition iPhone 14 Pro. No scratches or dents. Comes with original box and cable. Battery health at 98%.',
    createdAt: '2023-10-26T10:00:00Z',
  },
  {
    id: '2',
    title: 'Samsung Galaxy S23 Ultra, 512GB',
    brand: 'Samsung',
    model: 'Galaxy S23 Ultra',
    condition: 'Used - Good',
    specs: { ram: '12GB', storage: '512GB', battery: '5000mAh', screenSize: '6.8"' },
    price: 850,
    status: 'Available',
    images: ['https://images.samsung.com/is/image/samsung/assets/fr/support/mobile-devices/comparatif-galaxy-s23-ultra-s23-plus-et-s23/images/0_sef_comparatif-galaxy-s23-ultra-s23-plus-et-s23.png?$ORIGIN_PNG$', 'https://placehold.co/600x600.png'],
    location: 'New York, NY',
    seller: { name: 'John Smith', avatarUrl: 'https://placehold.co/100x100.png' },
    description: 'Great phone, works perfectly. Minor scuff on the corner, not visible with a case. Screen is flawless. Includes S-Pen.',
    createdAt: '2023-10-25T14:30:00Z',
  },
  {
    id: '3',
    title: 'Google Pixel 7 Pro, 128GB, Unlocked',
    brand: 'Google',
    model: 'Pixel 7 Pro',
    condition: 'New',
    specs: { ram: '12GB', storage: '128GB', battery: '5000mAh', screenSize: '6.7"' },
    price: 700,
    status: 'Available',
    images: ['https://lh3.googleusercontent.com/KemkJ3_LvVEnxz_sm-g7pRgNLDpccuDDaDHvHBEQ3z06ZyVsCAPkWlCd9hZelw8u1_Ref9bmsmlDS4mz-rZx6_sGmGRwM0DhFM0=s16383-e365-rw-v1'],
    location: 'Austin, TX',
    seller: { name: 'Emily White', avatarUrl: 'https://placehold.co/100x100.png' },
    description: 'Brand new, sealed in box. Unlocked for all carriers. Amazing camera and pure Android experience.',
    createdAt: '2023-10-24T09:00:00Z',
  },
  {
    id: '4',
    title: 'OnePlus 11, 256GB, Titan Black',
    brand: 'OnePlus',
    model: 'OnePlus 11',
    condition: 'Used - Like New',
    specs: { ram: '16GB', storage: '256GB', battery: '5000mAh', screenSize: '6.7"' },
    price: 600,
    status: 'Available',
    images: ['https://oasis.opstatics.com/content/dam/oasis/page/2023/in/product/11/marble.png'],
    location: 'Chicago, IL',
    seller: { name: 'Michael Brown', avatarUrl: 'https://placehold.co/100x100.png' },
    description: 'Barely used OnePlus 11. Super fast charging and performance. Not a single mark on it.',
    createdAt: '2023-10-23T18:00:00Z',
  },
  {
    id: '5',
    title: 'iPhone 13, 128GB, Blue',
    brand: 'Apple',
    model: 'iPhone 13',
    condition: 'Used - Fair',
    specs: { ram: '4GB', storage: '128GB', battery: '3240mAh', screenSize: '6.1"' },
    price: 450,
    status: 'Available',
    images: ['https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iphone13_colors_geo_09142021_big.jpg.slideshow-large_2x.jpg'],
    location: 'Los Angeles, CA',
    seller: { name: 'Sarah Green', avatarUrl: 'https://placehold.co/100x100.png' },
    description: 'Fully functional iPhone 13. Has some scratches on the screen and body but does not affect performance. Battery health 85%.',
    createdAt: '2023-10-22T12:00:00Z',
  },
];

export const featuredListings = listings.slice(0, 4);

export const phoneSpecs: PhoneSpec[] = [
    {
        id: 'p1',
        brand: 'Apple',
        model: 'iPhone 14 Pro',
        image: 'https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16pro__erw9alves2qa_xlarge.png',
        specs: {
            'Release Date': 'September 2022',
            'Screen Size': '6.1 inches',
            'Resolution': '1179 x 2556 pixels',
            'Chipset': 'Apple A16 Bionic',
            'RAM': '6 GB',
            'Main Camera': '48 MP (wide)',
            'Battery': '3200 mAh',
        }
    },
    {
        id: 'p2',
        brand: 'Samsung',
        model: 'Galaxy S23 Ultra',
        image: 'https://lh3.googleusercontent.com/KemkJ3_LvVEnxz_sm-g7pRgNLDpccuDDaDHvHBEQ3z06ZyVsCAPkWlCd9hZelw8u1_Ref9bmsmlDS4mz-rZx6_sGmGRwM0DhFM0=s16383-e365-rw-v1',
        specs: {
            'Release Date': 'February 2023',
            'Screen Size': '6.8 inches',
            'Resolution': '1440 x 3088 pixels',
            'Chipset': 'Snapdragon 8 Gen 2',
            'RAM': '8/12 GB',
            'Main Camera': '200 MP (wide)',
            'Battery': '5000 mAh',
        }
    },
    {
        id: 'p3',
        brand: 'Google',
        model: 'Pixel 7 Pro',
        image: 'https://lh3.googleusercontent.com/KemkJ3_LvVEnxz_sm-g7pRgNLDpccuDDaDHvHBEQ3z06ZyVsCAPkWlCd9hZelw8u1_Ref9bmsmlDS4mz-rZx6_sGmGRwM0DhFM0=s16383-e365-rw-v1',
        specs: {
            'Release Date': 'October 2022',
            'Screen Size': '6.7 inches',
            'Resolution': '1440 x 3120 pixels',
            'Chipset': 'Google Tensor G2',
            'RAM': '12 GB',
            'Main Camera': '50 MP (wide)',
            'Battery': '5000 mAh',
        }
    },
    {
        id: 'p4',
        brand: 'OnePlus',
        model: 'OnePlus 11',
        image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/in/product/11/marble.png',
        specs: {
            'Release Date': 'January 2023',
            'Screen Size': '6.7 inches',
            'Resolution': '1440 x 3216 pixels',
            'Chipset': 'Snapdragon 8 Gen 2',
            'RAM': '8/16 GB',
            'Main Camera': '50 MP (wide)',
            'Battery': '5000 mAh',
        }
    }
];

export const mockUser: User = {
  id: 'user_123',
  name: 'Alex Johnson',
  email: 'alex.j@example.com',
  avatarUrl: 'https://placehold.co/100x100.png',
  joinedAt: '2023-01-15T09:30:00Z',
};

export const userListings = listings.filter(l => l.seller.name === 'Jane Doe' || l.seller.name === 'John Smith').map(l => ({...l, seller: {name: mockUser.name, avatarUrl: mockUser.avatarUrl}}));
