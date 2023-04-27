/** @format */

export default function Progress(props) {
	return (
		<div>
			<section className="progress">
				<h2>
					Raised <span className="secondary">${props.amountRaised}</span> of 
					<span className="secondary"> ${props.targetAmount}</span>
				</h2>
			</section>
		</div>
	);
}
