import {
  useGlobalState,
  setGlobalState,
  setLoadingMsg,
  setAlert,
} from '../store'
import { useState } from 'react'

import { create } from 'ipfs-http-client'
import { mintNFT } from '../Blockchain.Services'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'


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

const auth =
  'Basic ' +
  Buffer.from(
    `2LUUndVlwltP9zybXo8qqNz3jxt`+ ':' + `672d522358bb58982c45ce64c1ea3268`,
  ).toString('base64')

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
})

const Create= () => {
  const navigate = useNavigate()
  const [modal] = useGlobalState('modal')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [fileUrl, setFileUrl] = useState('')
  const [imgBase64, setImgBase64] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !price || !description) return

    setGlobalState('modal', 'scale-0')
    setGlobalState('loading', { show: true, msg: 'Uploading IPFS data...' })

    try {
      const created = await client.add(fileUrl)
      const metadataURI = `https://ipfs.io/ipfs/${created.path}`
      const nft = { title, price, description, metadataURI }

      setLoadingMsg('Intializing transaction...')
      setFileUrl(metadataURI)
      await mintNFT(nft)

      resetForm()
      setAlert('Minting completed...', 'green')
      navigate('/profile') 
    } catch (error) {
      console.log('Error uploading file: ', error)
      setAlert('Minting failed...', 'red')
    }
  }

  const changeImage = async (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0])

    reader.onload = (readerEvent) => {
      const file = readerEvent.target.result
      setImgBase64(file)
      setFileUrl(e.target.files[0])
    }
  }

  const closeModal = () => {
    setGlobalState('modal', 'scale-0')
    resetForm()
  }

  const resetForm = () => {
    setFileUrl('')
    setImgBase64(null)
    setTitle('')
    setPrice('')
    setDescription('')
  }

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="modal-wrap md:w-screen h-screen   font-body"
      // className={`fixed top-0 left-0 w-screen h-screen flex items-center
      //   justify-center bg-black bg-opacity-50 `}
    >
      <div className=" bg-[#eef1f7] rounded-xl modal-inner-wrap    ">
        <form className="flex flex-col ">
          <div className="flex flex-row justify-between items-center">
            <p className="font-semibold text-black text-3xl">Upload your Art</p>
          </div>

          <div className="flex flex-row justify-center items-center rounded-xl mt-5 cursor-pointer "></div>

          <div className="flex flex-row justify-between items-center bg-[#ffffff] rounded-xl mt-5">
            <label className="block">
              <span className="sr-only cursor-pointer">Choose profile photo</span>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg, image/webp"
                className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-[#19212c] file:text-gray-400
                  hover:file:bg-[#1d2631]
                  cursor-pointer focus:ring-0 focus:outline-none"
                onChange={changeImage}
                required
              />
            </label>
          </div>

          <div className="flex flex-row justify-between items-center bg-[#ffffff] rounded-xl mt-5">
            <input
              className="block w-full text-sm
                text-black bg-transparent border-0
                focus:outline-none focus:ring-0"
              type="text"
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center bg-[#ffffff] rounded-xl mt-5">
            <input
              className="block w-full text-sm
                text-black bg-transparent border-0
                focus:outline-none focus:ring-0"
              type="number"
              step={0.01}
              min={0.01}
              name="price"
              placeholder="Price (Eth)"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center bg-[#ffffff] rounded-xl mt-5">
            <textarea
              className="block w-full text-sm resize-none
                text-slate-500 bg-transparent border-0
                focus:outline-none focus:ring-0 h-20"
              type="text"
              name="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="flex flex-row justify-center items-center
               text-white text-md bg-[#8359ff]
               py-2 px-5 rounded-full
              drop-shadow-xl border border-transparent
              
              hover:bg-[#8261e6]
              md:w-2/5
              mx-auto
              focus:outline-none focus:ring mt-5"
          >
            Mint Now
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Create