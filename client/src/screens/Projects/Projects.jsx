import './Projects.css'
import Layout from '../../components/Layout/Layout'
import Project1 from '../../components/Project1/Project1'
import Project2 from '../../components/Project2/Project2'
import Project3 from '../../components/Project3/Project3'
import Project4 from '../../components/Project4/Project4'

function Home() {
  return (
    <Layout>
      <div>
        <p className='project-title'>Projects</p>
        <p className='project-text'>Every project is a labor of love and hardwork. Enjoy!</p>
        <div className='projects'>
          <Project4 />
          <Project3 />
          <Project2 />
          <Project1 />
        </div>
      </div>
    </Layout>
  )
}

export default Home