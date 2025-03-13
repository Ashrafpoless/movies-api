
import "./Footer.css"
const Footer = () => {
    const today = new Date();
  return (
    <footer>
        <p>  &copy; {today.getFullYear()} Ashraf Poless.   <span>All Rights Reserved</span> </p>
            <ul >
                <li>
                    <a target='_blank' href='https://github.com/Ashrafpoless'>GItHub</a>
                </li>
                <li>
                    <a target='_blank' href='https://www.linkedin.com/in/ashraf-poless-034349317/'>LinkedIn</a>
                </li>
                <li>
                    <a target='_blank' href='https://ashrafpoless.vercel.app'>Portfolio</a>
                </li>
            </ul>
    </footer>
  )
}

export default Footer