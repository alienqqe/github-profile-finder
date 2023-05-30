export const Profile = ({ profile, userName, reposPlaceHolder }) => {
  return (
    <div className='profile'>
      <img
        src={profile.avatar_url}
        className='img-fluid rounded d-block mx-5'
        alt=''
      />
      <div className='text'>
        <h1 className=''>
          <a href={profile.html_url}>{profile.login}</a>
        </h1>
        <h5 className=''>{profile.name}</h5>
        <p>
          <a href={`https://github.com/${userName}?tab=repositories`}>
            {[profile.public_repos, reposPlaceHolder]}
          </a>
        </p>
      </div>
    </div>
  )
}
