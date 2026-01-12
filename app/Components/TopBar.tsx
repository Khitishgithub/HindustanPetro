import React from 'react';
import { MapPin, Phone, Download, ChevronDown } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            {/* <img 
              src="https://via.placeholder.com/180x60?text=SUPREME" 
              alt="Supreme Industries" 
              className="h-16"
            /> */}
          </div>

          {/* Right Section - Info Items */}
          <div className="flex items-center gap-8">
            {/* Working Hours */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center">
                <MapPin className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Mon - Sat : 9.00 - 19.30</div>
                <div className="text-sm text-gray-500">Sunday : Closed</div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center">
                <Phone className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">+91 80859-29292</div>
                <div className="text-sm text-gray-500">supremepss@rediffmail.com</div>
              </div>
            </div>

            {/* Downloads */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center">
                <Download className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Downloads</div>
                <div className="text-sm text-gray-500">PDF Brochures</div>
              </div>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                <option>Select Language</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Marathi</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                Powered by 
                <span className="text-blue-600 font-medium">Google Translate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;