import { useRouteError, Link } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string }
  console.error(error)

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center w-screen h-screen gap-4"
    >
      <h1 className="text-2xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      {/* 返回上一页 */}
      <Link to="/" className="text-blue-600 underline ">
        返回主页
      </Link>
    </div>
  )
}
