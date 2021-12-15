import Profile from "../../components/Profile";
import { useGetScreenBreakPoint } from "../../hooks/useGetScreenBreakPoint";
import { users } from "../../utils/DummyProductData";

const Dashboard = () => {
    const user = users[0]
    const screen = useGetScreenBreakPoint()
    return (
        <div className="max-w-6xl mx-auto flex gap-x-2 justify-between py-10">
            <div className="w-1/3">A component here</div>
            <div className="w-1 h-100 bg-gray-300 rounded"></div>
            <div className="w-1/3">Another component here</div>
            <div className="hidden lg:block w-1 h-100 bg-gray-300 rounded"></div>
            { !screen.match(/^(sm|md)$/) && <div className="w-1/3 px-10"><Profile className="" user={user} dashboard={'seller'}/></div> }
        </div>
    )
}

export default Dashboard
