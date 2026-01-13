"use client";

const LocationMap = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-heading">
            Our Location
          </h2>
          <p className="text-body mt-2">
            Visit our manufacturing facility at Hathkhoj Industrial Area,
            Chhattisgarh.
          </p>
        </div>

        {/* Map */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-lg border">
          <iframe
            title="Hindustan Petro By Products Location"
            src="https://www.google.com/maps?q=6CP6+GC8,+Heavy+Industrial+Area+Hathkhoj,+Charoda,+Chhattisgarh+490024&output=embed"
            className="h-[450px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
