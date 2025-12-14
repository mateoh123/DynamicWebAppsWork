import { Link } from "react-router-dom";
import pdfResume from "../work_assets/Hernandez_Mateo_Resume25W.pdf";

const GetIT = () => {
  return (
    <div className="w-full flex border-y-4 bg-stone-950 p-5 gap-4">
      <div className="flex-grow grid grid-cols-2 gap-4">
        <a href={pdfResume} target="_blank" rel="noreferrer">
          <button className="font-source_san_3 font-bold text-2xl bg-transparent h-full w-full hover:bg-stone-50 text-stone-50 hover:text-stone-950 py-2 px-2 border-4 border-stone-50 hover:border-transparent">
            Resume
          </button>
        </a>
        <Link to="/dropdown">
          <button className="font-source_san_3 font-bold text-2xl bg-stone-50 h-full w-full hover:bg-stone-950 text-stone-950 hover:text-stone-50 py-2 px-2 border-4 border-stone-50 hover:border-stone-50">
            Contact
          </button>
        </Link>
      </div>
      <h1 className="text-8xl text-stone-50 font-bold flex justify-end">
        GET IN TOUCH
      </h1>
    </div>
  );
};

export default GetIT;
