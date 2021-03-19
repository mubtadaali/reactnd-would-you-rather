import {connect} from "react-redux";
import React, {useEffect, Fragment} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import DashBoard from "./pages/Dashboard";
import LeaderBoard from "./pages/LeaderBoard";
import NewQuestion from "./pages/NewQuestion";
import {handleInitialData} from "./actions/users";
import QuestionDetail from "./pages/QuestionDetail";

const App = (props) => {

	useEffect(() => {
		props.handleInitialData()
	})

	return (
		<div>
			<Router>
					{
						props.loggedInUser?
							<Switch>
								<Fragment>
									<NavBar user={props.loggedInUser} />
									<Route path='/' exact component={DashBoard}/>
									<Route path='/add' component={NewQuestion}/>
									<Route path='/leaderboard' exact component={LeaderBoard}/>
									<Route path="/questions/:id" component={QuestionDetail} />
								</Fragment>
								<Route path="*" component={NotFound}/>
							</Switch>:
							<Switch>
								<Route path='/' exact component={Login} />
								<Route path="*" component={NotFound} />
							</Switch>
					}
			</Router>
		</div>
	);
}

function mapStateToProps({authedUserId, users}) {
  const loggedInUser = users[authedUserId];
	return {
		loggedInUser
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleInitialData: () => {
			dispatch(handleInitialData())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
