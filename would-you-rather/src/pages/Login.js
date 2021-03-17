import React, {useState} from 'react';
import {connect} from "react-redux";

import {login} from "../actions/authentication";


const Login = ({users, authenticate}) => {
	const [selectedUser, setSelectedUser] = useState('');

	const handleUserSelection = (e) => {
		setSelectedUser(e.target.value);
		authenticate(e.target.value);
	}

	return (
		<div className="page-wrap d-flex flex-row align-items-center">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6 text-center">
						<h3>Welcome to Would You Rather!</h3>
						<h5>Please sign in to continue</h5>
						<label htmlFor="inputState" className="form-label">Please Select User</label>
						{
							users &&
							<select id="inputState" value={selectedUser} className="form-select" onChange={handleUserSelection}>
								<option value="" disabled>-----------</option>
								{
									users.map(user => (
										<option key={user.id} value={user.id}> {user.name} </option>
									))
								}
							</select>
						}
					</div>
				</div>
			</div>
		</div>
	);
}

function mapStateToProps ({ users }) {
	const users_map = users && Object.values(users);
    return {
        users: users_map
    }
}

function mapDispatchToProps(dispatch) {
  return {
    authenticate: (id) => {
      dispatch(login(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
