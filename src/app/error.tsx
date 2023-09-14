"use client";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="min-h-screen">
      <section className="bg-gray-200 border-1-4 border-red-500 text-red-700 mt-4 rounded shadow-md mx-auto p-2">
        <h3 className="font-bold mb-2">エラーが発生しました</h3>
        <button
          onClick={() => reset()}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200"
        >
          もう一度試す
        </button>
      </section>
    </div>
  );
};

export default Error;
