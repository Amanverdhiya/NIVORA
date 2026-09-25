import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ListingCard from '@/components/listings/ListingCard';
import { listings } from '@/lib/data';
import ListingMap from '@/components/listings/ListingMap';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Filter } from 'lucide-react';

export default function ListingsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const college = searchParams.get('college') || '';
  const pincode = searchParams.get('pincode') || '';
  const type = searchParams.get('type') || '';

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      const collegeQuery = college.toLowerCase().trim();
      const pincodeQuery = pincode.trim();
      const typeQuery = type.trim();

      const matchesCollege =
        !collegeQuery ||
        listing.college.toLowerCase().includes(collegeQuery) ||
        listing.name.toLowerCase().includes(collegeQuery) ||
        listing.address.toLowerCase().includes(collegeQuery);

      const matchesPincode = !pincodeQuery || listing.pincode.includes(pincodeQuery);

      const matchesType = !typeQuery || typeQuery === 'all' || listing.type.toLowerCase() === typeQuery.toLowerCase();

      return matchesCollege && matchesPincode && matchesType;
    });
  }, [college, pincode, type]);

  const mapLocations = useMemo(() => {
    return filteredListings
      .filter((l) => l.location && l.location.lat && l.location.lng)
      .map((l) => ({ ...l.location, name: l.name }));
  }, [filteredListings]);

  const heading = college
    ? `Stays near ${college}`
    : pincode
    ? `Stays in ${pincode}`
    : 'All Available Stays';

  const setTypeFilter = (newType) => {
    const next = new URLSearchParams(searchParams);
    if (newType === 'all') {
      next.delete('type');
    } else {
      next.set('type', newType);
    }
    setSearchParams(next);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6 relative z-10">
        {/* Header section */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Search
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold font-headline">{heading}</h1>
            <p className="text-muted-foreground mt-1">
              {pincode && `Pincode: ${pincode} • `}
              {filteredListings.length} {filteredListings.length === 1 ? 'stay' : 'stays'} available
            </p>
          </div>

          {/* Quick type filter tags */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs text-muted-foreground flex items-center mr-1">
              <Filter className="w-3 h-3 mr-1" /> Type:
            </span>
            {['all', 'PG', 'Hostel', 'Flat'].map((t) => {
              const isActive = (type === '' && t === 'all') || type.toLowerCase() === t.toLowerCase();
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTypeFilter(t)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {t === 'all' ? 'All' : t}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Listings + Sticky Map */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold font-headline mb-4">Available Properties</h2>

            {filteredListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredListings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 border rounded-xl bg-card/50">
                <h3 className="text-xl font-semibold mb-2">No Listings Found</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">
                  We couldn&apos;t find accommodations matching your criteria. Try searching for other colleges like DTU, BPIT, MSIT, VIPS, or Amity.
                </p>
                <Link to="/">
                  <Button variant="outline">Search Again</Button>
                </Link>
              </div>
            )}
          </div>

          <div className="hidden lg:block lg:col-span-1 relative">
            <div className="sticky top-24 h-[65vh]">
              <ListingMap locations={mapLocations} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
