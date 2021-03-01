import * as React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
import { PageHero } from '../components/Hero'

// markup
const NotFoundPage = () => {
  return (
    <main>
      <SEO title="404 Page Not Found"></SEO>
      <title>Not Found</title>
      <PageHero title="404 Page Not Found" />

      <h1>Page not found</h1>
      <p>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
