import React from 'react';
import _ from 'lodash';

class UserProfile extends React.Component {
  static propTypes = {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired,
  };

  UNNEEDED_FIELDS = [
    'url',
    'type',
    'html_url',
    'gists_url',
    'repos_url',
    'site_admin',
    'created_at',
    'updated_at',
    'events_url',
    'gravatar_id',
    'starred_url',
    'followers_url',
    'following_url',
    'subscriptions_url',
    'organizations_url',
    'received_events_url',
  ];

  render() {
    const bio = _.map(this.props.bio, (val, key) => {
      if (_.isNull(val) || this.UNNEEDED_FIELDS.includes(key)) {
        return null;
      }
      const title = _.startCase(key);
      if (key === 'avatar_url') {
        return (
          <li className="list-group-item" key={key}>
            <img src={val} className="img-rounded img-responsive" />
          </li>
        );
      }
      if (key === 'blog') {
        return (
          <li className="list-group-item" key={key}>
            {title}: <a href={val}>{val}</a>
          </li>
        );
      }
      return (
        <li className="list-group-item" key={key}>
          {title}: {val}
        </li>
      );
    });

    return (
      <div>
        {bio}
      </div>
    );
  }
}

export default UserProfile;
