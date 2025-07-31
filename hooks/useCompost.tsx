
import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';
import { CompostDonation } from '../types';
import { DUMMY_COMPOST_DONATIONS as initialDonations } from '../data/dummyData';

interface CompostContextType {
  compostDonations: CompostDonation[];
  addCompostDonation: (donation: CompostDonation) => void;
  claimCompostDonation: (donationId: string, receiverId: string) => void;
}

const CompostContext = createContext<CompostContextType | null>(null);

export const CompostProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [compostDonations, setCompostDonations] = useState<CompostDonation[]>(initialDonations);

  const addCompostDonation = useCallback((newDonation: CompostDonation) => {
    setCompostDonations(prevDonations => [newDonation, ...prevDonations]);
  }, []);

  const claimCompostDonation = useCallback((donationId: string, receiverId: string) => {
    setCompostDonations(prevDonations =>
      prevDonations.map(donation =>
        donation.id === donationId
          ? { ...donation, status: 'Collected', claimedBy: receiverId }
          : donation
      )
    );
  }, []);

  const value = useMemo(() => ({ compostDonations, addCompostDonation, claimCompostDonation }), [compostDonations, addCompostDonation, claimCompostDonation]);

  return (
    <CompostContext.Provider value={value}>
      {children}
    </CompostContext.Provider>
  );
};

export const useCompost = () => {
  const context = useContext(CompostContext);
  if (!context) {
    throw new Error('useCompost must be used within a CompostProvider');
  }
  return context;
};