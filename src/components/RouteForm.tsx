
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
      className="w-full max-w-md mx-auto bg-white border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <label 
            htmlFor="origin" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Origin
          </label>
          <div className={cn(
            "relative rounded-xl transition-all duration-200",
            focusedField === 'origin' ? "ring-2 ring-primary/50" : ""
          )}>
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
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
              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl border-2 border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label 
            htmlFor="destination" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Destination
          </label>
          <div className={cn(
            "relative rounded-xl transition-all duration-200",
            focusedField === 'destination' ? "ring-2 ring-primary/50" : ""
          )}>
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
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
              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl border-2 border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label 
              htmlFor="vehicleType" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Vehicle Type
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                <Car size={18} />
              </div>
              <select
                id="vehicleType"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full appearance-none pl-10 pr-10 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl border-2 border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Car">Car</option>
                <option value="Truck">Truck</option>
                <option value="Bike">Bike</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
                <ChevronDown size={18} />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="fuelType" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Fuel Type
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                <Zap size={18} />
              </div>
              <select
                id="fuelType"
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                className="w-full appearance-none pl-10 pr-10 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl border-2 border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
                <ChevronDown size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label 
            htmlFor="routePreference" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Route Preference
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
              <Leaf size={18} />
            </div>
            <select
              id="routePreference"
              name="routePreference"
              value={formData.routePreference}
              onChange={handleChange}
              className="w-full appearance-none pl-10 pr-10 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl border-2 border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="Fastest">Fastest</option>
              <option value="Greenest">Greenest</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-3 px-4 bg-primary text-white rounded-xl font-medium transition-all 
                   hover:bg-primary/90 active:scale-[0.98]
                   shadow-lg shadow-primary/20"
        >
          Get Route
        </button>
      </div>
    </form>
  );
};

export default RouteForm;
