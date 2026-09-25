import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { listings } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, CheckCircle, Phone, User, ArrowLeft, MapPin } from 'lucide-react';
import ReviewForm from '@/components/listings/ReviewForm';
import ListingMap from '@/components/listings/ListingMap';

const badgeVariantMap = {
  PG: 'default',
  Flat: 'secondary',
  Mess: 'outline',
  Hostel: 'destructive',
};

function parseFacilities(comment = '') {
  const parts = comment.split('. Rent');
  const facilitiesText = parts[0];
  const rentComment = parts.length > 1 ? `Rent${parts[1]}` : '';
  const facilities = facilitiesText.split(',').map((item) => item.trim()).filter(Boolean);
  return { facilities, rentComment };
}

export default function ListingDetailPage() {
  const { id } = useParams();
  const listing = listings.find((l) => l.id === id);

  if (!listing) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto p-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
          <p className="text-muted-foreground mb-6">The listing you are looking for does not exist or has been removed.</p>
          <Link to="/listings">
            <Button>Browse All Listings</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const image = PlaceHolderImages.find((img) => img.id === listing.imageId);
  const firstComment = listing.reviews && listing.reviews.length > 0 ? listing.reviews[0].comment : '';
  const { facilities, rentComment } = parseFacilities(firstComment);

  const mapLocation = listing.location && listing.location.lat && listing.location.lng
    ? [{ lat: listing.location.lat, lng: listing.location.lng, name: listing.name }]
    : [];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link to="/listings" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Listings
          </Link>

          {/* Hero Image */}
          {image && (
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg mb-6 bg-muted">
              <img
                src={image.imageUrl}
                alt={image.description}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Title and Info */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2 gap-4 flex-wrap">
              <h1 className="text-3xl md:text-4xl font-bold font-headline">{listing.name}</h1>
              <Badge variant={badgeVariantMap[listing.type] || 'default'} className="text-base px-4 py-1">
                {listing.type}
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground flex items-center gap-1.5">
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              {listing.address} (Near {listing.college})
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              {/* Facilities Section */}
              <Card className="border-border/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">Details & Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {facilities.map((facility, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        <span>{facility}</span>
                      </li>
                    ))}
                  </ul>
                  {rentComment && <p className="text-muted-foreground italic text-xs mt-2 border-t pt-2">{rentComment}</p>}
                </CardContent>
              </Card>

              {/* Contact Owner Section */}
              <Card className="border-border/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">Contact Owner</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <p className="text-base font-medium">{listing.contact.name}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a href={`tel:${listing.contact.phone}`} className="text-sm text-accent hover:underline">
                        {listing.contact.phone}
                      </a>
                    </div>
                  </div>
                  <a href={`tel:${listing.contact.phone}`}>
                    <Button className="w-full sm:w-auto">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Right Column (Map) */}
            <Card className="border-border/60 overflow-hidden flex flex-col">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Location</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 p-0 min-h-[250px]">
                <ListingMap locations={mapLocation} />
              </CardContent>
            </Card>
          </div>

          {/* Leave a Review Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-headline mb-4">Leave a Review</h2>
            <ReviewForm />
          </div>

          {/* Existing Reviews Section */}
          <div>
            <h2 className="text-2xl font-bold font-headline mb-4">
              Verified Reviews ({listing.reviews.length})
            </h2>
            <div className="space-y-4">
              {listing.reviews.map((review) => (
                <Card key={review.id} className="border-border/60">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-base">{review.author}</CardTitle>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                        {[...Array(5 - review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-muted-foreground/30" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/90 leading-relaxed">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
