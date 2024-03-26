
import { arrowRight } from '../assets/icons'
import Button from '../components/button'
import { statistics } from '../constants'

const Hero = () => {
  return (
    <section 
    id="home"
   /* className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"*/>
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our summer collection</p>
        <h1> 
          <span>The New Arrival</span> 
          <br />
          <span>Jordan</span>
           Kicks 
          </h1>
          <p>The all New Jordan Kicks straight outta the NIKE Factory, Don't sleep on these premium comfort kicks, Its harder than finding Drake's Leaks.</p>
          <Button  lable="Shop now" iconURL={arrowRight} />
          <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
          </div>

      </div>
    </section>
  )
}

export default Hero
