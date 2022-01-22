import './Projects.css'
import Layout from '../../components/Layout/Layout'
import Project1 from '../../components/Project1/Project1'
import Project2 from '../../components/Project2/Project2'
import Project3 from '../../components/Project3/Project3'

function Home() {
  return (
    <Layout>
      <div>
        <p className='project-title'>PROJECTS</p>
        <div className='projects'>
          <Project1 />
          <Project2 />
          <Project3 />
        </div>
      </div>
    </Layout>
  )
}

export default Home