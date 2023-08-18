import File from '../model/file.js'

export const uploadFile = async (req, res) => {
    const fileObj = { name: req?.file?.originalname, path: req?.file?.path }

    try {

        let file = await File.create(fileObj)

        return res.status(201).json({
            success: true,
            message: "File Uploaded",
            path: `https://file-sharing-mern-backend.vercel.app/download/${file._id}`

        })
    } catch (error) {

        return res.status(500).json({
            success: false,
            error: error.message
        })
    }

}



export const downloadFile = async (req, res) => {

    try {

        let file = await File.findById(req.params.id)

        file.downloaded++;

        await file.save()

        return res.download(file.path, file.name)
    } catch (error) {

        return res.status(500).json({
            success: false,
            error: error.message
        })
    }

}



