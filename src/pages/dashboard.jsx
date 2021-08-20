import { RouterBrowser as Router, Switch, Route } from 'react-router-dom';
import { useAuth, userContext } from '../lib/context';

const Dashboard = () => {

    return (
        <div>

            <h3>Welcome </h3>
                <div className="row">What would you like to work on?</div>
        </div>
    )
}

export default Dashboard