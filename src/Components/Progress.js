import Progress from "./RecentDonations";

function Progress() {
  return (
    <section className="progress">
    <h2>
      Raised <span className="secondary">$0 of #[RecentDonations.length + 1!]</span>
     
      <span className="secondary">$1000</span>
    </h2>
    </section>)
}
export default Progress;