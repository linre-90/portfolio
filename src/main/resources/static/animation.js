/**
 * Animation for navbar collapsing
 * @param {*} changeVisibility
 */
function animateNavbar(changeVisibility) {
  const element = document.getElementById("fullNavbar");
  if (changeVisibility) {
    gsap.to("#navbar", {
      scaleY: 0,
      duration: 1,
      // element is the whole navbar. We have to reduce toggle button elements height from negative margin
      // Heigh is set to static with tailwind to h-24(96px)
      marginTop: -(element.clientHeight - 96),
    });
  } else {
    gsap.to("#navbar", {
      marginTop: 0,
      scaleY: 1,
      duration: 1,
    });
  }
}

/**
 * Animate rotation 180 degrees.
 * @param {*} flipped
 */
function animateRotation(flipped, id) {
  if (flipped) {
    gsap.to("#" + id, {
      rotate: 0,
      duration: 1,
    });
  } else {
    gsap.to("#" + id, {
      rotate: 180,
      duration: 1,
    });
  }
}

/**
 * Scale element up or down.
 * @param {*} id
 * @param {*} scaleUp
 */
function scaleUpOrDown(id, scaleUp) {
  if (scaleUp) {
    gsap.to("#" + id, {
      scale: 1.1,
      duration: 1,
    });
  } else {
    gsap.to("#" + id, {
      scale: 1.0,
      duration: 1,
    });
  }
}

/**
 * Scale element up or down.
 * @param {*} id
 * @param {*} scaleUp
 */
function focusScaling(id, scaleUp, amount) {
  if (scaleUp) {
    gsap.to("#" + id, {
      scale: amount,
      duration: 1,
    });
  } else {
    gsap.to("#" + id, {
      scale: 1.0,
      duration: 1,
    });
  }
}

/**
 * Pulse animation
 * @param {*} id
 */
function constantPulse(id, maxScale){
    let tl = gsap.timeline({ repeat: -1 });

    tl.to("#" + id, {
        scaleX: maxScale,
        duration: 1,
        ease: "none",
        transformOrigin: "center bottom",
    });

    tl.to("#" + id, {
        scaleX: 1.0,
        duration: 1,
        ease: "none",
    });
}

/**
 * Provides slow constant rotation.
 * @param {*} id
 */
function slowConstantRotation(id) {
  gsap.to("#" + id, {
    rotate: 360,
    duration: 15,
    repeat: -1,
    ease: "none",
  });
}

/**
 * Call to action button animation
 * @param {*} id
 */
function ctaAnimation(id) {
  let tl = gsap.timeline({ repeat: -1 });
  tl.to("#" + id, {
    scaleX: 1.1,
    duration: 1,
    ease: "none",
    transformOrigin: "left bottom",
  });
  tl.to("#" + id, {
    scaleX: 1.0,
    duration: 1,
    ease: "none",
  });

  let shakeTimeline = gsap.timeline({ repeat: -1 });

  shakeTimeline.to("#" + id, {
    rotate: -1,
    duration: 0.5,
  });
  shakeTimeline.to("#" + id, {
    rotate: 0,
    duration: 0.5,
  });
}
