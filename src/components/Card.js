import Backup from "../assets/images/backup.png"
import { Link } from "react-router-dom"
export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path, vote_average, release_date, popularity} = movie
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup;
  return (
    <div className="md:w-[50%] w-[100%]  flex flex-wrap md:flex-nowrap bg-white mb-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movie/${id}`}>
        <div className="md:w-[300px] w-full h-[100%]">
          <img className="rounded-t-lg h-[100%] " src={image} alt="" />
        </div>
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
            
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
        {vote_average && release_date ? (
          <>
            <p className=" text-black font-medium my-4 px-3 max-w-[250px] rounded-md border-black border-2 dark:border-white  dark:text-white">
              ⭐ {vote_average} - {popularity} reviews
            </p>

            <p className="text-black font-medium my-4 px-3 max-w-[250px] rounded-md border-black border-2 dark:border-white dark:text-white">
              <span className="mr-2 font-bold">Release Date:</span>
              <span>{movie.release_date}</span>
            </p>
          </>
        ) : " "}

        <Link
          to={`/movie/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-1 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />

          </svg>
        </Link>
      </div>
    </div>
  )
}
