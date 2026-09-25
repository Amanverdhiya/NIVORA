import React from 'react';
import { Link } from 'react-router-dom';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle, Star, MapPin } from 'lucide-react';

const badgeVariantMap = {
  PG: 'default',
  Flat: 'secondary',
  Mess: 'outline',
  Hostel: 'destructive',
};

export default function ListingCard({ listing }) {
  const image = PlaceHolderImages.find((img) => img.id === listing.imageId);

  // Calculate average rating if reviews exist
  const avgRating =
    listing.reviews && listing.reviews.length > 0
      ? (
          listing.reviews.reduce((acc, r) => acc + (r.rating || 0), 0) /
          listing.reviews.length
        ).toFixed(1)
      : null;

  return (
    <Card className="overflow-hidden flex flex-col hover:border-primary/50 transition-all hover:shadow-lg group bg-card/90">
      {image && (
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <img
            src={image.imageUrl}
            alt={image.description}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {avgRating && (
            <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md px-2 py-1 rounded-md text-xs font-semibold text-white flex items-center gap-1 shadow-sm">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span>{avgRating} ({listing.reviews.length})</span>
            </div>
          )}
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="font-headline text-lg group-hover:text-primary transition-colors">
            {listing.name}
          </CardTitle>
          <Badge variant={badgeVariantMap[listing.type] || 'default'}>
            {listing.type}
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-1 text-xs">
          <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
          <span className="truncate">{listing.address}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pb-4 text-xs text-muted-foreground">
        <span className="inline-block bg-muted/60 px-2 py-0.5 rounded text-foreground/80 font-medium">
          Near {listing.college}
        </span>
      </CardContent>
      <CardFooter className="pt-0">
        <Link to={`/listings/${listing.id}`} className="w-full">
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <MessageCircle className="mr-2 h-4 w-4" />
            View Reviews & Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
