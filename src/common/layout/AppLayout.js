import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./layoutStyles.css";
import Sidebar from "./Sidebar";
import {
  Avatar,
  Button,
  Popover,
  useId,
  useRestoreFocusTarget,
  PopoverSurface,
} from "@fluentui/react-components";
import { customeCardStyles } from "../CustomeStyles";

function AppLayout() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const headerId = useId();
  const buttonRef = React.useRef(null);
  const positioningRef = React.useRef(null);
  const styles = customeCardStyles();
  const restoreFocusTargetAttribute = useRestoreFocusTarget();

  useEffect(() => {
    if (buttonRef.current) {
      positioningRef.current?.setTarget(buttonRef.current);
    }
  }, [buttonRef, positioningRef]);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="ms-Grid">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2 sideBar">
          <Sidebar />
          <div className="user-info">
            <div>
              <Avatar
                {...restoreFocusTargetAttribute}
                ref={buttonRef}
                onClick={() => setOpen((s) => !s)}
                style={{ cursor: "pointer" }}
                size={56}
                name="Katri Athokas"
                image={{
                  src: "https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                margin: ".5em 0",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <h4>Katri Athokas</h4>
                <p>Administrator</p>
              </div>
            </div>
            <Popover
              onOpenChange={(_, data) => setOpen(data.open)}
              trapFocus
              open={open}
              positioning={{ positioningRef }}
            >
              <PopoverSurface aria-labelledby={headerId}>
                <div>
                  <h3 id={headerId} className={styles.contentHeader}>
                    User profile
                  </h3>

                  <div>This is some user information...</div>
                </div>

                <div>
                  <Button>Settings</Button>
                  <Button onClick={handleLogout}>Logout</Button>
                </div>
              </PopoverSurface>
            </Popover>
          </div>
        </div>
        <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10 outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
