import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery, addAuthorMutation } from '../../queries/queries';

class AddAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    this.props.addAuthorMutation({
      variables: {
        name: this.state.name,
        age: Number(this.state.age),
      },
      refetchQueries: [{ query: getAuthorsQuery }],
    });
  }

  render() {
    return (
      <form id="add-author" onSubmit={this.submitForm}>
        <div className="field">
          <label>Author Name</label>
          <input type="text" onChange={e => this.setState({ name: e.target.value })} />
        </div>

        <div className="field">
          <label>Age</label>
          <input type="text" onChange={e => this.setState({ age: e.target.value })} />
        </div>

        <button>
          +
        </button>
      </form>
    );
  }
}

export default graphql(addAuthorMutation, { name: 'addAuthorMutation' })(AddAuthor);
