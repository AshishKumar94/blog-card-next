import Image from 'next/image';
import { BlogCard, type BlogCardProps } from './components/BlogCard';

const blogCards = [
  {
    blogId: 1,
    imageUrl: '/spacejoy-YqFz7UMm8qE-unsplash.jpg',
    title: 'Top 5 Living Room Inspirations',
    description: 'Curated vibrants colors for your living, make it pop & calm in the same time.',
    moreUrl: '#',
    isInterior: true,
  },
] as BlogCardProps[];

export default function Home() {
  return (
    <div
      className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20"
      style={{ background: 'linear-gradient(#f9fafb, #d2d6db)' }}
    >
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        {blogCards.map((card) => {
          return <BlogCard key={card.blogId} {...card} />;
        })}
      </main>
    </div>
  );
}
