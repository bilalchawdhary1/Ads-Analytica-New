import React from 'react'

export default function MapInner() {
  return (
    <>
      {/* Map Section*/}
      <section className="map-section">
        {/* <iframe  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed" /> */}
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.755560690723!2d73.1759756744205!3d31.420860152053894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392267622d447ef5%3A0x587be9cc643bcc61!2sAds%20Analytica%20(Pvt)%20Ltd.!5e0!3m2!1sen!2s!4v1729161940461!5m2!1sen!2s"></iframe>
      </section>
      {/*End Map Section*/}

    </>
  )
}
