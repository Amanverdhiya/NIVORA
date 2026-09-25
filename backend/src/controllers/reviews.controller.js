import { listings } from '../data/listings.data.js';

export const addReview = (req, res) => {
  try {
    const { listingId, rating, comment, author = 'Anonymous' } = req.body;

    if (!listingId || !rating || !comment) {
      return res.status(400).json({
        success: false,
        message: 'listingId, rating, and comment are required fields.',
      });
    }

    const listing = listings.find((l) => l.id === listingId);
    if (!listing) {
      return res.status(404).json({ success: false, message: 'Listing not found' });
    }

    const newReview = {
      id: `rev-${Date.now()}`,
      author,
      rating: Number(rating),
      comment: comment.trim(),
    };

    listing.reviews.unshift(newReview);

    res.status(201).json({
      success: true,
      message: 'Review submitted successfully',
      data: newReview,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
