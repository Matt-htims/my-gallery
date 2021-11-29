import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>My Gallery</title>
				<meta
					name="description"
					content="My Gallery challenge from devChallenges.io completed by Matt.htims"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.person}>
					<div className={styles.image}>
						<Image src="/profilePhoto.png" layout="fill" alt="Profile photo" />
					</div>
					<h2 className={styles.heading}>Rodney Cotton</h2>
					<p className={styles.subheading}>Helsinki, Finland</p>
					<div className={styles.stats}>
						<div className={styles.statbox}>
							<p>100</p>
							<h4>Posts</h4>
						</div>
						<div className={styles.statbox}>
							<p>2,242</p>
							<h4>Follower</h4>
						</div>
						<div className={styles.statbox}>
							<p>1,432</p>
							<h4>Following</h4>
						</div>
					</div>
				</div>
				<div className={styles.gallery}>
					<div className={styles.galleryimage}>
						<Image src="/photo1.png" layout="fill" alt="Stool in room" />
					</div>
					<div className={styles.galleryimage}>
						<Image src="/photo2.png" layout="fill" alt="Sofa in room" />
					</div>
					<div className={styles.galleryimage}>
						<Image src="/photo3.png" layout="fill" alt="Standing bath tub" />
					</div>
					<div className={styles.galleryimage}>
						<Image
							src="/photo4.png"
							layout="fill"
							alt="Fancy black standing lamp"
						/>
					</div>
					<div className={styles.galleryimage}>
						<Image src="/photo5.png" layout="fill" alt="Green exotic plant" />
					</div>
					<div className={styles.galleryimage}>
						<Image
							src="/photo6.png"
							layout="fill"
							alt="Farm house table with low wicker stools"
						/>
					</div>
				</div>
			</main>
			<footer>
				<p>
					created by <a href="https://github.com/Matt-htims">Matt.htims</a> -
					devChallenges.io
				</p>
			</footer>
		</div>
	);
}
