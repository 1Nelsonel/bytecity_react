import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Navbar light expand="lg sm md">
        <NavbarBrand href="/">
          <img src="Logo.svg" alt="Logo" width="200" />
        </NavbarBrand>
        <Nav className="p-5 font-weight-bold" navbar>
          <NavItem>
            <NavLink className="font-weight-bold" href="#">ABOUT US</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">WORK</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
            SERVICES
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Service 1</DropdownItem>
              <DropdownItem>Service 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Service 3</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="#">INDUSTRIES</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">CONTACT US</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">SEARCH</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
