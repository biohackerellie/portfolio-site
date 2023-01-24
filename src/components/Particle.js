import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.4,
          },

          size: {
            value: 2,
            random: true,
            animation: {
              enable: true,
              speed: 4.181158184520175,
              minimumValue: 0.1,
              sync: false
            },
          },

          opacity: {
            anim: {
              enable: true,
              speed: 4,
              opacity_min: 0.55,
              sync: false
            },
          },

        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          outMode: "bounce",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        },
      },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            connect: {},
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 2,
              remove: {
                particles_nb: 2
              }
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
