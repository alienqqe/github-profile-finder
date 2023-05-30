import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'
import { Navbar } from './components/Navbar'
import { useEffect, useState } from 'react'
import { Profile } from './components/Profile'

function App() {
  const [userName, setUserName] = useState('')
  const [preUserName, setPreUserName] = useState('')
  const [profile, setProfile] = useState({})
  const [reposPlaceHolder, setRepos] = useState('')

  const url = `https://api.github.com/users/${userName}`

  const fetchUsers = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()

    console.log(responseJSON)
    if (responseJSON.login) {
      setProfile(responseJSON)
      setRepos(' repos')
    }
  }

  useEffect(() => {
    fetchUsers(userName)
  }, [userName])

  return (
    <>
      <div>
        <Navbar
          preUserName={preUserName}
          setUserName={setUserName}
          userName={userName}
          setPreUserName={setPreUserName}
        />
        <Profile
          profile={profile}
          userName={userName}
          reposPlaceHolder={reposPlaceHolder}
        />
      </div>
    </>
  )
}

export default App
