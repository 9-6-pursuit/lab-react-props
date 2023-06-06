export default function Progress({donations, targetAmount}) {
    let total = 0
    for (let donation of donations){
        total = (donation.amount + total)
    }
    return (
        <section className="progress">
            <h2>
            Raised <span className="secondary">${total}</span> of<span className="secondary"> ${targetAmount}</span>
            </h2>
        </section>
    )
}

// ${donations.map((donation)=>{ return (total = (donation.amount + total))})}