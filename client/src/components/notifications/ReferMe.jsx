import React from "react";
import githubLogo from "@/assets/github-mark-c791e9551fe4/github-mark/github-mark-white.png";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ReferMe = () => {
  return (
    <Link to={"/work"}>
      <div className="bg-[#111927] flex justify-center items-center space-x-2 text-white py-1 font-semibold text-sm">
        <div>
          I’m open to new
          <span className="font-bold px-1 text-base">Opportunities!</span> Feel
          free to reach out to me for
          <span className="font-bold px-1 text-base">Collaborations</span>,
          <span className="font-bold px-1 text-base">Projects</span>, or any
          <span className="font-bold px-1 text-base">
            Professional Inquiries
          </span>
          .
        </div>
        <div className="flex justify-center items-center space-x-2">
          <MoveUpRight className="hover:scale-125 transition-all duration-100" />
        </div>
      </div>
    </Link>
  );
};
