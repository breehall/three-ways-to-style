import CSSModulesButton from '@/components/css-modules/button';
import StyledComponentsButton from '@/components/styled-components/button';
import TailwindButton from '@/components/tailwind/button';

export default function Home() {
  return (
    <div className="flex gap-4 m-6">
      <CSSModulesButton variant="primary" size="medium">
        CSS Modules Button
      </CSSModulesButton>
      <TailwindButton variant="primary" size="medium">
        Tailwind Button
      </TailwindButton>
      <StyledComponentsButton variant="primary" size="medium">
        Styled Components Button
      </StyledComponentsButton>
    </div>
  );
}
