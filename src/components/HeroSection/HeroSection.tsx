import classes from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.textContainer}>
        <div className={classes.titleRow}>
          <h1 className={classes.title}>Whiplash</h1>
          <p>2014</p>
        </div>
        <p className={classes.infoText}>
          A promising young drummer enrolls at a cut-throat music conservatory
          where his dreams of greatness are mentored by an instructor who will
          stop at nothing to realize a student's potential.
        </p>
        <button className={classes.button}>Watch now</button>
      </div>
    </div>
  );
}

export default HeroSection;
