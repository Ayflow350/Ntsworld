import { useEffect, useState } from 'react'
import { BiTransfer } from 'react-icons/bi'
import { MdOpenInNew } from 'react-icons/md'
import { useGlobalState, truncate } from '../store'
import {motion} from 'framer-motion'



// Animation

const containerVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const Transactions = () => {
  const [transactions] = useGlobalState('transactions')
  const [end, setEnd] = useState(6)
  const [count] = useState(3)
  const [collection, setCollection] = useState([])

  const getCollection = () => {
    return transactions.slice(0, end)
  }

  useEffect(() => {
    setCollection(getCollection())
  }, [transactions, end])

  return (
    <motion.div variants={containerVariant} initial="hidden" animate="visible" className="bg-[]">
      <div className="w-4/5 py-10 mx-auto font-body">
        <h4 className="text-black text-3xl font-bold uppercase ">
          {collection.length > 0 ? 'Recent Activities' : "Loading..." }
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-2 py-8">
          {collection.map((tx) => (
            <div
              key={tx.id}
              className="flex justify-between items-center border border-purple-500 text-black-400 w-full  rounded-md overflow-hidden bg- my-2 p-3"
            >
              <div className="rounded-md shadow-sm shadow-pink-500 p-2">
                <BiTransfer />
              </div>

              <div>
                <h4 className="text-sm">{tx.title} Transfered</h4>
                <small className="flex flex-row justify-start items-center">
                  <span className="mr-1">Received by</span>
                  <a href="#" className="text-pink-500 mr-2">
                    {truncate(tx.owner, 4, 4, 11)}
                  </a>
                  <a href="#">
                    <MdOpenInNew />
                  </a>
                </small>
              </div>

              <p className="text-sm font-medium">{tx.cost}ETH</p>
            </div>
          ))}
        </div>

        {collection.length > 0 && transactions.length > collection.length ? (
          <div className="text-center my-5">
            <button
              className="shadow-sm text-white
            bg-[#8359ff] hover:bg-[#]
            rounded-full cursor-pointer px-6 py-3"
              onClick={() => setEnd(end + count)}
            >
              Load More
            </button>
          </div>
        ) : null}
      </div>
    </motion.div>
  )
}

export default Transactions
