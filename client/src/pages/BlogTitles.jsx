import { Hash, Sparkles } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import Markdown from "react-markdown";
import { useState } from "react";
import { useAuth } from "@clerk/clerk-react";
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const BlogTitles = () => {
  const blogTitleInfo = [
    "General",
    "Technology",
    "Business",
    "Health",
    "LifeStyle",
    "Education",
    "Food",
    "Travel",
  ];

  const [selectedBlogTitle, setSelectedBlogTitle] = useState("General");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const prompt = `Generate a blog title for the keyword ${input} in the category of ${selectedBlogTitle}.`;
      const { data } = await axios.post(
        "/api/ai/generate-blog-title",
        { prompt },
        {
          headers: {
            Authorization: `Bearer ${await getToken()}`,
          },
        }
      );

      if (data.success) {
        setContent(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }

    setLoading(false);
  };

  return (
    <div
      className="flex h-full overflow-y-scroll p-6 
    items-start flex-wrap gap-4 text-slate-700 "
    >
      {/* left col */}
      <form
        onSubmit={onSubmitHandler}
        className=" p-4 w-full max-w-lg bg-white border border-gray-200 rounded-lg"
      >
        <div className="flex items-center gap-3 ">
          <Sparkles className="w-6 text-[#8E37EB]" />
          <h1 className="text-xl font-semibold">AI Title Generator</h1>
        </div>
        <p className="mt-6 text-sm font-semibold">Keyword</p>
        <input
          required
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="The future of artificial intelligence is..."
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 required"
        />

        <p className="mt-4 text-sm font-semibold">Category</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {blogTitleInfo.map((item) => (
            <span
              onClick={() => setSelectedBlogTitle(item)}
              className={`px-4 py-1 text-sm border cursor-pointer rounded-full ${
                selectedBlogTitle == item
                  ? "bg-purple-50 text-purple-700"
                  : "text-gray-500 border-gray-300"
              }`}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
        <br />
        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#C341F6] to-[#8E37EB] px-4 py-2 mt-6 text-sm rounded-b-lg cursor-pointer text-white "
        >
          {loading ? (
            <span className=" w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
          ) : (
            <Hash className="w-5" />
          )}
          Generate Title
        </button>
      </form>
      {/* right col */}

      <div className="w-full max-w-lg p-4 bg-white rounded-b-lg flex flex-col border border-gray-200 min-h-96 ">
        <div className="flex items-center gap-3">
          <Hash className="w-5 h-5 text-[#8E37EB]" />
          <h1 className="text-xl font-semibold">Generated Titles</h1>
        </div>
        {!content ? (
          <div className="flex flex-1 justify-center items-center">
            <div className="text-sm flex flex-col gap-5 items-center text-gray-400 ">
              <Hash className="w-9 h-9" />
              <p>Enter a topic and click on "Generate Title" to get started</p>
            </div>
          </div>
        ) : (
          <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-600">
            <div className="reset-tw">
              <Markdown>{content}</Markdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogTitles;
