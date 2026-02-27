"use client";

import { create } from 'zustand';

interface BoidsState {
  isEnabled: boolean;
  toggleBoids: () => void;
}

export const useBoids = create<BoidsState>((set) => ({
  isEnabled: false,
  toggleBoids: () => set((state) => ({ isEnabled: !state.isEnabled })),
}));
