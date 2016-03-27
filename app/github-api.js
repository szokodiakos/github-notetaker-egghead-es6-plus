import axios from 'axios';

class GithubApi {
  static getRepos(username) {
    return axios.get(`https://api.github.com/users/${username}/repos`);
  }

  static getUserInfo(username) {
    return axios.get(`https://api.github.com/users/${username}`);
  }

  static async getGithubInfo(username) {
    const [{ data: repos }, { data: bio }] = await Promise.all([
      GithubApi.getRepos(username),
      GithubApi.getUserInfo(username),
    ]);
    return { repos, bio };
  }
}

export default GithubApi;
