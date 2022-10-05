import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Development Analytics, Bangladesh</title>
        <meta name="description" content="NGO" />
        <link rel="icon" href="/Frame 576.png" />
      </Head>

      <main className={styles.main}>
      
        <div className={styles.fs}>
          <div className={styles.fst}>
            <div className={styles.fstl}>
              <img src="Frame 576.png" alt="DAB"></img>
              <h5>Development Analytics, Bangladesh</h5>
            </div>
            <div className={styles.fstr}>
              <a href="https://google.com" className={styles.fstrhome}>
                <h5>Home</h5>
              </a>
              <a href="https://google.com" className={styles.fstraboutus}>
                <h5>About Us</h5>
              </a>
              <a href="https://google.com" className={styles.fstrcontactus}>
                <h5>Contact Us</h5>
              </a>
            </div>
          </div>
          <div className={styles.fsd}>
            <div className={styles.fsdl}>
              <div className={styles.fsdltitle}>
                <h1>Development Analytics, Bangladesh</h1>
              </div>
              <div className={styles.fsdlsubtitle}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu consectetur eget vitae lorem elit in ac. Neque non scelerisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu consectetur eget vitae lorem elit in ac. Neque non scelerisque
                </p>
              </div>
            </div>
            <div className={styles.fsdr}>
            <img src="bdmap.png" alt="Bangladesh Map"></img>
            </div>

          </div>
        </div>

        <div className={styles.ss}>
          <div className={styles.ssl}>
            <div className={styles.ssll}>
            <img src="man.png" alt="manstanding"></img>
            </div>
            <div className={styles.sslr}>
              <div className={styles.sslrt}>
                <img src="insect.png" alt="insect"></img>
              </div>
              <div className={styles.sslrd}>
              <img src="man2.png" alt="DAB"></img>
              </div>
            </div>
          </div>
          <div className={styles.ssr}>
            <div className={styles.ssrtitle}>
              <h3>Who we are</h3>
              <img src="rec.png" alt='rectangle'></img>
              <p>Development Analytics Bangladesh is a private consultancy firm in Bangladesh that provides services to health, population, nutrition, agriculture, WASH (Water, Sanitation and hygiene), environment, social communication, livestock, socio-economic development, and women and children&#39;s development research country. Development Analytics Bangladesh has an unparalleled professional commitment and integrity to execute research assignments. These involve complex designs and data collection and analysis on a wide range of variables. Development Analytics Bangladesh has demonstrated its professional capability in planning and managing complex research projects. Development Analytics Bangladesh is equally capable of conducting innovative studies.</p>
            </div>
          </div>
        </div>

        <div className={styles.ts}>
          <div className={styles.tsl}>
          <div className={styles.ssrtitle}>
              <h3>Who we are</h3>
              <img src="rec.png" alt='rectangle'></img>
              <p>Development Analytics Bangladesh is a private consultancy firm in Bangladesh that provides services to health, population, nutrition, agriculture, WASH (Water, Sanitation and hygiene), environment, social communication, livestock, socio-economic development, and women and children&#39;s development research country. Development Analytics Bangladesh has an unparalleled professional commitment and integrity to execute research assignments. These involve complex designs and data collection and analysis on a wide range of variables. Development Analytics Bangladesh has demonstrated its professional capability in planning and managing complex research projects. Development Analytics Bangladesh is equally capable of conducting innovative studies.</p>
            </div>
          </div>
          <div className={styles.tsr}>
          <div className={styles.ssll}>
            <img src="man.png" alt="manstanding"></img>
            </div>
            <div className={styles.sslr}>
              <div className={styles.sslrt}>
                <img src="insect.png" alt="insect"></img>
              </div>
              <div className={styles.sslrd}>
              <img src="man2.png" alt="DAB"></img>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fours}>
          <div className={styles.fourst}>
            <h3>Our Services</h3>
          </div>
          <div className={styles.foursl}>
            
          </div>
        </div>
        
        <h1 className={styles.title}>
        Development Analytics, Bangladesh
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      
    </div>
  )
}
