import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-700 mb-4">{body}</p>
      <div className="text-sm text-gray-500 flex justify-between">
        <span>Post ID: {id}</span>
        <span>User ID: {userId}</span>
      </div>
    </div>
  );
};

export default PostCard;
