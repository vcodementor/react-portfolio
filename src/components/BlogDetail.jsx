import { React } from 'react';

export default function BlogDetail(blog) {
    return (
        <>
            <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                    <p className="title-font font-medium text-white">
                      {blog.title}
                    </p>
                </div>
            </div>
        </>
    );
}