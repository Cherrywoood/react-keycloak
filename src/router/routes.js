import Home from "../pages/Home/Home";
import SecuredPage from "../pages/SecuredPage/SecuredPage";
import Registration from "../pages/Registration/Registration";

export const privateRoutes = [
    {path: '/', component: <Home/>, exact: true},
    {path: '/secured', component: <SecuredPage/>, exact: true}
]

export const publicRoutes = [
    {path: '/', component: <Home/>, exact: true},
    {path: '/reg', component: <Registration/>, exact: true}
]