import Particles from './Particles'

export default class Portal
{
  constructor()
  {
    this.setParticles()
  }

  setParticles()
  {
    this.particles = new Particles()
  }

  update ()
  {
    this.particles.update()
  }
}