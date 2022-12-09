import React from 'react';

const Link = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

const Story = ({ story: { id, by, title, kids, time, url } }) => {
  return (
    <div className="bg-blue-100 text-gray-900 m-3 p-2 rounded-lg ml-auto mr-auto text-center w-[1000px]
                    hover:bg-blue-400">
      <div className="font-bold ">
        <Link url={url} title={title} />
      </div>
      <div className="story-info">
        <span>
          by{' '}
          <Link url={`https://news.ycombinator.com/user?id=${by}`} title={by} />
        </span>
      </div>
    </div>
  );
};

export default Story;
