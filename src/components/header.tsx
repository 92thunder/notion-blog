import Head from 'next/head'
import Link from 'next/link'

const ogImageUrl = 'https://92thunder.dev/ogp.png'

export default ({ titlePre = '' }) => {
  const title = `${titlePre} | 92thunder blog`
  return (
    <header>
      <Head>
        <title>{title}</title>
        <meta name="description" content="92thunder blog" />
        <meta name="og:title" content={title} />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@92thunder" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <Link href="/">
        <a>
          <img src="/logo.png" className="logo" alt="92thunder-logo" />
          <h1>92thunder's blog</h1>
        </a>
      </Link>
    </header>
  )
}
