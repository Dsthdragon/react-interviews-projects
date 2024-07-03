interface Props {
  user: GithubData;
}
export default function User({ user }: Props) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    html_url,
    name,
    login,
    created_at
  } = user;

  const createdDate = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div className="name-container">
        <a href={html_url} target="blank">
          {name || login}
        </a>
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-NG", {
            month: "short"
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Followings</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}

export interface GithubData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
