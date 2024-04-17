import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <main className={styles.container}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>Transforming Job Matching with Cutting-Edge AI</h1>
          <p className={styles.heroSubheadline}>
            Experience the future of employment with TalanQ — Where technology meets opportunity.
          </p>
          <button className={styles.heroCTA}>Discover How</button>
        </div>
        {/* Placeholder for Hero Image */}
        <div className={styles.heroImagePlaceholder}></div>
      </section>

      {/* Bento Grid Section */}
      <div className={styles.gridContainer}>

        {/* About Us Card */}
        <div className={styles.gridItem}>
          <h2 className={styles.gridHeadline}>Innovating for a More Inclusive Job Market</h2>
          <p className={styles.gridContent}>
            TalanQ is dedicated to redefining the employment landscape. By integrating advanced AI with deep market insights, we tackle the unique challenges of modern job seekers and employers. Our mission is not only to simplify the hiring process but to ensure it's fair, efficient, and inclusive for all.
          </p>
          <button className={styles.gridCTA}>Learn More About Us</button>
        </div>

        {/* How It Works Card */}
        <div className={styles.gridItem}>
          <h2 className={styles.gridHeadline}>Precision Matching with Our AI-Driven Platform</h2>
          <p className={styles.gridContent}>
            Our platform does more than just match resumes to job descriptions. It understands skills, untaps potential, and aligns career aspirations with organizational needs. Discover a streamlined recruitment process that enhances how employers connect with the right talent, ensuring a 90% increase in successful job placements.
          </p>
          <button className={styles.gridCTA}>See It in Action</button>
        </div>

        {/* Our Impact Card */}
        <div className={styles.gridItem}>
          <h2 className={styles.gridHeadline}>Driving Success Through Sustainable Employment</h2>
          <p className={styles.gridContent}>
            At TalanQ, we are committed to making a tangible impact. Collaborating with both private and governmental sectors, we've facilitated remarkable growth in employment rates and helped numerous job seekers find fulfilling careers. Our approach supports Sustainable Development Goals by promoting decent work and economic growth.
          </p>
          <button className={styles.gridCTA}>View Our Success Stories</button>
        </div>

        {/* Call to Action Card */}
        <div className={styles.gridItem}>
          <h2 className={styles.gridHeadline}>Join the Employment Revolution</h2>
          <p className={styles.gridContent}>
            Ready to advance your career or boost your recruitment strategy? Join TalanQ today and be part of the movement towards a more efficient and just job market. Whether you're seeking talent or searching for a job, TalanQ is your gateway to a wealth of opportunities.
          </p>
          <button className={styles.gridCTA}>Get Started Now</button>
        </div>

        <div className={styles.gridContainer3}>

             {/* Our Impact Card */}
             <div className={styles.gridItem}>
            <h2 className={styles.gridHeadline}>Title Here</h2>
            <p className={styles.gridContent}>
            Content goes here. Keep it brief and to the point to match the style of the design.
            </p>
            <button className={styles.gridCTA}>CALL TO ACTION</button>
            </div>
        {/* Call to Action Card */}
        <div className={styles.gridItem}>
          <h2 className={styles.gridHeadline}>Join the Employment Revolution</h2>
          <p className={styles.gridContent}>
            Ready to advance your career or boost your recruitment strategy? Join TalanQ today and be part of the movement towards a more efficient and just job market. Whether you're seeking talent or searching for a job, TalanQ is your gateway to a wealth of opportunities.
          </p>
          <button className={styles.gridCTA}>Get Started Now</button>
        </div>

        

      </div>
      <div className={styles.gridContainer3}>

             {/* Our Impact Card */}
        <div className={styles.gridItem}>
          <h2 className={styles.gridHeadline}>Driving Success Through Sustainable Employment</h2>
          <p className={styles.gridContent}>
            At TalanQ, we are committed to making a tangible impact. Collaborating with both private and governmental sectors, we've facilitated remarkable growth in employment rates and helped numerous job seekers find fulfilling careers. Our approach supports Sustainable Development Goals by promoting decent work and economic growth.
          </p>
          <button className={styles.gridCTA}>View Our Success Stories</button>
        </div>

        {/* Call to Action Card */}
        <div className={styles.gridItem}>
          <h2 className={styles.gridHeadline}>Join the Employment Revolution</h2>
          <p className={styles.gridContent}>
            Ready to advance your career or boost your recruitment strategy? Join TalanQ today and be part of the movement towards a more efficient and just job market. Whether you're seeking talent or searching for a job, TalanQ is your gateway to a wealth of opportunities.
          </p>
          <button className={styles.gridCTA}>Get Started Now</button>
        </div>

        

      </div>
      </div>




    </main>
    );
};

export default Home;


// git add .
// git commit -m "Updated background color”
// git push origin main