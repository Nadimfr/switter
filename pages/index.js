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
import Billing from "../public/assets/Billing.png";
import Collection from "../public/assets/Collection.png";
import Reconciliation from "../public/assets/Reconciliation.png";
import Benefit from "../public/assets/Benefit.png";
import Blue from "../public/assets/Blue.png";
import Card from "../components/Card";
import Title from "../components/Title";
import Button from "../components/Button";

export default function Home() {
  const advantages = [
    { icon: Infinite, title: "Unlimited bill identification fields" },
    { icon: Calendar, title: "Bill due-date and expiry date + reminders" },
    { icon: Currency, title: "Bill amount in any currency + breakdown" },
    { icon: Fields, title: "Unlimited presentment fields" },
    { icon: Bill, title: "Manages and record bill status transitions" },
    { icon: Batch, title: "Custom bill batches creation" },
    { icon: Refund, title: "External payment and refund recording" },
    { icon: Payment, title: "Adaptable to any payment methods" },
  ];

  const doable = [
    {
      icon: Billing,
      title: "BILLING",
      text: "Disseminate your bills directly to your customers, customize the presentment and payment rules.",
    },
    {
      icon: Collection,
      title: "COLLECTION",
      text: "Maximize chances of getting paid by accepting cash, cards, fund transfers, electronic money and more.",
    },
    {
      icon: Reconciliation,
      title: "RECONCILIATION",
      text: "Eliminate lengthy and error-prone reconciliations. Handle exceptions like a pro. Get settled faster.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Switter - Home | Swittle</title>
        <link rel="icon" href="/logo.ico" />
      </Head>

      <Layout header footer>
        <div className="pl-5 lg:flex lg:flex-row lg:items-start lg:pl-80 lg:pr-4 overflow-x-hidden pt-32">
          <div className="lg:pt-24">
            <Image
              src={TopBannerText}
              alt="top banner text"
              quality={100}
              className="w-52 lg:w-96"
            />
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
            alt="top banner"
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

        <div className="relative bottom-10 px-5 py-6 lg:flex lg:items-start lg:justify-between lg:gap-24 bg-light lg:px-80 lg:py-8">
          <div className="lg:w-2/6">
            <Title
              style="w-1/2 lg:w-full"
              textStyle="font-semibold text-4xl text-left"
              barStyle="bg-secondary h-1 w-3/4 mt-2 rounded-md"
              title="Our key advantages"
            />
            <p className="lg:text-xl text-primary mt-4">
              Our comprehensive “Electronic Bill Payment and Presentment” (EBPP)
              platform is equipped with bank-grade technologies, interfaces and
              tools, designed to adapt to multiple financial and business
              models.
            </p>
          </div>
          <Card data={advantages} />
        </div>

        <div className="relative lg:flex lg:flex-col lg:items-center lg:justify-center bottom-10 bg-mid lg:px-80 lg:py-8 px-5">
          <Title
            textStyle="font-semibold text-4xl text-center pt-4 lg:pt-0"
            barStyle="bg-secondary w-3/4 h-1 mt-2 rounded-md mb-6"
            title="What you can do"
          />
          <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            {doable.map((d, idx) => (
              <div
                key={idx}
                className="py-4 px-2 gap-4 lg:gap-0 flex lg:flex-col flex-row items-start justify-start lg:items-center lg:justify-center rounded-lg lg:hover:bg-white duration-500 cursor-default"
              >
                <Image src={d.icon} quality={100} alt="icon" />
                <div className="flex flex-col items-start lg:items-center">
                  <h2 className="text-center font-bold lg:text-xl lg:my-2">
                    {d.title}
                  </h2>
                  <p className="text-left font-normal lg:text-lg lg:text-center">
                    {d.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative bottom-10 right-0 left-0">
          <div className="lg:h-96 lg:flex lg:flex-row ">
            <Image
              src={Benefit}
              alt="Benefit"
              className="lg:w-2/4 w-full"
              quality={100}
            />
            <div className="bg-primary pl-5 py-4 lg:w-2/4 w-full lg:pl-5 lg:py-4 lg:flex lg:flex-row lg:items-center">
              <div className="lg:flex lg:flex-col lg:items-start">
                <Title
                  style="w-3/4 lg:w-full"
                  textStyle="font-semibold text-white text-4xl text-left lg:w-3/4"
                  barStyle="bg-white h-1 w-1/2 lg:w-3/4 mt-2 rounded-md lg:w-1/4"
                  title="How do you benefit as a biller"
                />
                <p className="text-white lg:w-full w-3/4 my-4 lg:mb-8">
                  In return, institutions benefit from faster settlements, more
                  control over their billing management systems, and
                  scalability/growth opportunities. Swittle is a catalyst for
                  growth.
                </p>

                <Button title="Partner with us" style="w-2/4 lg:w-3/5" />
              </div>
              <Image
                className="w-1/2 lg:left-0 lg:top-0 relative right-0 left-64 top-14"
                src={Blue}
                alt="Blue"
                quality={100}
              />
            </div>
          </div>
        </div>

        <div className="bg-light relative h-72 bottom-10 z-10">
          <h1>Hii</h1>
        </div>
      </Layout>
    </div>
  );
}
