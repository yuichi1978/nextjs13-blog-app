import ArticleList from "./components/ArticleList";
import { getAllArticles } from "../blogAPI";
import { supabase } from "@/utils/supabaseClient";

export default async function Home() {
  // const articles = await getAllArticles();
  // console.log(supabase);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/blog`, { cache: "no-store" });
  const articles = await res.json();

  return (
    <div className="md:flex justify-between">
      <section className="w-full md:w-2/3 flex flex-col items-center md:pr-5">
        <ArticleList articles={articles} />
      </section>

      <aside className="w-full md:w-1/3 flex flex-col items-center">
        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4">
          <h3 className="font-blod text-gray-900 mb-2">About Me</h3>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            eius, magni harum officiis tenetur esse tempora doloremque sed
            assumenda nam quae veritatis magnam iure. Fugiat dolor fugit
            voluptatum laboriosam deleniti.{" "}
          </p>
        </div>
        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4 w-full">
          <h3 className="font-bold text-gray-900 mb-2">Category</h3>
          <ul className="text-gray-600 mt-2">
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Automotive</a>
            </li>
            <li>
              <a href="#">Finance</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
