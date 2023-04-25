import RecentDonations from "./RecentDonations";

export default function Progress({raised}) {
  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary"> ${raised}</span> of
    <span className="secondary"> $1000</span>
  </h2>
</section>
  )
}
