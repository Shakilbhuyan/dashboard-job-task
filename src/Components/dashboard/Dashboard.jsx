import React from 'react';
import { FaBars } from "react-icons/fa";
import DashboardNav from './dashboardNav/DashboardNav';
import Card from './dashboardCard/Card';
import Table from './dashboardTable/Table';
import FirstForm from './forms/firstForm/FirstForm';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <DashboardNav></DashboardNav>
                <Card></Card>
                <Table></Table>
                <FirstForm></FirstForm>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-black text-white">
                    {/* Sidebar content here */}
                    <button className="btn">+ New Item</button>
                    <li tabIndex={0}>
                        <details>
                            <summary><FaBars></FaBars>Dashboard</summary>
                            <ul className="p-2">
                                <li><a>Commerce</a></li>
                                <li><a>Analytics</a></li>
                                <li><a>Crypto</a></li>
                                <li><a>Help Desk</a></li>
                                <li><a>Monitoring</a></li>
                                <li><a>Fitnes</a></li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary><FaBars></FaBars>Applications</summary>
                            <ul className="p-2">
                                <li><a>Commerce</a></li>
                                <li><a>Analytics</a></li>
                                <li><a>Crypto</a></li>
                                <li><a>Help Desk</a></li>
                                <li><a>Monitoring</a></li>
                                <li><a>Fitnes</a></li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary><FaBars></FaBars>Elements</summary>
                            <ul className="p-2">
                                <li><a>Commerce</a></li>
                                <li><a>Analytics</a></li>
                                <li><a>Crypto</a></li>
                                <li><a>Help Desk</a></li>
                                <li><a>Monitoring</a></li>
                                <li><a>Fitnes</a></li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary><FaBars></FaBars>Forms</summary>
                            <ul className="p-2">
                                <li><a>Commerce</a></li>
                                <li><a>Analytics</a></li>
                                <li><a>Crypto</a></li>
                                <li><a>Help Desk</a></li>
                                <li><a>Monitoring</a></li>
                                <li><a>Fitnes</a></li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary><FaBars></FaBars>Plugins</summary>
                            <ul className="p-2">
                                <li><a>Commerce</a></li>
                                <li><a>Analytics</a></li>
                                <li><a>Crypto</a></li>
                                <li><a>Help Desk</a></li>
                                <li><a>Monitoring</a></li>
                                <li><a>Fitnes</a></li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary><FaBars></FaBars>Data Grid</summary>
                            <ul className="p-2">
                                <li><a>Commerce</a></li>
                                <li><a>Analytics</a></li>
                                <li><a>Crypto</a></li>
                                <li><a>Help Desk</a></li>
                                <li><a>Monitoring</a></li>
                                <li><a>Fitnes</a></li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary><FaBars></FaBars>Setting</summary>
                            <ul className="p-2">
                                <li><a>Commerce</a></li>
                                <li><a>Analytics</a></li>
                                <li><a>Crypto</a></li>
                                <li><a>Help Desk</a></li>
                                <li><a>Monitoring</a></li>
                                <li><a>Fitnes</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;