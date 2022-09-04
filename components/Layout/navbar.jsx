/* eslint-disable @next/next/no-img-element */
import { deleteCookie, getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import verifyToken from "../../utils/verifyToken";

const Navbars = ({ cartPending = 0 }) => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  let [loggedIn, setLoggedIn] = useState(false);

  const logoutClick = (e) => {
    e.preventDefault();
    deleteCookie("Login");
    deleteCookie("token");
    deleteCookie("userid");
    deleteCookie("refreshtoken");
    deleteCookie("Cart");
    deleteCookie("user_name");
    deleteCookie("user_role");
    router.replace("/account/login?returnUrl=/");
  };

  useEffect(() => {
    const data = verifyToken();

    setLoggedIn(data.verified);
    console.log("Status:" + loggedIn);

    setUserName(getCookie("user_name"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="header fixed-top" id="nav_main">
      <Navbar bg="deep-purple-900 pt-0 pb-0" variant="dark" fixed="top" collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/logo/logo.png" style={{ height: 45, width: 100, backgroundColor: "white", borderRadius: 4 }} alt="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="d-flex d-md-none flex-row">
            <NavDropdown title={<i className="fa fa-user-alt"></i> + userName} id="collasible-nav-dropdown-1" active>
              {!loggedIn ? (
                <Link href={"/account/login?returnUrl=" + router.pathname} passHref>
                  <NavDropdown.Item>Login</NavDropdown.Item>
                </Link>
              ) : null}
              {loggedIn ? (
                <Link href="/account" passHref>
                  <NavDropdown.Item>My Account</NavDropdown.Item>
                </Link>
              ) : null}
              {loggedIn ? <NavDropdown.Item onClick={(e) => logoutClick(e)}>Logout</NavDropdown.Item> : null}
            </NavDropdown>
            {loggedIn ? (
              <>
                <Link href="/wishlist" passHref>
                  <Nav.Link eventKey={2} href="#memes" className="px-2" active>
                    <i className="fa-regular fa-heart"></i>
                  </Nav.Link>
                </Link>
                <Link href="/cart" passHref>
                  <Nav.Link eventKey={3} href="#memes" className="px-2  position-relative" active>
                    <i className="fa fa-cart-plus"></i>
                    {cartPending ? (
                      <Badge bg="success" className="position-absolute top-0 badge bg-white text-deep-purple-900 badge-small">
                        {cartPending}
                      </Badge>
                    ) : null}
                  </Nav.Link>
                </Link>
              </>
            ) : null}
          </Nav>
          <Navbar.Collapse id="responsive-navbar-nav" className="align-items-center flex-grow-0">
            <Nav className="me-auto">
              <Link href="/" passHref>
                <Nav.Link active={router.pathname === "/" ? true : false}>Home</Nav.Link>
              </Link>
              <Link href="/category" passHref>
                <Nav.Link active={router.pathname === "/category" ? true : false}>Shop by Category</Nav.Link>
              </Link>
              <Link href="/sellers" passHref>
                <Nav.Link active={router.pathname === "/sellers" ? true : false}>Our Sellers</Nav.Link>
              </Link>

              <NavDropdown title="Virtual-shop" id="collasible-nav-dropdown" align="end">
                <Link href="/virtual-shop/mobile-shop" passHref>
                  <NavDropdown.Item>
                    <i className="fa-solid fa-mobile me-2"></i>Mobile Shop
                  </NavDropdown.Item>
                </Link>

                <Link href="/virtual-shop/car-shop" passHref>
                  <NavDropdown.Item>
                    <i className="fa-solid fa-bus me-2"></i>Car Shop
                  </NavDropdown.Item>
                </Link>

                <Link href="/virtual-shop/electronic-shop" passHref>
                  <NavDropdown.Item>
                    <i className="fa-solid fa-laptop me-2"></i>Electronic Shop
                  </NavDropdown.Item>
                </Link>

                <Link href="/virtual-shop/furniture-shop" passHref>
                  <NavDropdown.Item>
                    <i className="fa-solid fa-chair me-2"></i>Furniture Shop
                  </NavDropdown.Item>
                </Link>

                <Link href="/virtual-shop/shoe-shop" passHref>
                  <NavDropdown.Item>
                    <i className="fa-solid fa-shoe-prints me-2"></i>Shoe Shop
                  </NavDropdown.Item>
                </Link>

                <Link href="/virtual-shop/fashion-shop" passHref>
                  <NavDropdown.Item>
                    <i className="fa-solid fa-vest-patches me-2"></i>Fashion Shop
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>

              {/*
                <Link href="/virtual-shop/mobile-shop" passHref>
                <Nav.Link active={router.pathname === "/virtual-shop/mobile-shop" ? true : false}>Virual Mobile shop</Nav.Link>
              </Link>
                    */}

              <Link href="/contact" passHref>
                <Nav.Link active={router.pathname === "/contact" ? true : false}>Contact Us</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ml-auto d-md-flex d-none flex-row">
            {!loggedIn ? (
              <Link href="/account/login" passHref>
                <Nav.Link eventKey={0} href="#memes" className="px-2" active>
                  Login
                </Nav.Link>
              </Link>
            ) : null}
            {loggedIn ? (
              <>
                <NavDropdown title={<i className="fa fa-user-alt"></i>} id="collasible-nav-dropdown" active align="end">
                  <Link href="/account" passHref>
                    <NavDropdown.Item>
                      <i className="fa-solid fa-circle-user me-2"></i>My Account
                    </NavDropdown.Item>
                  </Link>

                  <NavDropdown.Item onClick={(e) => logoutClick(e)}>
                    <i className="fa-solid fa-right-from-bracket me-2"></i>Logout
                  </NavDropdown.Item>
                </NavDropdown>
                <Link href="/wishlist" passHref>
                  <Nav.Link eventKey={2} href="#memes" className="px-2" active>
                    <i className="fa-regular fa-heart"></i>
                  </Nav.Link>
                </Link>
                <Link href="/cart" passHref>
                  <Nav.Link eventKey={3} href="#memes" className="px-2  position-relative" active>
                    <i className="fa fa-cart-plus"></i>
                    {cartPending ? (
                      <Badge bg="success" className="position-absolute top-0 badge bg-white text-deep-purple-900 badge-small">
                        {cartPending}
                      </Badge>
                    ) : null}
                  </Nav.Link>
                </Link>
              </>
            ) : null}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
