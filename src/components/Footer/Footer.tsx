import classes from './Footer.module.css';

function Footer() {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.textBox}>
        <p className={classes.title}>FILMFLIX 2023</p>
        <div>
          <p>contact us: </p>
          <p>email: filmflix@film.com</p>
          <p>phone: 031-123456</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
