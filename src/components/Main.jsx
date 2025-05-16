// #a8a4b5 cloud white
// #0d1721 shadow black
// #faa289 sunset orange
// #678d96 sky blue
// #ffdaad light yellow
import Intro from './Intro'
import About from './About'
import Thoughts from './Thoughts'
import Role_Models from './Role_Models'
import Books from './Books'
import Skills from './Skills'
import Experience from './Experience'
import Contacts from './Contacts'

const Main = () => {
    return (
        <main className="min-h-screen">
            <Skills />
            <Experience />
            {/* <Intro />
            <About />
            <Thoughts />
            <Role_Models />
            <Books /> */}
            <Contacts />
        </main>
    )
}

export default Main;