import {TopBar} from "../../components/TopBar/TopBar.tsx";
import {Sidebar} from "../../components/Sidebar/Sidebar.tsx";

export const DashboardPage = () => {
    return (
        <div className="position-relative d-flex flex-column" style={{height: '100vh'}}>
            <TopBar/>
            <div className="col-12 d-flex h-100">
                <div className="flex-grow-0">
                    <Sidebar/>
                </div>
                <div className="flex-grow-1">
                    <h2 className="p-5">Dashboard</h2>
                </div>
            </div>
        </div>
)
}