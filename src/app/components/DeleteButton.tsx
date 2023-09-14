"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { DeleteButtonProps } from "../../types";
import { deleteArticle } from "../../blogAPI";

const DeleteButton: FC<DeleteButtonProps> = ({ id }) => {
  const router = useRouter();

  const handleDelete = async () => {
    // await deleteArticle(id);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/blog/${id}`, { 
      method: "DELETE",
     });

    router.push("/");
    router.refresh();
  };

  return (
    <div
      className="bg-gray-400 hover:opacity-60 text-white rounded-md py-2 px-5 inline cursor-pointer"
      onClick={handleDelete}
    >
      削除
    </div>
  );
};

export default DeleteButton;
