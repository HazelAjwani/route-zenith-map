
import React, { useState } from 'react';
import { ChevronDown, MapPin, Zap, Leaf, Car } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

type RouteFormProps = {
  onSubmit: (formData: RouteFormData) => void;
};

export type RouteFormData = {
  origin: string;
  destination: string;
  vehicleType: 'Car' | 'Truck' | 'Bike';
  fuelType: 'Petrol' | 'Diesel' | 'Electric';
  routePreference: 'Fastest' | 'Greenest';
};

const RouteForm = ({ onSubmit }: RouteFormProps) => {
  const [formData, setFormData] = useState<RouteFormData>({
    origin: '',
    destination: '',
    vehicleType: 'Car',
    fuelType: 'Petrol',
    routePreference: 'Fastest',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.origin || !formData.destination) {
      toast.error('Please enter both origin and destination');
      return;
    }
    
    onSubmit(formData);
    toast.success('Route calculated successfully');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto animate-in-up"
    >
      <div className="space-y-4">
        <div className="space-y-2 stagger-1 animate-in-up">
          <label 
            htmlFor="origin" 
            className="block text-sm font-medium text-foreground/80"
          >
            Origin
          </label>
          <div className={cn(
            "relative rounded-xl transition-all duration-200",
            focusedField === 'origin' ? "ring-2 ring-primary/20" : ""
          )}>
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <MapPin size={18} />
            </div>
            <input
              type="text"
              id="origin"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              onFocus={() => setFocusedField('origin')}
              onBlur={() => setFocusedField(null)}
              placeholder="Enter starting point"
              className="w-full pl-10 pr-4 py-3 bg-secondary/50 rounded-xl border-0 outline-none focus:ring-0"
            />
          </div>
        </div>

        <div className="space-y-2 stagger-2 animate-in-up">
          <label 
            htmlFor="destination" 
            className="block text-sm font-medium text-foreground/80"
          >
            Destination
          </label>
          <div className={cn(
            "relative rounded-xl transition-all duration-200",
            focusedField === 'destination' ? "ring-2 ring-primary/20" : ""
          )}>
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <MapPin size={18} />
            </div>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              onFocus={() => setFocusedField('destination')}
              onBlur={() => setFocusedField(null)}
              placeholder="Enter destination"
              className="w-full pl-10 pr-4 py-3 bg-secondary/50 rounded-xl border-0 outline-none focus:ring-0"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2 stagger-3 animate-in-up">
            <label 
              htmlFor="vehicleType" 
              className="block text-sm font-medium text-foreground/80"
            >
              Vehicle Type
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Car size={18} />
              </div>
              <select
                id="vehicleType"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full appearance-none pl-10 pr-10 py-3 bg-secondary/50 rounded-xl border-0 outline-none focus:ring-0 focus:ring-primary/20"
              >
                <option value="Car">Car</option>
                <option value="Truck">Truck</option>
                <option value="Bike">Bike</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                <ChevronDown size={18} />
              </div>
            </div>
          </div>

          <div className="space-y-2 stagger-3 animate-in-up">
            <label 
              htmlFor="fuelType" 
              className="block text-sm font-medium text-foreground/80"
            >
              Fuel Type
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Zap size={18} />
              </div>
              <select
                id="fuelType"
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                className="w-full appearance-none pl-10 pr-10 py-3 bg-secondary/50 rounded-xl border-0 outline-none focus:ring-0 focus:ring-primary/20"
              >
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                <ChevronDown size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 stagger-4 animate-in-up">
          <label 
            htmlFor="routePreference" 
            className="block text-sm font-medium text-foreground/80"
          >
            Route Preference
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Leaf size={18} />
            </div>
            <select
              id="routePreference"
              name="routePreference"
              value={formData.routePreference}
              onChange={handleChange}
              className="w-full appearance-none pl-10 pr-10 py-3 bg-secondary/50 rounded-xl border-0 outline-none focus:ring-0 focus:ring-primary/20"
            >
              <option value="Fastest">Fastest</option>
              <option value="Greenest">Greenest</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-3 px-4 bg-primary text-white rounded-xl font-medium transition-all 
                   hover:bg-primary/90 active:scale-[0.98] stagger-5 animate-in-up
                   shadow-lg shadow-primary/20"
        >
          Get Route
        </button>
      </div>
    </form>
  );
};

export default RouteForm;
