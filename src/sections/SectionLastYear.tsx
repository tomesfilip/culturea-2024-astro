import { LastYearSlider } from '../components/history/LastYearSlider';

import { Section } from '../components/shared/Section';

import '../styles/dashedBorder.css';

export const SectionLastYear = () => {
  return (
    <Section
      sectionId="historie"
      sectionName="Minulý ročník"
      className="py-12 lg:py-[120px] xl:py-[160px] bg-[url('/pozadi/desktop/last-year-bg.webp')] bg-cover bg-no-repeat"
      headlineClassName="text-white"
    >
      <LastYearSlider />
    </Section>
  );
};
