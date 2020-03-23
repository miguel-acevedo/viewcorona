import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:100i,300,400,500,700" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Allura" rel="stylesheet" />
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' />
      <link rel='stylesheet' href='https://getbootstrap.com/docs/4.0/examples/blog/blog.css' />
      <link rel='stylesheet' href='/static/_flex.scss' />
      <link rel="stylesheet" href="/static/style.css" />
    </Head>
    {/*
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    */}
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
    <script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>
    <script src='https://cdn.jsdelivr.net/scrollreveal.js/3.3.1/scrollreveal.min.js'></script>
    <script src="/static/script.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
    <script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>
  </div>
)

export default Layout
