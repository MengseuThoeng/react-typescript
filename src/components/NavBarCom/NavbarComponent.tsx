import { Navbar } from 'flowbite-react';
import RekiLogo from '../../assets/Reki.png'; // Import the image

function NavBar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={RekiLogo} className="mr-3 h-6 sm:h-9" alt="Logo" /> {/* Use imported image */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">SEU SHOPPING</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
