import Head from "../../components/Head";
import JobList from "../../components/JobList";

const Jobs = () => (
    <div id="work" className="page">
        <Head
            title={'Jobs - Alexandre Correia'}
            description={'Jobs'}
        />
        <JobList />
    </div>
);

export default Jobs;
