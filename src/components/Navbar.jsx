export const Navbar = ({
  setPreUserName,
  setUserName,
  preUserName,
  userName,
}) => {
  const handleUserNameChange = (event) => {
    setPreUserName(event.target.value)
    if (event.key === 'Enter') {
      setUserName(preUserName)
    }
  }

  return (
    <nav>
      <div className='nav-text'>
        <h1>GitHub User Browser</h1>
        <p>
          <a href='https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api?apiVersion=2022-11-28'>
            Using GitHub API
          </a>
        </p>
      </div>
      <input
        className='input searchBar'
        type='text'
        placeholder='Enter username'
        value={preUserName}
        onChange={handleUserNameChange}
        onKeyPress={handleUserNameChange}
      ></input>
    </nav>
  )
}
