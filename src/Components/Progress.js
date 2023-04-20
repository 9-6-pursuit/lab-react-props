export default function Progress({totalSoFar}) {
  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">${totalSoFar}</span> of
    <span className="secondary"> $1000</span>
  </h2>
</section>
  );
}
