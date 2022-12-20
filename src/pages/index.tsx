import { NextPage } from "next";

import GridLayout from "@Components/dashboard/dashboardLayout/GridLayout";
import Header from "@Components/dashboard/header/Header";
import Menu from "@Components/dashboard/menu/Menu";

const Dashboard: NextPage = () => {
    return (
        <>
            <div>
                <Header />
                <div className="flex flex-row">
                    <Menu />
                    <GridLayout />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
