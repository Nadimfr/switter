import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import TopBanner from "../public/assets/topBanner.png";
import TopBannerText from "../public/assets/topBannerText.png";
import Infinite from "../public/assets/Infinite.png";
import Calendar from "../public/assets/calendar.png";
import Bill from "../public/assets/Bill.png";
import Fields from "../public/assets/Fields.png";
import Currency from "../public/assets/Currency.png";
import Batch from "../public/assets/Batch.png";
import Refund from "../public/assets/Refund.png";
import Payment from "../public/assets/Payment.png";

export default function Home() {
  const advantages = [
    { icon: "", title: "Unlimited bill identification fields" },
    { icon: "", title: "Bill due-date and expiry date + reminders" },
    { icon: "", title: "Bill amount in any currency + breakdown" },
    { icon: "", title: "Unlimited presentment fields" },
    { icon: "", title: "Manages and record bill status transitions" },
    { icon: "", title: "Custom bill batches creation" },
    { icon: "", title: "External payment and refund recording" },
    { icon: "", title: "Adaptable to any payment methods" },
  ];
  return (
    <div>
      <Head>
        <title>Switter</title>
        <link rel="icon" href="/logo.ico" />
      </Head>

      <Layout header footer>
        <div className="pl-5 lg:flex lg:flex-row lg:items-start lg:pl-80 lg:pr-4 overflow-x-hidden pt-32">
          <div className="lg:pt-24">
            <Image src={TopBannerText} quality={100} className="w-52 lg:w-96" />
            <p className="lg:text-xl text-primary w-52 mt-2 lg:w-full">
              Swittle is a progressive FinTech Company that empowers
              Institutions and organizations to optimize & improve their
              collection, reconciliation, and settlement processes, enabling
              them to increase their cash position, and extend their runway for
              business resilience and growth potential.
            </p>
          </div>
          <Image
            src={TopBanner}
            quality={100}
            width={680}
            height={916}
            className="ml-20 lg:ml-16 relative bottom-10 lg:bottom-0"
          />
        </div>
        <div className="bg-primary h-48 lg:h-96 relative bottom-10 lg:bottom-0 px-5 py-6 flex lg:justify-center lg:px-96 lg:items-center">
          <h1 className="text-secondary font-bold text-6xl lg:text-9xl">"</h1>
          <h1 className="text-center text-lg lg:text-4xl text-white italic">
            Swittle is on a mission to help institutions and organizations
            optimize their collection cycles though enaling their customers to
            pay more conveniently, and on time.
          </h1>
          <h1 className="text-secondary font-bold text-6xl lg:text-9xl">"</h1>
        </div>

        <div className="bg-light lg:px-80">
          <h1>lol</h1>
        </div>
      </Layout>
    </div>
  );
}
