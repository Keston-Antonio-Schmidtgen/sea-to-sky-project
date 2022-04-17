import React, { useState, useEffect, useRef } from "react";
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

export default function SideNavLeft({ setShowComponent, refer }) {
  const [groupOpen, setGroupOpen] = useState(true);
  const [groupCollapseOpened1, setGroupCollapseOpened1] =
    useState("groupCollapse1");
  const [groupCollapseOpened2, setGroupCollapseOpened2] =
    useState("groupCollapse3");
    const [container, setContainer] = useState();

 

  useEffect(() => {
    setContainer(refer?.current);
  }, []);

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
        absolute
        className="bg-dark text-white "
        mode="push"
        contentRef={container}
        getOpenState={(e) => setGroupOpen(e)}
      >
        <MDBSideNavMenu className="navbar-expand-lg">
          <MDBSideNavItem>
            <MDBSideNavLink onClick={() => setShowComponent("home")}>
              <MDBIcon far icon="smile" className="fa-fw me-3" />
              Home
            </MDBSideNavLink>
          </MDBSideNavItem>

          {/* Posts */}
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
              <MDBSideNavLink onClick={() => setShowComponent("addPost")}>
                Add New
              </MDBSideNavLink>{" "}
              <MDBSideNavLink onClick={() => setShowComponent("categories")}>
                Categories
              </MDBSideNavLink>
              <MDBSideNavLink onClick={() => setShowComponent("tags")}>
                Tags
              </MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>


          {/* Pages */}
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
          {/* users */}
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

          
          {/* Media */}
          <MDBSideNavItem>
            <MDBSideNavLink onClick={() => setShowComponent("media")}>
              <MDBIcon far icon="smile" className="fa-fw me-3" />
              Media
            </MDBSideNavLink>
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
