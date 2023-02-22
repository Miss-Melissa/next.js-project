import { getFeaturedEvents } from "dummy-data";
import EventList from "@/components/events/event-list";


function Home() {
    const featuredEventes = getFeaturedEvents();

    return (
        <div>
            <h1>The Home Page</h1>
            <EventList items={featuredEventes} />
        </div>
    )
}

export default Home;