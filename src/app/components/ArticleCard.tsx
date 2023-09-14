import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArticleCardProps } from "../../types";

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="shadow my-4" key={article.id}>
      <Link href={`articles/${article.id}`} className="hover:opacity-75">
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
          alt=""
          width={1280}
          height={300}
        />
      </Link>
      <div className="bg-white p-5 flex flex-col justify-start ">
        <Link href="#" className="font-bold text-gray-400">
          Technology
        </Link>
        <Link
          href={`articles/${article.id}`}
          className="text-gray-500 text-2xl font-bold hover:opacity-60 py-2"
        >
          {article.title}
        </Link>
        <p className="text-sm pb-3 text-gray-400">
          Published on {new Date(article.createdAt).toLocaleString()}
        </p>
        <Link href={`articles/${article.id}`} className="text-gray-300 pb-6">
          {article.content.length > 70
            ? article.content.substring(0, 70) + "..."
            : article.content}
        </Link>
        <Link href={`articles/${article.id}`} className="text-teal-400">
          続きを読む
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
