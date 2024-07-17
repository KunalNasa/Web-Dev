import React from 'react'
import Script from 'next/script'
const about = () => {
  return (
    <div>
      <Script>
        {`alert("Welcome to about page");`}
      </Script>
      I am about
    </div>
  )
}

export default about
export const metadata = {
  title: "About Us",
  description: "Know something about us",
};
