
import { ComponentType, ReactNode } from "react"
import Screen from "../screens"

type screenType = {
    name: string,
    component: ComponentType
}
type routesType = {
    home: screenType,
    detail: screenType,
    news: screenType,
    account: screenType,
    notifikasi: screenType
}
let routes: routesType = {
    home: {
        name: 'Home',
        component: Screen.HomeScreen
    },
    detail: {
        name: 'Detail',
        component: Screen.DetailScreen
    },
    news: {
        name: 'News',
        component: Screen.NewsScreen
    },
    account: {
        name: 'Account',
        component: Screen.AccountScreen
    },
    notifikasi: {
        name: 'Notifikasi',
        component: Screen.NotifikasiScreen
    },
}

export default routes