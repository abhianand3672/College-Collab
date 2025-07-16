import { FaSearch } from "react-icons/fa";      {/*fa -> means font awesome(web site)*/}
import { Link } from "react-router-dom";        { /*for going from one page to another, without refreshing the page*/}

export default function Header() {
  return (
    <div>
      <header className="bg-sky-100 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">

          <Link to='/'>
          {/*text-sm and flex flex-wrap -> for phone sm:text-xl -> for desktop*/}
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              <span className="text-blue-600">Skill</span>
              <span className="text-blue-400">Radar</span>
            </h1>
          </Link>

          <ul className="flex gap-4">
            <Link to='/'>
            <li className="hidden sm:inline text-blue-600 hover:underline">
              Home
            </li>
            </Link>
            <Link to='/about'>
            <li className="hidden sm:inline text-blue-600 hover:underline">
              About
            </li>
            </Link>
            <Link to='/sign-in'>
            <li className="text-blue-600 hover:underline">
              Sign In
            </li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
}
