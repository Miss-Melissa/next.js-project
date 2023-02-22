import { getFeaturedEvents } from "dummy-data";
import EventList from "@/components/events/event-list";


function Home() {
    const featuredEventes = getFeaturedEvents();

    return (
        <div>
            <EventList items={featuredEventes} />
        </div>
    )
}

export default Home;