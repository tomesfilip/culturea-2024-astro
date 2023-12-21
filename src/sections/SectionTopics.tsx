import { Section } from '../components/shared/Section';
import { TopicArticle } from '../components/topic/TopicArticle';
import { topicItems } from '../data/topicItems';

export const SectionTopics = () => {
  return (
    <Section
      sectionId="temata"
      className="pb-20"
      sectionName="Témata, na která se můžete těšit."
      headlineClassName="font-bold text-2xl lg:text-5xl pb-8"
    >
      <div className="space-y-16 px-4 lg:px-8">
        {topicItems.map((topicItem) => (
          <TopicArticle key={topicItem.headline} {...topicItem} />
        ))}
      </div>
    </Section>
  );
};
