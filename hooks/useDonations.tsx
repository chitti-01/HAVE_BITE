
import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';
import { Donation } from '../types';
import { DUMMY_DONATIONS as initialDonations } from '../data/dummyData';

interface DonationContextType {
  donations: Donation[];
  addDonation: (donation: Donation) => void;
  claimDonation: (donationId: string, receiverId: string) => void;
}

const DonationContext = createContext<DonationContextType | null>(null);

export const DonationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [donations, setDonations] = useState<Donation[]>(initialDonations);

  const addDonation = useCallback((newDonation: Donation) => {
    // Add to the beginning of the list to show newest first
    setDonations(prevDonations => [newDonation, ...prevDonations]);
  }, []);

  const claimDonation = useCallback((donationId: string, receiverId: string) => {
    setDonations(prevDonations =>
      prevDonations.map(donation =>
        donation.id === donationId
          ? { ...donation, status: 'Distributed', claimedBy: receiverId }
          : donation
      )
    );
  }, []);

  const value = useMemo(() => ({ donations, addDonation, claimDonation }), [donations, addDonation, claimDonation]);

  return (
    <DonationContext.Provider value={value}>
      {children}
    </DonationContext.Provider>
  );
};

export const useDonations = () => {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error('useDonations must be used within a DonationProvider');
  }
  return context;
};