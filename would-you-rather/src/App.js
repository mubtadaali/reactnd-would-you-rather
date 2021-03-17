import React, {useEffect, Fragment} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import DashBoard from "./pages/Dashboard";
import LeaderBoard from "./pages/LeaderBoard";
import NewQuestion from "./pages/NewQuestion";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import {handleInitialData} from "./actions/users";
import {connect} from "react-redux";
import NavBar from "./components/NavBar";
import QuestionDetail from "./pages/QuestionDetail";

const App = (props) => {
	useEffect(() => {
		props.handleInitialData()
	})

	return (
		<div>
			<Router>
				<Switch>
					{
						props.loggedInUser?
						<Fragment>
		          <NavBar user={props.loggedInUser} />
							<Route path='/' exact component={DashBoard}/>
							<Route path='/new-question' component={NewQuestion}/>
							<Route path='/leader-board' exact component={LeaderBoard}/>
							<Route path="/questions/:id" component={QuestionDetail} />
						</Fragment>:
							<Fragment>
								<Route path='/' exact component={Login}/>
								<Redirect to='/' />
							</Fragment>
					}
				<Route component={NotFound}/>
				</Switch>
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
