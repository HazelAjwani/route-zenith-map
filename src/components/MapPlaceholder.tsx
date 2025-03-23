
import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { RouteFormData } from './RouteForm';
import { cn } from '@/lib/utils';

type MapPlaceholderProps = {
  routeData?: RouteFormData;
  className?: string;
};

const MapPlaceholder = ({ routeData, className }: MapPlaceholderProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This would be where we'd initialize a real map
    if (routeData) {
      console.log('Map would update with route data:', routeData);
    }
  }, [routeData]);

  return (
    <div 
      className={cn(
        "relative h-full w-full rounded-2xl overflow-hidden shadow-xl group", 
        className
      )}
    >
      <div 
        ref={mapRef} 
        className="absolute inset-0 bg-gradient-to-br from-gray-100/90 to-blue-50/90 
                  backdrop-blur-md animate-in"
      >
        {/* Map grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmMWYxZjEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTMwIDMwaDMwVjBoLTMwdjMwek0wIDYwaDMwVjMwSDB2MzB6IiBmaWxsLW9wYWNpdHk9Ii4wNSIgZmlsbD0iIzAwMCIvPjwvZz48L3N2Zz4=')] 
                    opacity-10"></div>

        {/* Decorative elements */}
        <div className="absolute top-8 left-8 h-24 w-24 rounded-full bg-blue-400/10 animate-pulse-soft"></div>
        <div className="absolute bottom-12 right-12 h-32 w-32 rounded-full bg-blue-400/10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        
        {/* Route visualization placeholder */}
        {routeData && (
          <>
            <div className="absolute top-1/4 left-1/4 flex items-center justify-center">
              <div className="h-6 w-6 rounded-full bg-blue-500 shadow-lg animate-pulse"></div>
              <div className="ml-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
                <span className="text-xs font-medium">{routeData.origin}</span>
              </div>
            </div>
            
            <div className="absolute bottom-1/4 right-1/4 flex items-center justify-center">
              <div className="h-6 w-6 rounded-full bg-primary shadow-lg animate-pulse"></div>
              <div className="ml-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
                <span className="text-xs font-medium">{routeData.destination}</span>
              </div>
            </div>
            
            {/* Route line */}
            <svg className="absolute inset-0 w-full h-full z-0" overflow="visible">
              <line 
                x1="25%" 
                y1="25%" 
                x2="75%" 
                y2="75%" 
                stroke={routeData.routePreference === 'Greenest' ? '#10b981' : '#3b82f6'} 
                strokeWidth="3"
                strokeDasharray="10,5"
                strokeLinecap="round"
              />
            </svg>
          </>
        )}
        
        {!routeData && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <MapPin className="h-12 w-12 text-primary/40 mb-4" />
            <p className="text-lg font-medium text-foreground/80 max-w-xs">
              Enter your route details to see directions on the map
            </p>
          </div>
        )}
      </div>
      
      {/* Glass overlay at the bottom with route info */}
      {routeData && (
        <div className="absolute bottom-0 left-0 right-0 p-4 glass translate-y-full 
                       group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium text-foreground/60">
                Route calculated with {routeData.vehicleType} ({routeData.fuelType})
              </div>
              <div className="text-sm font-medium mt-1 flex items-center">
                <span className={routeData.routePreference === 'Greenest' ? 'text-green-500' : 'text-blue-500'}>
                  {routeData.routePreference === 'Greenest' ? 'Eco-friendly route' : 'Fastest route'}
                </span>
                <span className="mx-2">•</span>
                <span>~{Math.floor(Math.random() * 120) + 30} min</span>
              </div>
            </div>
            <button className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapPlaceholder;
