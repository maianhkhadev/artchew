"use client"
import { useParams, redirect } from 'next/navigation';
import { SectionHero } from '../../../components/SectionHeroArticle';
import { SectionArticleContent } from '../../../components/SectionArticleContent';
import { SectionLessions } from '../../../components/SectionLessions';
import { useArticle } from '@artchew/data-access-articles';

export default function Article() {
  const { id } = useParams();
  const { data } = useArticle(id as string);

  if (data === null) {
    redirect('/');
  }

  return (
    <div>
      <SectionHero />

      <SectionArticleContent {...data} />

      <SectionLessions title="Bài giảng" />
    </div>
  );
}
