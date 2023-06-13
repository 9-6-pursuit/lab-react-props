export function ExpandLi (props) {
  const { name, amount, message} = props
  return (
  <li>
  <span> {name} donated ${amount} </span> {message}
  </li>
  )
}

export default function RecentDonations(props) 
{
  const {list} = props
  const {name,amount,message} = props
  return <section>
  <h2>Recent Donations</h2>
  <ul>
    {list}
  </ul>
</section>;
}
