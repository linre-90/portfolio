
/* Particle setup */
let options = {
      fpsLimit: 120,
      interactivity: {
          events: {
              onHover: {
                  enable: true,
                  mode: "repulse",
              },
              resize: true,
          },
          modes: {
              repulse: {
                  distance: 100,
                  duration: 0.4,
              },
          },
      },
      particles: {
          color: {
              value: "#816797",
          },
          links: {
              color: "#51557E",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
          },
          collisions: {
              enable: true,
          },
          move: {
              direction: "none",
              enable: true,
              outModes: {
                  default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 800,
              },
              value: 100,
          },
          opacity: {
              value: 0.5,
          },
          shape: {
              type: "circle",
          },
          size: {
              value: { min: 1, max: 3 },
          },
      },
      detectRetina: true,
};

/* Load particle setup object */
tsParticles.load("tsparticles", options);

