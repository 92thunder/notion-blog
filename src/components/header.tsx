import Head from 'next/head'

const ogImageUrl = 'https://92thunder.dev/ogp.png'

export default ({ titlePre = '' }) => {
  return (
    <header>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} My Notion Blog</title>
        <meta name="description" content="92thunder blog" />
        <meta name="og:title" content="92thunder blog" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@92thunder" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
    </header>
  )
}
