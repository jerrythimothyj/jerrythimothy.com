import React from 'react'

const UserVisits: React.FC = () => {
  setTimeout(() => {
    const placeForGlobe = document.querySelector('#placeForGlobe')
    const script = document.createElement('script')

    script.src =
      '//rf.revolvermaps.com/0/0/8.js?i=53j0oihh6q8&amp;m=0&amp;c=ff0000&amp;cr1=ffffff&amp;f=arial&amp;l=33'
    script.async = true

    placeForGlobe.innerHTML = ''
    placeForGlobe.appendChild(script)
  })
  return <div id="placeForGlobe" />
}

export default UserVisits
