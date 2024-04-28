import { Link } from "@hiogawa/react-server/client";

export default function Layout(props: React.PropsWithChildren) {
  return (
    <html suppressHydrationWarning>
      <head suppressHydrationWarning>
        <meta charSet="UTF-8" />
        <title>Vite rsc</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning className="container p-4">
        <h3 className="text-2xl">RSC</h3>
        <nav>
          <ul className="list-disc list-inside">
            <li>
              <Link href="/" className="text-blue-500">Home</Link>
            </li>
            <li>
              <Link href="/use-state" className="text-blue-500">Counter (useState)</Link>
            </li>
            <li>
              <Link href="/server-action" className="text-blue-500">Counter (server action)</Link>
            </li>
          </ul>
        </nav>
        {props.children}
      </body>
    </html>
  );
}
