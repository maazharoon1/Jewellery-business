import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, RotateCcw, Check } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const ConfigDrawer: React.FC = () => {
  const {
    config,
    updateConfig,
    resetToDefaults,
    useLiteralTokens,
    setUseLiteralTokens,
    isConfigDrawerOpen,
    setIsConfigDrawerOpen
  } = useBusiness();

  if (!isConfigDrawerOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, x: 320 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 320 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="w-full max-w-md bg-[#FDFCFB] h-full shadow-2xl flex flex-col justify-between border-l border-[#E5E1DA]"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#E5E1DA] flex items-center justify-between">
            <div>
              <h3 className="font-serif text-lg font-normal text-[#1A1A1A]">
                Business Placeholders & Config
              </h3>
              <p className="text-[11px] text-[#7A756D] mt-0.5">
                Centrally configured jewelry studio data
              </p>
            </div>
            <button
              onClick={() => setIsConfigDrawerOpen(false)}
              className="p-2 text-[#7A756D] hover:text-[#1A1A1A] rounded-full focus:outline-none"
              aria-label="Close configuration drawer"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Body Fields */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5 text-xs text-neutral-800">
            {/* Quick Switch for Literal Bracket Placeholders vs Sample Data */}
            <div className="p-4 bg-white border border-[#E5E1DA] rounded-sm space-y-2">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="font-medium text-[#1A1A1A]">
                  Display Literal Tokens
                </span>
                <input
                  type="checkbox"
                  checked={useLiteralTokens}
                  onChange={(e) => setUseLiteralTokens(e.target.checked)}
                  className="w-4 h-4 rounded text-[#1A1A1A] accent-[#1A1A1A] cursor-pointer"
                />
              </label>
              <p className="text-[11px] text-[#7A756D] leading-normal">
                When active, displays verbatim tokens (e.g. <code className="bg-[#E5E1DA]/40 px-1 py-0.5 rounded text-[10px]">[JEWELRY BRAND NAME]</code>, <code className="bg-[#E5E1DA]/40 px-1 py-0.5 rounded text-[10px]">[PHONE]</code>).
              </p>
            </div>

            {/* Individual Config Fields */}
            <div className="space-y-4">
              <div>
                <label className="block uppercase tracking-wider text-[10px] font-semibold text-neutral-600 mb-1">
                  Jewelry Brand Name
                </label>
                <input
                  type="text"
                  disabled={useLiteralTokens}
                  value={config.brandName}
                  onChange={(e) => updateConfig({ brandName: e.target.value })}
                  placeholder="[JEWELRY BRAND NAME]"
                  className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 rounded-none focus:outline-none focus:border-neutral-900 disabled:bg-neutral-100 disabled:text-neutral-500"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[10px] font-semibold text-neutral-600 mb-1">
                  Owner / Designer
                </label>
                <input
                  type="text"
                  disabled={useLiteralTokens}
                  value={config.designerName}
                  onChange={(e) => updateConfig({ designerName: e.target.value })}
                  placeholder="[OWNER / DESIGNER NAME]"
                  className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 rounded-none focus:outline-none focus:border-neutral-900 disabled:bg-neutral-100 disabled:text-neutral-500"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[10px] font-semibold text-neutral-600 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  disabled={useLiteralTokens}
                  value={config.phone}
                  onChange={(e) => updateConfig({ phone: e.target.value })}
                  placeholder="[PHONE]"
                  className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 rounded-none focus:outline-none focus:border-neutral-900 disabled:bg-neutral-100 disabled:text-neutral-500"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[10px] font-semibold text-neutral-600 mb-1">
                  Email
                </label>
                <input
                  type="text"
                  disabled={useLiteralTokens}
                  value={config.email}
                  onChange={(e) => updateConfig({ email: e.target.value })}
                  placeholder="[EMAIL]"
                  className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 rounded-none focus:outline-none focus:border-neutral-900 disabled:bg-neutral-100 disabled:text-neutral-500"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[10px] font-semibold text-neutral-600 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  disabled={useLiteralTokens}
                  value={config.address}
                  onChange={(e) => updateConfig({ address: e.target.value })}
                  placeholder="[ADDRESS]"
                  className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 rounded-none focus:outline-none focus:border-neutral-900 disabled:bg-neutral-100 disabled:text-neutral-500"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[10px] font-semibold text-neutral-600 mb-1">
                  City / Service Area
                </label>
                <input
                  type="text"
                  disabled={useLiteralTokens}
                  value={config.cityRegion}
                  onChange={(e) => updateConfig({ cityRegion: e.target.value })}
                  placeholder="[CITY / REGION]"
                  className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 rounded-none focus:outline-none focus:border-neutral-900 disabled:bg-neutral-100 disabled:text-neutral-500"
                />
              </div>

              <div className="pt-2 border-t border-neutral-200">
                <span className="block font-medium text-neutral-900 mb-2">Social Profiles</span>
                <div className="space-y-3">
                  <input
                    type="text"
                    disabled={useLiteralTokens}
                    value={config.facebookUrl}
                    onChange={(e) => updateConfig({ facebookUrl: e.target.value })}
                    placeholder="[FACEBOOK URL]"
                    className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-neutral-900 disabled:bg-neutral-100 disabled:text-neutral-500"
                  />
                  <input
                    type="text"
                    disabled={useLiteralTokens}
                    value={config.instagramUrl}
                    onChange={(e) => updateConfig({ instagramUrl: e.target.value })}
                    placeholder="[INSTAGRAM URL]"
                    className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-neutral-900 disabled:bg-neutral-100 disabled:text-neutral-500"
                  />
                  <input
                    type="text"
                    disabled={useLiteralTokens}
                    value={config.tiktokUrl}
                    onChange={(e) => updateConfig({ tiktokUrl: e.target.value })}
                    placeholder="[TIKTOK URL]"
                    className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-neutral-900 disabled:bg-neutral-100 disabled:text-neutral-500"
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-200">
                <span className="block font-medium text-neutral-900 mb-2">Image Assets</span>
                <div className="space-y-3">
                  <div>
                    <label className="block uppercase tracking-wider text-[10px] text-neutral-500 mb-1">
                      Hero Image URL
                    </label>
                    <input
                      type="text"
                      value={config.heroImageUrl}
                      onChange={(e) => updateConfig({ heroImageUrl: e.target.value })}
                      placeholder="[HERO IMAGE URL]"
                      className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wider text-[10px] text-neutral-500 mb-1">
                      Before Image URL (Restoration)
                    </label>
                    <input
                      type="text"
                      value={config.beforeImageUrl}
                      onChange={(e) => updateConfig({ beforeImageUrl: e.target.value })}
                      placeholder="[BEFORE IMAGE URL]"
                      className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wider text-[10px] text-neutral-500 mb-1">
                      After Image URL (Restoration)
                    </label>
                    <input
                      type="text"
                      value={config.afterImageUrl}
                      onChange={(e) => updateConfig({ afterImageUrl: e.target.value })}
                      placeholder="[AFTER IMAGE URL]"
                      className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-neutral-900"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-[#E5E1DA] flex items-center justify-between bg-white">
            <button
              onClick={resetToDefaults}
              className="flex items-center gap-1.5 text-xs text-[#7A756D] hover:text-[#1A1A1A] transition-colors focus:outline-none"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              onClick={() => setIsConfigDrawerOpen(false)}
              className="px-5 py-2.5 bg-[#1A1A1A] text-white text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2 border border-[#1A1A1A] rounded-sm"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Done</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
