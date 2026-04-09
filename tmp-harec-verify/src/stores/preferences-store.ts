import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserPreferences, DrillSettings } from '@/lib/types';

interface PreferencesState extends UserPreferences {
  // Actions
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setFontSize: (fontSize: 'normal' | 'large') => void;
  setLastSection: (sectionId: string) => void;
  setDrillSettings: (settings: DrillSettings) => void;
  updateDrillSettings: (partial: Partial<DrillSettings>) => void;
  resetPreferences: () => void;
}

const initialState: UserPreferences = {
  theme: 'system',
  fontSize: 'normal',
  lastSection: '',
  drillSettings: {
    partFilter: [],
    sectionFilter: [],
    onlyMistakes: false,
    onlyMarkedDifficult: false,
    questionCount: 10,
  },
};

// Determine if we're in a test environment
const isTest = typeof process !== 'undefined' && process.env.VITEST === 'true';

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      ...initialState,

      setTheme: (theme: 'light' | 'dark' | 'system') => {
        set({ theme });
      },

      setFontSize: (fontSize: 'normal' | 'large') => {
        set({ fontSize });
      },

      setLastSection: (sectionId: string) => {
        set({ lastSection: sectionId });
      },

      setDrillSettings: (settings: DrillSettings) => {
        set({ drillSettings: settings });
      },

      updateDrillSettings: (partial: Partial<DrillSettings>) => {
        set((state) => ({
          drillSettings: {
            ...state.drillSettings,
            ...partial,
          },
        }));
      },

      resetPreferences: () => {
        set(initialState);
      },
    }),
    {
      name: 'preferences-store',
      storage: isTest
        ? // No-op storage for tests
          {
            getItem: async () => null,
            setItem: async () => {},
            removeItem: async () => {},
          }
        : // Real localStorage for production
          {
            getItem: (name: string) => {
              try {
                const item = localStorage.getItem(name);
                return item ? JSON.parse(item) : null;
              } catch (error) {
                console.warn(`Failed to read from localStorage: ${name}`, error);
                return null;
              }
            },
            setItem: (name: string, value: unknown) => {
              try {
                const data =
                  typeof value === 'string' ? JSON.parse(value) : value;
                localStorage.setItem(name, JSON.stringify(data));
              } catch (error) {
                console.warn(`Failed to write to localStorage: ${name}`, error);
              }
            },
            removeItem: (name: string) => {
              try {
                localStorage.removeItem(name);
              } catch (error) {
                console.warn(
                  `Failed to remove from localStorage: ${name}`,
                  error
                );
              }
            },
          },
    }
  )
);
