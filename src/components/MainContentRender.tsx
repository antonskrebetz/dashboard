import { observer } from "mobx-react-lite";
import activeTabStore from "../store/store";

import { UsersDashboardTable } from "./UsersDashboardTable";
import { CarsDashboardTable } from "./CarsDashboardTable";
import { MobilesDashboardTable } from "./MobilesDashboardTable";

export const MainContentRender = observer(() => {
    switch (activeTabStore.activeTab) {
        case "users":
            return <UsersDashboardTable />;
        case "cars":
            return <CarsDashboardTable />;
        case "mobiles":
            return <MobilesDashboardTable />;
        default:
            return <UsersDashboardTable />;
    }
});
