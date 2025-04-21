
import DoctorCard from "@/components/doctor/DoctorCard";

interface DoctorsListProps {
  isLoading: boolean;
  doctors: any[];
  isError: boolean;
  searchParams: any;
  t: any;
}

export const DoctorsList = ({
  isLoading,
  doctors,
  isError,
  searchParams,
  t,
}: DoctorsListProps) => {
  return (
    <div className="space-y-4">
      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Searching for doctors...</p>
        </div>
      ) : doctors.length > 0 ? (
        <>
          <p className="text-sm text-muted-foreground">{doctors.length} doctors found</p>
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </>
      ) : (
        <div className="text-center py-12 bg-white/80 rounded-lg shadow glass">
          {isError ? (
            <p className="text-red-500">Error searching for doctors. Please try again.</p>
          ) : (
            <>
              <p className="text-muted-foreground">
                {searchParams.name || searchParams.location || searchParams.specialty || searchParams.language || searchParams.availabilityStatus !== 'all' || searchParams.onlyAvailable
                  ? "No doctors found matching your criteria. Try adjusting your filters."
                  : t.searchResults}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DoctorsList;
