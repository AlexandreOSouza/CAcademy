import Head from "next/head";
import NavBar from "../../components/navbar";
import ClaimContent from "../../components/pages/claim/content";

const ClaimPage = () => {
  return (
    <>
      <Head>
        <title>Claim</title>
      </Head>
      <NavBar />

      <ClaimContent />
    </>
  );
};

export default ClaimPage;
