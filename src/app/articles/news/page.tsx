"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { createArticle } from "../../../blogAPI";

const CreateBlogPage = () => {
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    // await createArticle(id, title, content);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${API_URL}/api/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, content }),
    });

    setLoading(false);
    router.push("/");
    router.refresh();
  };

  return (
    <div className="min-h-screen mb-7">
      <h2 className="text-2xl font-bold py-5">ブログ新規作成</h2>
      <form
        className="bg-slate-100 p-5 rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="text-gray-400 text-sm font-bold mb-2">URL</label>
          <input
            type="text"
            className="shadow focus:outline-none border rounded w-full p-1 px-1 text-gray-300 leading-tight"
            value={id}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setId(e.target.value)
            }
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-400 text-sm font-bold mb-2">
            タイトル
          </label>
          <input
            type="text"
            className="shadow focus:outline-none border rounded w-full p-1 px-1 text-gray-300 leading-tight"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-400 text-sm font-bold mb-5">本文</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow focus:outline-none border rounded w-full p-1 px-1 text-gray-300 leading-tight"
          />
        </div>

        <button
          type="submit"
          className={`px-4 py-2 rounded-md text-white mb-4 ${
            loading
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-400 hover:bg-gray-500"
          }`}
          disabled={loading}
        >
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
