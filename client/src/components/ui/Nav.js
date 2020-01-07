import React from 'react';
import { Query } from "react-apollo";
import { IS_LOGGED_IN } from '../../graphql/queries';
import { ApolloConsumer } from "react-apollo";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Nav = props => {
  return (
    <ApolloConsumer>
      {client => (
        <Query query={IS_LOGGED_IN}>
          {({ data }) => {
            if (data.isLoggedIn) {
              return (
                <div>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      localStorage.removeItem("auth-token");
                      client.writeData({ data: { isLoggedIn: false } });
                      props.history.push("/");
                    }}
                  >
                    Logout
                </button>
                  <Link className="btn btn-sm btn-warning mr-2" to="/">Home</Link>
                  <Link className="btn btn-sm btn-warning mr-2" to="/products/new">New Product</Link>
                </div>
              );
            } else {
              return (
                <div>
                  <Link className="btn btn-sm btn-warning mr-2" to="/">Home</Link>
                  <Link className="btn btn-sm btn-warning mr-2" to="/register">Register</Link>
                  <Link className="btn btn-sm btn-warning mr-2" to="/login">Login</Link>
                </div>
              );
            }
          }}
        </Query>
      )}
    </ApolloConsumer>
  );
};

export default withRouter(Nav);