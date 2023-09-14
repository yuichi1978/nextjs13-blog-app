export type ArticleProps = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export type ArticleListProps = {
  articles: ArticleProps[];
}

export type ArticleCardProps = {
  article: ArticleProps,
}

export type DeleteButtonProps = {
  id: string;
}