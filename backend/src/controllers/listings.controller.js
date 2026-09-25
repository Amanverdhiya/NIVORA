import { listings } from '../data/listings.data.js';

export const getListings = (req, res) => {
  try {
    const { college, pincode, type } = req.query;

    let results = [...listings];

    if (college) {
      const q = college.toLowerCase().trim();
      results = results.filter(
        (l) =>
          l.college.toLowerCase().includes(q) ||
          l.name.toLowerCase().includes(q) ||
          l.address.toLowerCase().includes(q)
      );
    }

    if (pincode) {
      results = results.filter((l) => l.pincode.includes(pincode.trim()));
    }

    if (type && type.toLowerCase() !== 'all') {
      results = results.filter((l) => l.type.toLowerCase() === type.toLowerCase());
    }

    res.json({
      success: true,
      count: results.length,
      data: results,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getListingById = (req, res) => {
  try {
    const { id } = req.params;
    const listing = listings.find((l) => l.id === id);

    if (!listing) {
      return res.status(404).json({ success: false, message: 'Listing not found' });
    }

    res.json({ success: true, data: listing });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
