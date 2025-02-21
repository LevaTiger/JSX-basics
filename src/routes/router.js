import { createBrowserRouter, Outlet } from "react-router";
import JsProjects from "../global/pages/js-projects/jsPrpjects";
import Functions from "../global/components/functions/Functions";
import Variables from "../global/components/variables/Variables";
import ArrayMethods from "../global/components/arrayMethods/ArrayMethods";
import Destructuring from "../global/components/destructuring/Destructuring";
import SpreadOperator from "../global/components/spreadOperator/SpreadOperator";
import JsModule from "../global/components/jsModules/JsModule";
import TernaryOperator from "../global/components/ternaryOperator/TernaryOperator";
import Props from "../global/components/props/Props";
import CarsData from "../global/components/props/CarsEasy";
import PropFunction from "../global/components/propFunction/PropFunction";
import Onclick from "../global/components/eventsComp/Onclick";
import Conditionals from "../global/components/conditionals/IfStatement";
import List from "../global/components/lists/List";
import Forms from "../global/components/forms/Forms";
import DefaultLayout from "../global/pages/defaultLayout/DefaultLayout";
import Hooks from "../global/components/hooks1/hooks";


const router = createBrowserRouter([
    {
        path: '/',
        element: 
        <>
            <DefaultLayout />
        </>,
        children:[

            {
                index: true,
                element: <JsProjects />,
            },
            {
                path:'functions',
                element: <Functions />
            },
            {
                path: 'variables',
                element: <Variables />
            },
            {
                path: 'arrays',
                element: <ArrayMethods />
            },
            {
                path: 'destructuring',
                element: <Destructuring />
            },
            {
                path: 'spreadOperator',
                element: <SpreadOperator />
            },
            {
                path: 'JsModule',
                element: <JsModule />
            },
            {
                path: 'ternary-operator',
                element: <TernaryOperator />
            },
            {
                path: 'props',
                element: <Props />,
               
            },
            {
                path:'props/carseasy',
                element: <CarsData />
            },
            {
                path:'propfunction',
                element: <PropFunction />
            },
            {
                path:'onclick',
                element: <Onclick />
            },
            {
                path: 'conditional-rendering',
                element: <Conditionals />
            },
            {
                path:'lists',
                element: <List />
            },
            {
                path:'forms',
                element: <Forms />
            },
            {
                path: 'hooks',
                element: <Hooks />
            }
        ]
    }

])


export default router;