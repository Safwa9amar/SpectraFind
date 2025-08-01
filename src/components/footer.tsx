import Link from "next/link";
import { Smartphone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
             <Link href="/" className="flex items-center gap-2">
                <Smartphone className="h-7 w-7 text-primary" />
                <span className="text-xl font-bold font-headline text-foreground">
                  SpectraFind
                </span>
              </Link>
            <p className="text-muted-foreground text-sm">
              Your one-stop shop to compare, buy, and sell mobile phones.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/listings" className="text-sm text-muted-foreground hover:text-primary">All Listings</Link></li>
              <li><Link href="/compare" className="text-sm text-muted-foreground hover:text-primary">Compare Phones</Link></li>
              <li><Link href="/sell" className="text-sm text-muted-foreground hover:text-primary">Sell Your Phone</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Help Center</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
           <div>
            <h4 className="font-headline font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Twitter</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Facebook</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SpectraFind. All rights reserved.</p>
          <p>
            Developed by Hamza Hassani. Visit my website at{' '}
            <a href="https://hamza-safwan.netlify.app" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
              hamza-safwan.netlify.app
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
