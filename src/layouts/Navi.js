import React from "react";
import "../styles/Navi.scss";
import { Button, Container, Dropdown, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu size="tiny" inverted fixed="top">
        <Container>
          <Menu.Item name="Home" />
          <Menu.Item name="Job Postings" />
          <Menu.Item name="Job Positions" />
          <Menu.Item name="Cities" />
          <Menu.Item name="Employers" />

          <Menu.Menu position="right">
            <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
