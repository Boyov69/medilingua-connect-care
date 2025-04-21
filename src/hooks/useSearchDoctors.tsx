
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchDoctors, SearchOptions } from "@/api/doctorsApi";
import { Doctor } from "@/types/doctor";
import { useToast } from "@/hooks/use-toast";

export const useSearchDoctors = () => {
  const [searchParams, setSearchParams] = useState<SearchOptions>({
    name: '',
    location: '',
    specialty: '',
    language: '',
    availabilityStatus: 'all',
    onlyAvailable: false,
  });
  
  const { toast } = useToast();
  
  const {
    data: doctors = [],
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ['doctors', searchParams],
    queryFn: () => searchDoctors(searchParams),
    enabled: false, // Niet automatisch aanroepen bij laden
  });

  const handleSearch = async () => {
    try {
      await refetch();
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to search doctors. Please try again.",
        variant: "destructive",
      });
    }
  };

  return {
    doctors,
    isLoading,
    isError,
    error,
    searchParams,
    setSearchParams,
    handleSearch,
  };
};
