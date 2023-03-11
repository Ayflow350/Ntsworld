import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Faq = () => {
  return (
    <div>
      <Header />
      <div className=" container mx-auto p-8 font-body">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">FAQs</h1>
        </div>
        <div className=" w-5/5 md:w-4/5 bg-slate-200 p-5">
          <h1 className="text-2xl font-bold  mb-4 ">
            What crypto wallet can I use on Zyteon?
          </h1>
          <p className="border-2 rounded-md bg-slate-100 px-4 py-4">
            On desktop, you can use Metamask. On mobile phone, wallet apps with
            a Dapp browser should work with Zyteon. To use Zyteon in a Dapp
            browser, you need to type Zyteon.com in its address bar manually,
            and select Metamask from the Wallet Connect Popup. If you want to
            use Zyteon in mobile browser like Safari or Android, then you need
            to use a wallet that supports Wallet Connect. You can check the full
            list of wallets supporting Wallet Connect here.
          </p>
        </div>
        <div className="w-5/5 md:w-4/5 mt-10 bg-slate-200 p-5">
          <h1 className="text-2xl font-bold  mb-5 ">
            What blockchain does Zyteon support?
          </h1>
          <p className="border-2 bg-slate-100 px-4 py-4">
            Currently we support Polygon. We are working to get it deployed on
            more blockchains.
          </p>
        </div>
        <div className="w-5/5 md:w-4/5 mt-10 bg-slate-200 p-5 ">
          <h1 className="text-2xl font-bold  mb-4 ">
            What currencies can I use on Zyteon?
          </h1>
          <p className="border-2 bg-slate-100 px-4 py-4 ">
            Currently we only support the native on each blockchain for now.
            Multi-currency support will be implemented soon.
          </p>
        </div>
        <div className="w-5/5 md:w-4/5 mt-10  bg-slate-200 p-5">
          <h1 className="text-2xl font-bold  mb-5 ">
            Where can I see the history of an NFT?
          </h1>
          <p className="border-2 bg-slate-100 px-4 py-4 ">
            On the detail page of each NFT, there is a History tab below the
            large image, where you can check the past activities of the NFT,
            including Listing, Sale, and Transfer.
          </p>
        </div>

        <h1 className="text-4xl mt-10 font-bold">Selling</h1>
        <div className="w-5/5 md:w-4/5 mt-10 bg-slate-200 p-5">
          <h1 className="text-2xl font-bold mb-4 ">
            How to list an NFT to sell?
          </h1>
          <p className="border-2 bg-slate-100 px-4 py-5">
            Before start selling your NFTs, please make sure: NFTs you want to
            sell is ERC-721 compatible. ERC-1155 NFTs are not supported yet.
            There is at least enough native token (e.g. MATIC on polygon) in
            wallet to pay for gas fee of approval.
            <p className="mt-3 ">
              Zyteon supports Fixed Price Listing. To sell your NFTs, you need
              to visit Profile page where lists all NFTs in your profile. The
              Profile page features powerful filters to help you find the NFT to
              sell. After open the detail page of the NFT, you can find the
              Fixed price button.
            </p>
          </p>
        </div>
        <div className=" w-5/5 md:w-4/5  mt-10 bg-slate-200 p-5">
          <h1 className="text-2xl font-bold  mb-4 ">
            Where can I find my listed NFTs?
          </h1>
          <p className="border-2 bg-slate-100 px-4 py-4 ">
            Your can find all your listed NFTs in the On Sale tab of your
            Profile page.
          </p>
        </div>
        <div className="w-5/5 md:w-4/5 mt-10 bg-slate-200 p-5 ">
          <h1 className="text-2xl font-bold  mb-4 ">
            How can I find out how much did I receive for each sale?
          </h1>
          <p className="border-2 bg-slate-100 px-4 py-4 ">
            You can confirm the amount of payment either from the notification
            sent via Telegram, or from the transaction details on Polyscan,
          </p>
        </div>
        <div className="w-5/5 md:w-4/5 mt-10  bg-slate-200 p-5">
          <h1 className="text-2xl font-bold  mb-4 ">
            Where can I find my listed NFTs?
          </h1>
          <p className="border-2 bg-slate-100 px-4 py-4 ">
            Your can find all your listed NFTs in the On Sale tab of your
            Profile page.
          </p>
        </div>
        <div className="w-5/5 md:w-4/5 mt-10 bg-slate-200 p-5">
          <h1 className="text-2xl font-bold  mb-4 ">
            Where can I find my listed NFTs?
          </h1>
          <p className="border-2 bg-slate-100 px-4 py-4 ">
            Your can find all your listed NFTs in the On Sale tab of your
            Profile page.
          </p>
        </div>
        <h1 className="text-4xl font-bold mt-10">Safety</h1>
        <div className="w-5/5 md:w-4/5 mt-10 bg-slate-200 p-4">
          <h1 className="text-2xl font-bold  mb-4 ">
            How to report fraudulent NFT?
          </h1>
          <p className="border-2 bg-slate-100 px-4 py-4">
            Though Zyeton is a peer to peer trading market, any fraudulent
            contents that infringe copyright or violates our Terms of Service
            will not be tolerated. If you think any NFT is fraudulent, you can
            contact us and We will ban the contract of the NFT once we confirmedFD
            the report.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Faq