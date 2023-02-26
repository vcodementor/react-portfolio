import {React,useEffect,useState } from 'react';
import BlogDetail from "./BlogDetail";

export default function BlogList() {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [query, setQuery] = useState("");
    // const [filter, setFilter] = useState("");
    const [paginate, setpaginate] = useState(4);

    useEffect(() => { // https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((result) =>{
            setLoaded(true);
            setBlogs(result);
        },(error) => {
            setLoaded(true);
            setError(error);
        });
    }, []);

    const data = Object.values(blogs);
    const search_parameters = Object.keys(Object.assign({}, ...data));

    function search(blogs) {
        return blogs.filter((blog) =>
            search_parameters.some((parameter) =>
                blog[parameter].toString().toLowerCase().includes(query)
            )
        );
    }

    const load_more = (event) => {
        setpaginate((prevValue) => prevValue + 8);
    };

    if (error) {
        return <>{error.message}</>;
    } else if (!loaded) {
        return <>loading...</>;
    } else {
        return (
            <section id="blogList" className="relative">
                <div className="container px-5 py-10 mx-auto text-center">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                        blogs
                    </h1>
                    <div className="flex flex-wrap  justify-center m-4">
                        <div class="relative w-full md:w-1/2 m-2">
                            <input type="search" 
                            name="search-form"
                            id="search-form"
                            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" 
                            placeholder="Search for..." 
                            onChange={(e) => setQuery(e.target.value)}
                            required />
                            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                        { search(data).slice(0, paginate).map((blog) => <BlogDetail key={blog.id} blog={blog} />) }
                        <button className="items-center my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={load_more}>Load More</button>
                    </div>
                </div>    
            </section>
        );
    }
}