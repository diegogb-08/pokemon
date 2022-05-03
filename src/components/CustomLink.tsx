import { Link, useMatch, useResolvedPath, LinkProps } from "react-router-dom"

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <div className="rounded-sm">
      <Link
        className={`${match ? 'bg-red-400' : 'bg-red-300'} hover:bg-red-200 text-red-900 font-bold p-3 flex justify-center items-center`}
        style={{ pointerEvents: match ? 'none' : 'all' }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  )
}

export default CustomLink