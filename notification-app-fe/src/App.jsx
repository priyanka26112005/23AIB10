import { NotificationsPage } from "./pages/NotificationsPage";
import { NotificationFilter } from "./components/NotificationFilter";
import { useNotifications } from "./hooks/useNotifications";
import { NotificationCard } from "./components/NotificationCard"
import "./App.css"
export default function App() {
  return (
    <div>
    <NotificationsPage/>
    <NotificationCard/>
    <NotificationFilter/>
    <useNotifications/>
    </div>

  );
}