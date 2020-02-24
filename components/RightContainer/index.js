import styles from "./styles.scss";

const RightContainer = props => (
  <div
    className={styles.rightContainer}
    style={{ backgroundImage: `url("${props.homeData.image.url}")` }}
  >
    {props.children}
  </div>
);

export default RightContainer;
