import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, School, Sparkles, Building, Home, BedDouble } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const popularColleges = [
  { name: 'DTU', fullName: 'Delhi Technological University (DTU)', pincode: '110042' },
  { name: 'BPIT', fullName: 'Bhagwan Parshuram Institute of Technology (BPIT)', pincode: '110085' },
  { name: 'MSIT', fullName: 'Maharaja Surajmal Institute of Technology (MSIT)', pincode: '110058' },
  { name: 'VIPS', fullName: 'Vivekananda Institute of Professional Studies (VIPS)', pincode: '110034' },
  { name: 'Amity', fullName: 'Amity University, Noida', pincode: '201303' },
  { name: 'JIIT', fullName: 'Jaypee Institute of Information Technology (JIIT)', pincode: '201309' },
  { name: 'NSUT', fullName: 'Netaji Subhas University of Technology (NSUT)', pincode: '110078' },
  { name: 'Maharaja Agrasen', fullName: 'Maharaja Agrasen College', pincode: '110096' },
];

export default function SearchForm() {
  const navigate = useNavigate();
  const [collegeQuery, setCollegeQuery] = useState('');
  const [pincodeQuery, setPincodeQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredColleges = useMemo(() => {
    if (!collegeQuery.trim()) return popularColleges;
    const q = collegeQuery.toLowerCase();
    return popularColleges.filter(
      (c) => c.name.toLowerCase().includes(q) || c.fullName.toLowerCase().includes(q)
    );
  }, [collegeQuery]);

  const handleSelectCollege = (college) => {
    setCollegeQuery(college.name);
    if (!pincodeQuery) {
      setPincodeQuery(college.pincode);
    }
    setShowSuggestions(false);
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();

    let targetCollege = collegeQuery.trim();
    let targetPincode = pincodeQuery.trim();

    if (!targetPincode && targetCollege) {
      const match = popularColleges.find(
        (c) =>
          c.name.toLowerCase() === targetCollege.toLowerCase() ||
          c.fullName.toLowerCase().includes(targetCollege.toLowerCase())
      );
      if (match) {
        targetPincode = match.pincode;
      }
    }

    const params = new URLSearchParams();
    if (targetCollege) params.set('college', targetCollege);
    if (targetPincode) params.set('pincode', targetPincode);
    if (selectedType && selectedType !== 'all') params.set('type', selectedType);

    navigate(`/listings?${params.toString()}`);
  };

  const handleQuickChip = (college) => {
    const params = new URLSearchParams({
      college: college.name,
      pincode: college.pincode,
    });
    if (selectedType && selectedType !== 'all') {
      params.set('type', selectedType);
    }
    navigate(`/listings?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Category Pills */}
      <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
        {[
          { id: 'all', label: 'All Stays', icon: Building },
          { id: 'PG', label: 'PGs', icon: BedDouble },
          { id: 'Hostel', label: 'Hostels', icon: Home },
          { id: 'Flat', label: 'Flats', icon: Building },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setSelectedType(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedType === id
                ? 'bg-primary text-primary-foreground shadow-md scale-105'
                : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Main Search Bar Card */}
      <Card className="p-3 md:p-4 shadow-xl border-border/60 bg-card/80 backdrop-blur-md">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center gap-3">
          {/* College Input */}
          <div className="relative flex-1 w-full">
            <div className="relative flex items-center">
              <School className="absolute left-3.5 h-5 w-5 text-muted-foreground pointer-events-none" />
              <Input
                type="text"
                placeholder="Enter college name (e.g. DTU, BPIT, MSIT, Amity...)"
                value={collegeQuery}
                onChange={(e) => {
                  setCollegeQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="pl-11 h-12 text-sm md:text-base bg-background/60 focus-visible:ring-primary"
              />
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && filteredColleges.length > 0 && (
              <div
                className="absolute z-50 left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-xl overflow-hidden max-h-60 overflow-y-auto"
                onMouseDown={(e) => e.preventDefault()}
              >
                {filteredColleges.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => handleSelectCollege(c)}
                    className="w-full text-left px-4 py-2.5 hover:bg-muted/80 flex items-center justify-between text-sm transition-colors border-b border-border/30 last:border-0"
                  >
                    <div>
                      <div className="font-medium text-foreground">{c.fullName}</div>
                      <div className="text-xs text-muted-foreground">Pincode: {c.pincode}</div>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-mono">
                      {c.name}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pincode Input */}
          <div className="relative w-full md:w-48">
            <MapPin className="absolute left-3.5 h-5 w-5 text-muted-foreground pointer-events-none" />
            <Input
              type="text"
              placeholder="Area / Pincode"
              value={pincodeQuery}
              onChange={(e) => setPincodeQuery(e.target.value)}
              className="pl-11 h-12 text-sm md:text-base bg-background/60 focus-visible:ring-primary"
            />
          </div>

          {/* Search Button */}
          <Button
            type="submit"
            className="w-full md:w-auto h-12 px-8 text-base font-semibold shadow-md flex items-center justify-center gap-2 group transition-all"
          >
            <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Search Stays
          </Button>
        </form>
      </Card>

      {/* Quick Search Chips */}
      <div className="mt-4 flex items-center justify-center gap-2 flex-wrap text-xs md:text-sm text-muted-foreground">
        <span className="flex items-center gap-1 font-medium text-foreground">
          <Sparkles className="w-3.5 h-3.5 text-primary" /> Popular:
        </span>
        {popularColleges.slice(0, 6).map((college) => (
          <button
            key={college.name}
            type="button"
            onClick={() => handleQuickChip(college)}
            className="px-2.5 py-1 rounded-md bg-muted/60 hover:bg-primary hover:text-primary-foreground transition-colors border border-border/40"
          >
            {college.name}
          </button>
        ))}
      </div>
    </div>
  );
}
