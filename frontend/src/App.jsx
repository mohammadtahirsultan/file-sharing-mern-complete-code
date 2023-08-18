import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

const App = () => {

  const fileRef = useRef()

  const [file, setFile] = useState("")
  const [downloadLink, setDownloadLink] = useState(false)



  const uploadFile = () => {
    fileRef.current.click()
  }



  const sendFile = async (fileData) => {
    try {
      const { data } = await axios.post("https://file-sharing-mern-backend.vercel.app/upload", fileData)

      return data;

    } catch (error) {
      console.log(error.message);
    }
  }


  useEffect(() => {



    const getImage = async () => {
      if (file) {
        let data = new FormData()
        data.append("name", file.name)
        data.append("file", file)

        let res = await sendFile(data)
        setDownloadLink(res.path)
      }
    }

    getImage()


  }, [file])


  return (
    <main className="w-screen h-screen flex justify-center items-center bg-black">
      <div className="bg-white w-1/2 h-2/3 rounded-lg">
        <h2 className="text-center mt-8 font-bold md:text-2xl">File Sharing App</h2>

        <p className="text-center mt-8 ">Uplad Your File and Get Download Link</p>
        <button className="mt-8 flex mx-auto py-1  text-lg px-6 rounded-lg bg-black text-white" onClick={() => uploadFile()}>Upload</button>
        <input ref={fileRef} type="file" name='file' className='hidden' onChange={(e) => setFile(e.target.files[0])} />
        <div className="flex justify-center items-center w-full flex-wrap">

          {
            downloadLink && <a href={downloadLink} className="mt-8 w-full text-center text-blue-600 hover:text-blue-800">{downloadLink}</a>

          }

        </div>
      </div>

    </main>
  )
}

export default App