import React, { useEffect, useRef } from "react";
import styles from "../styles/item.module.scss";
import gsap from "gsap";

const Item = ({ name, price, isFacingRight, image, shoeNumber }) => {
  let refContainer = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    const homeAnimation = () => {
      tl.from(refContainer, 1.3, {
        x: -300,
        opacity: 0,
        ease: "power4.out",
      });
    };

    homeAnimation();
  }, []);

  return (
    <div
      className={styles.container}
      ref={(element) => (refContainer = element)}
    >
      <div className={styles.number}>{shoeNumber}</div>

      <div className={styles.shoe}>
        <img src={image.url} alt="" />
      </div>

      <div className={styles.description}>
        <div className={styles.title}>{name}</div>
        <div className={styles.price}>${price}</div>
      </div>
    </div>
  );
};

export default Item;
