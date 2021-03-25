import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { FaCloud, FaMicrochip } from 'react-icons/fa';

const Industries = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs className="nav-fill">
        <NavItem>
          <NavLink
            className={activeTab === '1' && "active"}
            onClick={() => { toggle('1'); }}
          >
            <FaCloud className="me-2 text-muted" /> For Organizations adopting IoT
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === '2' && "active"}
            onClick={() => { toggle('2'); }}
          >
            <FaMicrochip className="me-2 text-muted" /> For Hardware Manufacturers
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="shadow-sm">
        <TabPane tabId="1" className="bg-white border border-top-0">
          <p className="p-2 p-md-4 lead">
            Building IoT solutions is challenging, especially if you want to execute in a faster
            than ever changing environment. Our technology helps you to focus on your core product,
            while we boost your productivity by unburdening you from recurring and work-intensive tasks.
          </p>
        </TabPane>
        <TabPane tabId="2" className="bg-white border border-top-0 ">
          <p className="p-2 p-md-4 lead">
            You are great in manufacturing hardware, but struggle to provide and implement
            high quality and developer-friendly software in multiple languages,
          which is crucial for broad adoption of your hardware?<br />
          We are happy to support you.
          </p>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Industries