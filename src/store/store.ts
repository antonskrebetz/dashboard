import { makeAutoObservable } from "mobx";
import { activeTabMap } from '../helpers/constants';
import { mobileDevicesData } from "../data/data";
import { IMobileDevicesData } from "../interfaces/interfaces";

class Store {
    activeTab: string = activeTabMap.USERS
    mobilesData: IMobileDevicesData[] = mobileDevicesData;

    constructor() {
        makeAutoObservable(this);
    }

    onClickItemMenu(tab: string) {
        this.activeTab = tab;
    }

    onDeleteMobileClick(id: number) {
        this.mobilesData = this.mobilesData.filter(mobile => mobile.id !== id);
    }
}

const store = new Store();
export default store;