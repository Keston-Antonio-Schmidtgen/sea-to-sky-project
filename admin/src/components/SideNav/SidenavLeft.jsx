import React, { useState, useEffect, useRef, useContext } from "react";
import { WordContext } from "../context";
import {
  MDBSideNav,
  MDBSideNavMenu,
  MDBSideNavItem,
  MDBSideNavLink,
  MDBSideNavCollapse,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

import Tooltip from "@mui/material/Tooltip";

import { Link, useHistory } from "react-router-dom";

export default function SideNavLeft({ setShowComponent, refer }) {
  /* button expand-------------- */
  const [groupOpen, setGroupOpen] = useState(true);
  // admin context
  const { currentAdmin, setCurrentAdmin } = useContext(WordContext);
  /* ------------------------ */
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

  const history = useHistory();
  const handleLogout = () => {
    setCurrentAdmin(null);

    history.push("/login");
  };

  return (
    <div>
      <MDBSideNav
        backdrop={false}
        isOpen={groupOpen}
        className="text-white"
        mode="push"
        contentRef={container}
        getOpenState={(e) => setGroupOpen(e)}
        style={{ background: "#222527" }}
      >
        <MDBSideNavMenu className="navbar-expand-lg">
          <MDBSideNavItem>
            <MDBSideNavLink onClick={() => setShowComponent("home")}>
              <MDBIcon fas icon="home" className="fa-fw me-3" />
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
              <MDBIcon fas icon="pencil-alt" className="fa-fw me-3" />
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
              <MDBIcon fas icon="leaf" className="fa-fw me-3" />
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
              <MDBIcon far icon="comment" className="fa-fw me-3" />
              Comments
            </MDBSideNavLink>
          </MDBSideNavItem>
          {/* users */}
          <Tooltip title="Upcoming Feature" placement="right">
            <MDBSideNavItem>
              <MDBSideNavLink
                icon="angle-right"
                // shouldBeExpanded={groupCollapseOpened2 === "groupCollapse3"}
                // onClick={() => toggleGroupCollapse2("groupCollapse3")}
                className="disabledLink"
              >
                <MDBIcon fas icon="user-alt" className="fa-fw me-3" />
                Users
              </MDBSideNavLink>
              <MDBSideNavCollapse
                // id="groupCollapse3"
                show={groupCollapseOpened2}
              >
                <MDBSideNavLink
                // onClick={() => setShowComponent("users")}
                >
                  All Users
                </MDBSideNavLink>
                <MDBSideNavLink
                // onClick={() => setShowComponent("addUser")}
                >
                  Add New
                </MDBSideNavLink>
              </MDBSideNavCollapse>
            </MDBSideNavItem>
          </Tooltip>

          {/* Media */}
          <MDBSideNavItem>
            <MDBSideNavLink onClick={() => setShowComponent("media")}>
              <MDBIcon fas icon="image" className="fa-fw me-3" />
              Media
            </MDBSideNavLink>
          </MDBSideNavItem>
        </MDBSideNavMenu>
        <div
          style={{ padding: "20px" }}
          className="navExpandButton "
          ref={refer}
        >
          <MDBBtn
            className="text-white bg-dark removeBorder"
            onClick={() => setGroupOpen(!groupOpen)}
          >
            {!groupOpen ? (
              <MDBIcon
                fas
                icon="angle-double-right"
                className="bg-dark text-white "
              />
            ) : (
              <MDBIcon
                fas
                icon="angle-double-left"
                className="bg-dark text-white "
              />
            )}
          </MDBBtn>
        </div>
        <MDBBtn
          className="rounded-0 mx-auto d-block bottom-0 position-absolute start-0 end-0 logoutButton removeBorder"
          onClick={handleLogout}
        >
          LogOut
        </MDBBtn>
      </MDBSideNav>
    </div>
  );
}
