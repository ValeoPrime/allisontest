import Head from "next/head";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.sass";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import {red} from "@material-ui/core/colors";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <Header />
          <h2>ЛИЧНЫЙ ПРОФИЛЬ</h2>
          <Breadcrumbs color="red" aria-label="breadcrumb">
            <Link  href="/">
            Главная
            </Link>
            <Typography color="palette.text.primary">Личный профиль</Typography>
          </Breadcrumbs>
        </div>
      </main>
    </div>
  );
}
