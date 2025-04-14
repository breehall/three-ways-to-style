'use client';

import CSSModulesButton from '@/components/css-modules/button';
import StyledComponentsButton from '@/components/styled-components/button';
import TailwindButton from '@/components/tailwind/button';
import { useState } from 'react';
import { ButtonVariant, ButtonSize } from '@/types/button';
import { useTheme } from '@/contexts/ThemeContext';

export default function Home() {
  const [variant, setVariant] = useState<ButtonVariant>('primary');
  const [size, setSize] = useState<ButtonSize>('medium');
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [withIcon, setWithIcon] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <main className="min-h-screen p-10 flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl font-bold">Bree&apos;s Fancy Buttons™</h1>

      <form className="bg-gray-50 rounded-lg p-6 shadow-sm w-full max-w-2xl">
        <fieldset className="grid md:grid-cols-2 gap-6">
          {/* Dropdowns */}
          <div>
            <select
              id="variant"
              className="w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              onChange={(e) => setVariant(e.target.value as ButtonVariant)}
              aria-label="Button variant"
            >
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="empty">Empty</option>
            </select>

            <select
              id="size"
              className="w-full mt-6 p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              onChange={(e) => setSize(e.target.value as ButtonSize)}
              aria-label="Button size"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
            </select>
          </div>

          {/* Checkboxes */}
          <ul className="space-y-4">
            {[
              { id: 'disabled', label: 'Disabled', setter: setDisabled },
              { id: 'loading', label: 'Loading', setter: setLoading },
              { id: 'withIcon', label: 'Show Icon', setter: setWithIcon },
              { id: 'isDarkMode', label: 'Dark Mode', setter: toggleTheme },
            ].map(({ id, label, setter }) => (
              <li key={id}>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    onChange={(e) => setter(e.target.checked)}
                  />
                  {label}
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      </form>

      <div className="flex flex-wrap gap-4 justify-center">
        <CSSModulesButton
          variant={variant}
          size={size}
          disabled={disabled}
          loading={loading}
          icon={withIcon && <div>🌴</div>}
        >
          CSS Modules Button
        </CSSModulesButton>
        <TailwindButton
          variant={variant}
          size={size}
          disabled={disabled}
          loading={loading}
          icon={withIcon && <div>🌴</div>}
        >
          Tailwind Button
        </TailwindButton>
        <StyledComponentsButton
          variant={variant}
          size={size}
          disabled={disabled}
          loading={loading}
          icon={withIcon && <div>🌴</div>}
        >
          Styled Components Button
        </StyledComponentsButton>
      </div>
    </main>
  );
}
