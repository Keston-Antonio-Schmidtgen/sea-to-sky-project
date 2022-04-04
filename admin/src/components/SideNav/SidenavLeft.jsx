import React, { useState } from "react";
import {
  MDBSideNav,
  MDBSideNavMenu,
  MDBSideNavItem,
  MDBSideNavLink,
  MDBSideNavCollapse,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function SideNavLeft({ setShowComponent }) {
  const [groupOpen, setGroupOpen] = useState(true);
  const [groupCollapseOpened1, setGroupCollapseOpened1] =
    useState("groupCollapse1");
  const [groupCollapseOpened2, setGroupCollapseOpened2] =
    useState("groupCollapse3");

  const toggleGroupCollapse1 = (value) => {
    value !== groupCollapseOpened1
      ? setGroupCollapseOpened1(value)
      : setGroupCollapseOpened1("");
  };

  const toggleGroupCollapse2 = (value) => {
    value !== groupCollapseOpened2
      ? setGroupCollapseOpened2(value)
      : setGroupCollapseOpened2("");
  };

  return (
    <>
      <MDBSideNav
        isOpen={groupOpen}
        className="sticky-top"
        getOpenState={(e) => setGroupOpen(e)}
      >
        <MDBSideNavMenu>
          <MDBSideNavItem>
            <MDBSideNavLink onClick={() => setShowComponent("home")}>
              <MDBIcon far icon="smile" className="fa-fw me-3" />
              Home
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink
              icon="angle-down"
              shouldBeExpanded={groupCollapseOpened1 === "groupCollapse1"}
              onClick={() => toggleGroupCollapse1("groupCollapse1")}
            >
              <MDBIcon fas icon="grin" className="fa-fw me-3" />
              Posts
            </MDBSideNavLink>
            <MDBSideNavCollapse id="groupCollapse1" show={groupCollapseOpened1}>
              <MDBSideNavLink onClick={() => setShowComponent("allPosts")}>
                All Posts
              </MDBSideNavLink>{" "}
              <Link className="side" to="/addpost">
                {" "}
                Add New
              </Link>
              <MDBSideNavLink>Categories</MDBSideNavLink>
              <MDBSideNavLink>Tags</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink
              icon="angle-down"
              shouldBeExpanded={groupCollapseOpened1 === "groupCollapse2"}
              onClick={() => toggleGroupCollapse1("groupCollapse2")}
            >
              <MDBIcon fas icon="grin" className="fa-fw me-3" />
              Pages
            </MDBSideNavLink>
            <MDBSideNavCollapse id="groupCollapse2" show={groupCollapseOpened1}>
              <MDBSideNavLink onClick={() => setShowComponent("allPages")}>
                All Pages
              </MDBSideNavLink>
              <MDBSideNavLink onClick={() => setShowComponent("addPage")}>
                Add New
              </MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
        </MDBSideNavMenu>

        <MDBSideNavMenu>
          <MDBSideNavItem>
            <MDBSideNavLink onClick={() => setShowComponent("comments")}>
              <MDBIcon far icon="smile" className="fa-fw me-3" />
              Comments
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink
              icon="angle-down"
              shouldBeExpanded={groupCollapseOpened2 === "groupCollapse3"}
              onClick={() => toggleGroupCollapse2("groupCollapse3")}
            >
              <MDBIcon fas icon="grin" className="fa-fw me-3" />
              Users
            </MDBSideNavLink>
            <MDBSideNavCollapse id="groupCollapse3" show={groupCollapseOpened2}>
              <MDBSideNavLink onClick={() => setShowComponent("users")}>
                All Users
              </MDBSideNavLink>
              <MDBSideNavLink onClick={() => setShowComponent("addUser")}>
                Add New
              </MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <hr />
            <MDBSideNavLink
              icon="angle-down"
              shouldBeExpanded={groupCollapseOpened2 === "groupCollapse4"}
              onClick={() => toggleGroupCollapse2("groupCollapse4")}
            >
              <MDBIcon fas icon="grin" className="fa-fw me-3" />
              Category 4
            </MDBSideNavLink>
            <MDBSideNavCollapse id="groupCollapse4" show={groupCollapseOpened2}>
              <Link to="/addpost">Link 9</Link>
              <MDBSideNavLink>
                {" "}
                <Link style={{ color: "black" }} to="/addpost">
                  Link 9
                </Link>
              </MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
        </MDBSideNavMenu>
      </MDBSideNav>

      <div style={{ padding: "20px" }} className="text-center">
        <MDBBtn onClick={() => setGroupOpen(!groupOpen)}>
          <MDBIcon fas icon="bars" />
        </MDBBtn>
      </div>
    </>
  );
}
