export default function Progress({Amount, dono}) {
  let total = dono.reduce ((intital, next) => intital + next.amount,0)

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${total}</span> of
        <span className="secondary"> ${Amount}</span>
      </h2>
    </section>
  );
}
