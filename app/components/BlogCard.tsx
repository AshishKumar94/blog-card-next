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
        <a href={moreUrl} className="flex h-5 items-center" style={{ color: '#4338CA' }}>
          <div className="mr-1">Read more</div>
          <div className="h-5 w-5" style={{ fill: '#4338CA' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export { BlogCard };
