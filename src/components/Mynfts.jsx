import { useEffect, useState } from 'react';
import { setGlobalState, useGlobalState } from '../store';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const Artworks = () => {
  const [mnfts] = useGlobalState('mnfts');
  const [end, setEnd] = useState(4);
  const [count] = useState(4);
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  width: 50px;
  height: 50px;
`;

  const getCollection = () => {
    return mnfts.slice(0, end);
  };

  useEffect(() => {
    console.log("Artworks: useEffect called");
    setLoading(true);
    setCollection(getCollection());
    setLoading(false);
  }, [mnfts, end]);

  console.log("Artworks: nfts length = ", mnfts.length);
  console.log("Artworks: collection length = ", collection.length);

  return (
    <div className=" gradient-bg-artworks font-body">
      <div className="w-4/5 py-10 mx-auto mb-5">
        <h4 className="text-black text-3xl font-bold uppercase ">
          {collection.length > 0 ? " MY NFTS " : "Oops No Nft found!"}
        </h4>

        {loading ? (
          <div className="sweet-loading">
            <ClipLoader color={'#123abc'} loading={loading} css={override} size={150} />
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
          {collection.map((mnft, i) => (
            <Card key={i} mnft={mnft} />
          ))}
        </div>
        {collection.length > 0 && mnfts.length > collection.length ? (
          <div className="text-center my-5">
            <button
              className=" px-4 py-2 bg-[#8359ff]  text-white
            
            rounded-full cursor-pointer "
              onClick={() => setEnd(end + count)}
            >
              Load More
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
const Card = ({ mnft }) => {
  const setNFT = () => {
    setGlobalState('mnft', mnft);
    setGlobalState('showModal', 'scale-100');
  };

  return (
    <div className="w-full s rounded-md overflow-hidden  border my-2 p-4 bg-slate-100 ">
      <img
        src={mnft.metadataURI}
        alt={mnft.title}
        className="h-60 w-full object-cover rounded-lg mb-3"
      />
      <h4 className="text-black font-semibold">{mnft.title}</h4>
      <p className="text-black text-xs my-1">{mnft.description}</p>
      <div className="flex justify-between items-center mt-3 text-black">
        <div className="flex flex-col">
          <small className="text-xs">Current Price</small>
          <p className="text-sm font-semibold">{mnft.cost} ETH</p>
        </div>

        <button
          className=" text-white text-sm
            bg-[#8359ff] cursor-pointer rounded-full px-3 py-2"
          onClick={setNFT}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Artworks;
