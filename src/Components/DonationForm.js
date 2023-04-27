/** @format */

export default function DonationForm(props) {
	return (
		<section className="donation">
			<h3>
				You could be donation <span className="secondary"> #{props.next}!</span>
			</h3>
			<form id="donation-form">
				<label htmlFor="name">
					Name
					<input
						id="name"
						name="name"
						type="text"
						placeholder="Your name..."
					/>
				</label>
				<label htmlFor="caption">
					Caption
					<input
						id="caption"
						name="caption"
						type="text"
						placeholder="Add a brief message..."
					/>
				</label>
				<label htmlFor="amount">
					Amount
					<input
						id="amount"
						name="amount"
						type="number"
						placeholder="0"
					/>
				</label>
				<button>Donate!</button>
			</form>
		</section>
	);
}
