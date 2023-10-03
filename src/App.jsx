import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
  },
  {
    userName: 'FabianTrivinoc',
    name: 'Fabian Triviño',
    isFollowing: false
  },
  {
    userName: 'ossia',
    name: 'Quincy Larson',
    isFollowing: true
  },
  {
    userName: 'Michel',
    name: 'Michel Hernandez',
    isFollowing: true
  },
]
 
export function App (){
  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName} 
            userName={userName} 
            name={name}
            initialIsFollowing={isFollowing}
          />
        ))
      }     
    </section>
  )
}