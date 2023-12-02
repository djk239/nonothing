import React, { useState } from "react";
import styles from "./This.module.css";

export const This = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setTranslateX((prevTranslateX) => prevTranslateX + deltaX);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={styles.imageTrack}
      id="image-track"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ transform: `translateX(${translateX}px)` }}
    >
            <img className={styles.image} draggable="false" src="https://images.unsplash.com/photo-1700840978062-57f05748318c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D"/>
            <img className={styles.image} draggable="false" src="https://images.unsplash.com/photo-1700762371160-972f3c4da906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D" />
            <img className={styles.image} draggable="false" src="https://images.unsplash.com/photo-1694588614590-44324cfe98e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D" />
            <img className={styles.image} draggable="false" src="https://images.unsplash.com/photo-1681747971531-30ac6b881eed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D" />
            <img className={styles.image} draggable="false" src="https://images.unsplash.com/photo-1596023480282-571f643f2b72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1N3xobWVudlFoVW14TXx8ZW58MHx8fHx8" />
            <img className={styles.image} draggable="false" src="https://images.unsplash.com/photo-1547689914-47dfd97bc72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2MnxobWVudlFoVW14TXx8ZW58MHx8fHx8" />
        </div>
    );
};
