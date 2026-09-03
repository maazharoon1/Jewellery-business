import React, { createContext, useContext, useState, useEffect } from 'react';
import { BusinessConfig } from '../types';
import { DEFAULT_BUSINESS_CONFIG, TOKEN_PLACEHOLDERS } from '../config/business';

interface BusinessContextType {
  config: BusinessConfig;
  updateConfig: (newValues: Partial<BusinessConfig>) => void;
  resetToDefaults: () => void;
  useLiteralTokens: boolean;
  setUseLiteralTokens: (val: boolean) => void;
  isConfigDrawerOpen: boolean;
  setIsConfigDrawerOpen: (val: boolean) => void;
}

const BusinessContext = createContext<BusinessContextType | undefined>(undefined);

const STORAGE_KEY = 'fine_jewelry_config_v1';
const TOKEN_KEY = 'fine_jewelry_use_tokens_v1';

export const BusinessProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [useLiteralTokens, setUseLiteralTokensState] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(TOKEN_KEY);
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  const [customConfig, setCustomConfig] = useState<BusinessConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...DEFAULT_BUSINESS_CONFIG, ...JSON.parse(saved) } : DEFAULT_BUSINESS_CONFIG;
    } catch {
      return DEFAULT_BUSINESS_CONFIG;
    }
  });

  const [isConfigDrawerOpen, setIsConfigDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customConfig));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }, [customConfig]);

  useEffect(() => {
    try {
      localStorage.setItem(TOKEN_KEY, JSON.stringify(useLiteralTokens));
    } catch (e) {
      console.warn('Could not save token state', e);
    }
  }, [useLiteralTokens]);

  const updateConfig = (newValues: Partial<BusinessConfig>) => {
    setCustomConfig((prev) => ({ ...prev, ...newValues }));
  };

  const resetToDefaults = () => {
    setCustomConfig(DEFAULT_BUSINESS_CONFIG);
  };

  const setUseLiteralTokens = (val: boolean) => {
    setUseLiteralTokensState(val);
  };

  const activeConfig = useLiteralTokens ? TOKEN_PLACEHOLDERS : customConfig;

  return (
    <BusinessContext.Provider
      value={{
        config: activeConfig,
        updateConfig,
        resetToDefaults,
        useLiteralTokens,
        setUseLiteralTokens,
        isConfigDrawerOpen,
        setIsConfigDrawerOpen
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusiness = (): BusinessContextType => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error('useBusiness must be used within a BusinessProvider');
  }
  return context;
};
