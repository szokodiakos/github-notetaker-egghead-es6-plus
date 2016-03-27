import React from 'react';
import Rebase from 're-base';

import UserProfile from './UserProfile.js';
import Repos from './Repos.js';
import Notes from './Notes.js';
import GithubApi from '../github-api.js';

const base = Rebase.createClass('https://blazing-inferno-168.firebaseio.com/');

class Profile extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
  };

  state = {
    notes: [],
    bio: {
      name: 'Dude',
    },
    repos: [],
  };

  componentWillMount() {
    this.loadUser(this.props.params.username);
  }

  componentWillReceiveProps(nextProps) {
    base.removeBinding(this.firebaseNotes);
    this.loadUser(nextProps.params.username);
  }

  componentWillUnmount() {
    base.removeBinding(this.firebaseNotes);
  }

  loadUser = async (username) => {
    this.firebaseNotes = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes',
    });

    const githubInfo = await GithubApi.getGithubInfo(username);
    this.setState(githubInfo);
  }

  addNote = (newNote) => {
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote]),
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.addNote}
          />
        </div>
      </div>
    );
  }
}

export default Profile;
