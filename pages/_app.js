import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
  <title>My page</title>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
