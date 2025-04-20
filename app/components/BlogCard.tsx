import type { ReactElement } from 'react';
import Image from 'next/image';

export type BlogCardProps = {
  blogId: number;
  imageUrl: string;
  title: string;
  description: string;
  moreUrl: string;
  isInterior: boolean;
};

const BlogCard = ({
  imageUrl,
  title,
  description,
  moreUrl,
  isInterior,
}: BlogCardProps): ReactElement => {
  return (
    <div style={{ width: '340px', height: '504px' }}>
      <Image
        src={imageUrl}
        alt={title}
        width={340}
        height={288}
        priority
        className="rounded-t-lg"
      />
      <div className="rounded-b-lg bg-white px-4 py-6">
        <div
          className="mb-2 w-fit rounded-4xl border-1 px-2 py-0.5"
          style={{ backgroundColor: '#f0fdf4', borderColor: '#bbf7d0', color: '#15803d' }}
        >
          {isInterior ? 'Interior' : 'Exterior'}
        </div>
        <h1 className="mb-3 text-[18px] leading-7 font-semibold" style={{ color: '#171717' }}>
          {title}
        </h1>
        <h3 className="mb-6 line-clamp-2 text-[16px] leading-6" style={{ color: '#525252' }}>
          {description}
        </h3>
        <a href={moreUrl} className="flex" style={{ color: '#4338CA' }}>
          <text className="mb-3">Read more</text>
        </a>
      </div>
    </div>
  );
};

export { BlogCard };
