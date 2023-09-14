import { FC } from "react";
import { ArticleListProps } from "../../types";
import ArticleCard from "../components/ArticleCard";

const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article}  />
      ))}
    </div>
  );
};

export default ArticleList;
