export default function Home() {
  return (
    <>
      <section>
        <p>RentVision</p>

        <h1>Find a place you can trust.</h1>

        <p>
          Discover rental properties with location-aware search,
          verified listings, and AI-powered lease insights.
        </p>

        <div>
          <a href="/properties">Explore properties</a>
          <a href="/map">Search on map</a>
        </div>
      </section>

      <section>
        <h2>Why RentVision?</h2>

        <div>
          <article>
            <h3>Discover</h3>
            <p>
              Search rental properties using location, price, bedrooms,
              property type, and amenities.
            </p>
          </article>

          <article>
            <h3>Trust</h3>
            <p>
              Identify suspicious or duplicate property images and
              surface listings requiring verification.
            </p>
          </article>

          <article>
            <h3>Understand</h3>
            <p>
              Ask questions about lease documents and receive
              evidence-grounded answers with source references.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
