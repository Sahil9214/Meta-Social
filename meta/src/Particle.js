import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = async (main) => {
   
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      Loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          
          },
        },
        fpsLimit: 80,
        interactivity: {
          events: {
            onClick: {
              enable: true,
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#fff",
          },
          links: {
            color: "#ffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1500,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "triangle",
          },
          size: {
            value: { min: 2, max: 6 },
          },
        },
      }}
    />
  );
};
export default Particle;
//hello Utkarsh Singhal