import { Link } from "@hiogawa/react-server/client";

export default function Layout(props: React.PropsWithChildren) {
  return (
    <html suppressHydrationWarning>
      <head suppressHydrationWarning>
        <meta charSet="UTF-8" />
        <title>Vite rsc</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning>
        <h3>RSC</h3>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/use-state">Counter (useState)</Link>
            </li>
            <li>
              <Link href="/server-action">Counter (server action)</Link>
            </li>
          </ul>
        </nav>
        {props.children}
      </body>
    </html>
  );
}
