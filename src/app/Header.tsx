import Link from "next/link";

const Header = () => {
  return (
    <header className="py-5 border-b flex justify-between items-center ">
      <div>
        <h1 className="text-2xl font-extrabold">
          <Link href="/">Next.js13 Blog</Link>
        </h1>
      </div>
      <div>
        <nav className="text-sm font-medium">
          <Link href="/articles/news" className="bg-gray-400 px-4 py-2 rounded-md text-white">記事を書く</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
