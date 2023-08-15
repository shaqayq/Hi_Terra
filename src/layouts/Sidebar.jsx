import React, { useState } from "react";
import profile from "../images/profile.png";
import "../style/layout/sidebar.css";
import {FiSettings} from 'react-icons/fi'
import { NavLink } from "react-router-dom";
import {AiOutlineLogout} from "react-icons/ai";
export default function Sidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
   
  };
  return (
    <>
       <div className="w-1/5">
        <div className="fixed top-0 h-screen overflow-y-auto border-r-2 py-10">
          <div className="MuiBox-root css-11m5ytu">
            <div className={`pro-sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
              <div className="pro-sidebar-inner">
                <div className="pro-sidebar-layout">
                  <nav
                    className={`pro-menu shaped square inner-submenu-arrows ${
                      isSidebarCollapsed ? 'collapsed' : ''
                    }`}
                  >
                    <ul>
                    <li className="pro-menu-item" id="hum-btn">
                        <div
                          className="pro-inner-item"
                          tabIndex="0"
                          role="button"
                        >
                          <span className="pro-item-content">
                            <div className="MuiBox-root css-1m3bo6">
                              <button
                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
                                tabIndex="0"
                                type="button"
                                onClick={toggleSidebar}
                              >
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="MenuOutlinedIcon"
                                >
                                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                                </svg>
                                <span className="MuiTouchRipple-root css-w0pj6f"></span>
                              </button>
                            </div>
                          </span>
                        </div>
                    </li>
                      <div
                       className="MuiBox-root css-d2znx6"
                       firstchild="1" popperarrow="0"
                      >
                        <div className="MuiBox-root css-1n2mv2k">
                          <img
                            alt="profile-user"
                            width="100px"
                            height="100px"
                            src={profile}
                            id="profile"
                         
                          />
                        </div>
                        <div className={`MuiBox-root css-xi606m1 ${isSidebarCollapsed ? 'remove' : ''}`} >
                          <h5 className="MuiTypography-root MuiTypography-h5 css-1vk6l16">
                            Tom Donald
                          </h5>
                        </div>
                      </div>
                      <div
                        className="MuiBox-root css-1l8icbj"
                        firstchild="1"
                        popperarrow="0"
                      >
                        <li className="pro-menu-item active" id="item">
                          <div
                            className="pro-inner-item"
                            tabIndex="0"
                            role="button"
                          >
                            <span className="pro-icon-wrapper">
                              <span className="pro-icon">
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="HomeOutlinedIcon"
                                >
                                  <path d="m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z"></path>
                                </svg>
                              </span>
                            </span>
                            <span className="pro-item-content">
                              <p className="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                               <NavLink to='/home'> Dashboard</NavLink>
                              </p>
                              <a href="#/dashboard"></a>
                            </span>
                          </div>
                        </li>
                        <li className="pro-menu-item" id="item">
                          <div
                            className="pro-inner-item"
                            tabIndex="0"
                            role="button"
                          >
                            <span className="pro-icon-wrapper">
                              <span className="pro-icon">
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="PeopleOutlinedIcon"
                                >
                                  <path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z"></path>
                                </svg>
                              </span>
                            </span>
                            <span className="pro-item-content">
                              <p className="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                              <NavLink to='/contact-list'> contact List</NavLink>
                              </p>
                              <a href="#/dashboard/team"></a>
                            </span>
                          </div>
                        </li>
                        <li className="pro-menu-item" id="item">
                          <div
                            className="pro-inner-item"
                            tabIndex="0"
                            role="button"
                          >
                            <span className="pro-icon-wrapper">
                              <span className="pro-icon">
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="TimelineOutlinedIcon"
                                >
                                  <path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path>
                                </svg>
                              </span>
                            </span>
                            <span className="pro-item-content">
                              <p className="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                                Analytics
                              </p>
                              <a href="#/dashboard/data-viewer"></a>
                            </span>
                          </div>
                        </li>
                        <li className="pro-menu-item" id="item">
                          <div
                            className="pro-inner-item"
                            tabIndex="0"
                            role="button"
                          >
                            <span className="pro-icon-wrapper">
                              <span className="pro-icon">
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="InventoryOutlinedIcon"
                                >
                                  <path d="M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"></path>
                                  <path d="M21 11.5 15.51 17l-3.01-3-1.5 1.5 4.51 4.5 6.99-7z"></path>
                                </svg>
                              </span>
                            </span>
                            <span className="pro-item-content">
                              <p className="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                                Task Managmet
                              </p>
                              <a href="#/dashboard/inventory"></a>
                            </span>
                          </div>
                        </li>
                        <li className="pro-menu-item" id="item">
                          <div
                            className="pro-inner-item"
                            tabIndex="0"
                            role="button"
                          >
                            <span className="pro-icon-wrapper">
                              <span className="pro-icon">
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="MapOutlinedIcon"
                                >
                                  <path d="m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99 3-1.01v11.7l-3 1.16V6.46zm14 11.08-3 1.01V6.86l3-1.16v11.84z"></path>
                                </svg>
                              </span>
                            </span>
                            <span className="pro-item-content">
                              <p className="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                                Product
                              </p>
                              <a href="#/dashboard/geography"></a>
                            </span>
                          </div>
                        </li>
                        <li className="pro-menu-item" id="item">
                          <div
                            className="pro-inner-item"
                            tabIndex="0"
                            role="button"
                          >
                            <span className="pro-icon-wrapper">
                              <span className="pro-icon">
                               
                                <FiSettings/>

                              </span>
                            </span>
                            <span className="pro-item-content">
                              <p className="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                               Setting
                              </p>
                              <a href="#/dashboard/inventory"></a>
                            </span>
                          </div>
                        </li>
                        <li className="pro-menu-item" id="item">
                          <div
                            className="pro-inner-item"
                            tabIndex="0"
                            role="button"
                          >
                            <span className="pro-icon-wrapper">
                              <span className="pro-icon">
                              <AiOutlineLogout/>
                              </span>
                            </span>
                            <span className="pro-item-content">
                              <p className="MuiTypography-root MuiTypography-body1 css-9l3uo3">
                               <NavLink to='/login' >Logout</NavLink> 
                              </p>
                            
                            </span>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </nav>
                </div>
              </div>
              <div
                className="overlay"
                role="button"
                tabIndex="0"
                aria-label="overlay"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
